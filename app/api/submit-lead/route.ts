/**
 * /app/api/submit-lead/route.ts
 * Handles guide lead submissions (neighbourhood guide + school guide):
 *   1. Sends notification email to agent via Resend
 *   2. Posts lead directly to Lofty API
 *
 * Env vars required:
 *   RESEND_API_KEY          -- Resend API key
 *   LOFTY_API_KEY           -- Lofty API key
 */

import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const AGENT_NAME  = 'EJ Johnson'
const AGENT_EMAIL = 'eric@corridorhomes.ca'
const FROM_EMAIL  = 'guides@corridorhomes.ca'
const FROM_NAME   = 'CorridorHomes.ca'

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

export async function POST(req: NextRequest) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400, headers })
  }

  const firstName = body.firstName as string | undefined
  const lastName  = body.lastName  as string | undefined
  const email     = body.email     as string | undefined
  const source    = body.source    as string | undefined
  const tags      = body.tags      as string[] | undefined

  if (!firstName || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400, headers })
  }

  const errors: string[] = []
  const fullName = lastName ? `${firstName} ${lastName}` : firstName

  // ── 1. Send notification to agent ──────────────────────────────────────────
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        to: AGENT_EMAIL,
        subject: `New guide lead: ${fullName} — ${source || 'unknown source'}`,
        html: buildAgentEmail(fullName, email, source || ''),
      })
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error('Resend agent email error:', msg)
      errors.push('agent_email')
    }
  }

  // ── 2. Post to Lofty API ────────────────────────────────────────────────────
  const loftyApiKey = process.env.LOFTY_API_KEY

  if (loftyApiKey) {
    try {
      const loftyPayload: Record<string, unknown> = {
        firstName,
        ...(lastName && { lastName }),
        email,
        emails: [email],
        source: source || 'guide',
        ...(tags && { tags }),
      }

      const loftyRes = await fetch('https://api.lofty.com/v1.0/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `token ${loftyApiKey}`,
        },
        body: JSON.stringify(loftyPayload),
      })

      const loftyBody = await loftyRes.text()
      if (!loftyRes.ok) {
        console.error('Lofty API error:', loftyRes.status, loftyBody)
        errors.push('lofty')
      } else {
        console.log('Lofty API success:', loftyRes.status, loftyBody)
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error('Lofty API error:', msg)
      errors.push('lofty')
    }
  } else {
    console.warn('No LOFTY_API_KEY set')
  }

  return NextResponse.json(
    { ok: true, errors: errors.length ? errors : undefined },
    { status: 200, headers }
  )
}

// ── Email template ────────────────────────────────────────────────────────────

function escHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildAgentEmail(name: string, email: string, source: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#F5F0E8;font-family:'DM Sans',system-ui,sans-serif;">
  <div style="max-width:520px;margin:0 auto;padding:32px 16px;">
    <div style="background:#2C4A3E;padding:20px 24px;border-radius:4px 4px 0 0;">
      <p style="margin:0;font-size:0.75rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#C8A96E;">New Guide Lead</p>
    </div>
    <div style="background:#ffffff;padding:24px;border:1px solid rgba(44,74,62,0.1);border-top:none;border-radius:0 0 4px 4px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px 10px;border-bottom:1px solid #eee;font-size:0.8rem;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;width:100px;">Name</td><td style="padding:6px 10px;border-bottom:1px solid #eee;font-size:0.875rem;font-weight:600;color:#1A1A1A;">${escHtml(name)}</td></tr>
        <tr><td style="padding:6px 10px;border-bottom:1px solid #eee;font-size:0.8rem;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;">Email</td><td style="padding:6px 10px;border-bottom:1px solid #eee;font-size:0.875rem;color:#1A1A1A;"><a href="mailto:${escHtml(email)}" style="color:#2C4A3E;">${escHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 10px;font-size:0.8rem;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;">Source</td><td style="padding:6px 10px;font-size:0.875rem;color:#1A1A1A;">${escHtml(source)}</td></tr>
      </table>
    </div>
  </div>
</body>
</html>
  `.trim()
}
