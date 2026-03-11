export interface Neighbourhood {
  slug: string
  name: string
  avgPrice?: string
  priceRange: string
  dom?: number
  listings?: number
  commute: { vancouver: string; whistler: string }
  walkScore: number
  vibe: string
  pros: string[]
  cons: string[]
  bestFor: string[]
  hiddenGem?: string
  marketInsight: string
  schools: string[]
  dining?: string[]
  listingsUrl: string
  buyerNote?: string
  presaleNote?: string
}

export const neighbourhoods: Neighbourhood[] = [
  {
    slug: 'britannia-beach',
    name: 'Britannia Beach',
    avgPrice: '$1.29M',
    priceRange: '$700K–$1.2M',
    dom: 45,
    listings: 11,
    commute: { vancouver: '35 min', whistler: '50 min' },
    walkScore: 5,
    vibe:
      'Once a mining town, now a mountainside gem. Tight-knit coastal village where history meets a slower, more intentional pace — framed by mountains and Howe Sound.',
    pros: [
      'Ocean views',
      '35 min to Vancouver',
      'Heritage character',
      'Britannia Village townhomes',
      'Surf Park coming 2026',
    ],
    cons: ['Limited amenities', 'Small community', 'Ongoing development nearby'],
    bestFor: ['Couples', 'Remote workers', 'Vancouver commuters', 'Nature lovers'],
    hiddenGem: 'Autostrada Oyster Bar & Grill in the restored historic School House.',
    marketInsight:
      'South Britannia Surf Park approved May 2025 — Canada\'s first Wavegarden surf park + 1,000+ homes. Significant upside potential.',
    schools: ['Britannia Beach Elementary'],
    dining: [
      'Copper Beach Bar + Kitchen',
      'Outbound Station',
      'Autostrada Oyster Bar & Grill',
      'Beaucoup Bakery',
      'Kawartha Dairy',
    ],
    listingsUrl: 'https://corridorhomes.ca/listings/britannia-beach',
  },
  {
    slug: 'valleycliffe',
    name: 'Valleycliffe',
    avgPrice: '$960K',
    priceRange: '$1.0M–$1.5M',
    dom: 36,
    listings: 12,
    commute: { vancouver: '55–70 min', whistler: '40 min' },
    walkScore: 12,
    vibe:
      'Where Squamish\'s story really began — at the base of the Chief, along the Stawamus River. Real yards, locals who\'ve been here decades, trails from your door.',
    pros: [
      'Best value SFH in Squamish',
      'Large flat lots',
      'Great schools',
      'Trail access',
      'Waldorf School option',
    ],
    cons: ['Less sunlight in winter months (Chief shadow)', 'Car dependent'],
    bestFor: ['Families', 'First-time buyers', 'Nature lovers'],
    hiddenGem:
      'The Backyard Squamish — voted best pub in Squamish. Smokebluffs coffee morning, locals\' pub afternoon. Editor remains winless at Wednesday trivia.',
    marketInsight:
      'Best dollar-per-square-foot for SFH in Squamish. Crumpit Woods above shows strong long-term appreciation trajectory.',
    schools: ['Valleycliffe Elementary', "St'a7mes School", 'Squamish Waldorf School'],
    dining: ['The Backyard Squamish'],
    listingsUrl: 'https://corridorhomes.ca/listings/valleycliffe',
    buyerNote:
      'Chief shadow means more shade in winter — ask any local, it\'s a fair trade for having that granite face as your daily backdrop.',
  },
  {
    slug: 'hospital-hill',
    name: 'Hospital Hill',
    avgPrice: '$918K',
    priceRange: '$800K–$1.3M',
    dom: 27,
    listings: 8,
    commute: { vancouver: '60–75 min', whistler: '35 min' },
    walkScore: 15,
    vibe:
      'Classic Squamish properties with spectacular views. Family-friendly, laid-back, with direct trail connections to Valleycliffe and Downtown.',
    pros: [
      'Great views',
      'Smoke Bluffs access',
      'Redbridge resort amenities (plunge pools + gym)',
      'Trail shortcuts to downtown',
    ],
    cons: ['Car dependent', 'Some Hwy 99 road noise'],
    bestFor: ['Families', 'Climbers', 'Active lifestyles'],
    hiddenGem:
      'Trail shortcuts connect Hospital Hill directly to Valleycliffe and Downtown — locals navigate the whole south end on foot.',
    marketInsight:
      'Redbridge development offers resort-style living with hot/cold plunge pools — strong rental appeal for furnished suites.',
    schools: ['Valleycliffe Elementary', 'Howe Sound Secondary'],
    listingsUrl: 'https://corridorhomes.ca/listings/hospital-hill',
  },
  {
    slug: 'crumpit-woods',
    name: 'Crumpit Woods',
    avgPrice: '$3.6M',
    priceRange: '$2.5M–$5M+',
    dom: 42,
    listings: 6,
    commute: { vancouver: '65–80 min', whistler: '30 min' },
    walkScore: 5,
    vibe:
      'Perched above Valleycliffe. Custom and luxury builds that could be in Architectural Digest. Elevation, quiet, spectacular views of Stawamus Chief and Howe Sound.',
    pros: [
      'Unmatched views',
      'Luxury custom builds',
      'Trail network',
      'Quiet',
      'Strong appreciation',
    ],
    cons: ['Steep driveways', 'Very car dependent', 'Premium price'],
    bestFor: ['Luxury buyers', 'Custom build seekers', 'Investment'],
    hiddenGem:
      'Savvy buyers were picking up lots for under $1M a few years ago — those same properties have more than doubled.',
    marketInsight:
      'A few vacant lots remain for custom builds — rare. Before Crumpit Woods became known for ultra-lux homes, early buyers got in well under $1M.',
    schools: ['Valleycliffe Elementary', 'Howe Sound Secondary'],
    listingsUrl: 'https://corridorhomes.ca/listings/crumpit-woods',
    buyerNote:
      'Elevation means steep driveways on some properties. Trail network connects to downtown — the return trip is a climb. Worth it.',
  },
  {
    slug: 'sea-and-sky',
    name: 'Sea + Sky',
    priceRange: 'From $700K',
    dom: 25,
    commute: { vancouver: '60–75 min', whistler: '30 min' },
    walkScore: 20,
    vibe:
      'SEAandSKY by Bosa Properties — 53-acre master-planned development. 1,144 strata + 295 rental homes. 17,000 sqft amenity centre, park with lagoon. Future of Squamish living.',
    pros: [
      'Brand new',
      'World-class amenities',
      'Gondola access',
      'Outdoor pool/hot tub/sauna',
      'Pump track + green spaces',
      'Shoreline greenway',
    ],
    cons: ['Density', 'Strata fees', 'Overpass to downtown not yet open'],
    bestFor: ['Young professionals', 'Active lifestyles', 'Gondola lovers'],
    hiddenGem:
      'Sea to Sky Gondola annual pass — locals work from the world\'s best office, Friday concerts, quick hikes. Best value ticket in town.',
    marketInsight:
      'Downtown overpass coming will significantly improve connectivity and likely drive price appreciation in this community.',
    schools: ['Squamish Elementary', 'Howe Sound Secondary'],
    dining: [
      'Sky Pilot Smokehouse',
      'Backyard Burgers',
      'Oceanview Grill',
      'Edge Bar',
      'Co-Pilot Cafe',
      'The Praguery',
    ],
    listingsUrl: 'https://corridorhomes.ca/search?neighbourhood=sea-sky',
  },
  {
    slug: 'downtown-squamish',
    name: 'Downtown Squamish',
    avgPrice: '$796K',
    priceRange: '$450K–$600K condos/townhomes',
    dom: 9,
    listings: 47,
    commute: { vancouver: '60–75 min', whistler: '30 min' },
    walkScore: 65,
    vibe:
      'Cleveland Avenue anchors it all. Grab a flat white, hit a trail in 10 minutes, make it back for dinner on a patio. Young families and professionals.',
    pros: [
      'Most walkable in Squamish',
      'Fastest sales (9 DOM)',
      'Restaurant scene',
      'Waterfront trails',
      'Estuary access',
      'French Immersion',
    ],
    cons: ['Density', 'Noise', 'Parking', 'Ongoing construction'],
    bestFor: ['Young professionals', 'First-time condo buyers', 'Walkability seekers'],
    hiddenGem:
      '1914 Coffee Company for coffee nerds seeking exceptional coffee. Noshy and Green Olive for world-class sandwiches — local institutions.',
    marketInsight:
      'Fastest-moving market in Squamish at 9 DOM. Waterfront development pipeline will reshape supply significantly — buy before it completes.',
    schools: [
      'Squamish Elementary (French Immersion)',
      "L'Ecole Les Aiglons",
      'Howe Sound Secondary',
    ],
    dining: [
      'Saha Eatery',
      'Copper Coil Still & Grill',
      'Howe Sound Brew Pub',
      'Peak Provisions',
      'Broken Seal',
      'Buvette',
      'Noshy',
      'Green Olive',
      '1914 Coffee Company',
      'Fox & Oak',
      'A-Frame Brewing',
      'Salted Vine',
    ],
    listingsUrl: 'https://corridorhomes.ca/listings/downtown-squamish',
  },
  {
    slug: 'dentville',
    name: 'Dentville',
    avgPrice: '$959K',
    priceRange: '$800K–$1.5M',
    dom: 30,
    listings: 17,
    commute: { vancouver: '60–75 min', whistler: '35 min' },
    walkScore: 28,
    vibe:
      "One of Squamish's original neighbourhoods — once home to earliest mill workers. Heritage character meets modern townhomes. Walk to downtown and A-Frame Brewing.",
    pros: [
      'Walking distance to downtown',
      'Heritage character',
      'Modern townhome options (Arbutus Grove, Wilson Village)',
      'Family-friendly',
      'Good transit',
    ],
    cons: ['Buckley Ave traffic corridor nearby', 'Older housing stock in parts'],
    bestFor: ['Families', 'Downtown walkers', 'Character home buyers'],
    hiddenGem:
      'Arbutus Grove townhomes — 3-bed/3-bath with double garages, south-facing balconies, and rooftop patios. Strong value.',
    marketInsight:
      'Heritage character + downtown walkability is a durable combination. Check individual property distance from Buckley Ave.',
    schools: ['Valleycliffe Elementary', 'Howe Sound Secondary'],
    dining: ['A-Frame Brewing'],
    listingsUrl: 'https://corridorhomes.ca/listings/dentville',
    buyerNote:
      'Buckley Ave is a main traffic corridor — look for homes not directly adjacent.',
  },
  {
    slug: 'northyards',
    name: 'Northyards',
    avgPrice: '$1.08M',
    priceRange: '$900K–$1.4M',
    dom: 11,
    listings: 14,
    commute: { vancouver: '60–75 min', whistler: '35 min' },
    walkScore: 22,
    vibe:
      'Completely surrounded by trail networks — paradise for cyclists and hikers. Modern higher-density living, pet-friendly buildings, bike rooms, modern amenities.',
    pros: [
      'Surrounded by trails',
      'Modern buildings',
      'Close to downtown + business park',
      'Pet-friendly',
      'Fast sales (11 DOM)',
    ],
    cons: ['Density', 'Less established character', 'Strata fees'],
    bestFor: ['Active couples', 'Cyclists', 'Young professionals', 'Remote workers'],
    hiddenGem:
      'Wonderlands Emporium — unique cafe and plant store as communal gathering space. Backcountry Brewing and Geo Cider right nearby.',
    marketInsight:
      'Trail network + proximity to Squamish business park makes it ideal for active remote workers. Fast absorption at 11 DOM.',
    schools: ['Valleycliffe Elementary', 'Howe Sound Secondary'],
    dining: ['Wonderlands Emporium', 'Backcountry Brewing', 'Geo Cider', 'Indian Masala'],
    listingsUrl: 'https://corridorhomes.ca/listings/northyards',
  },
  {
    slug: 'garibaldi-highlands',
    name: 'Garibaldi Highlands',
    priceRange: '$1.4M–$2.0M+',
    dom: 35,
    commute: { vancouver: '65–80 min', whistler: '25 min' },
    walkScore: 15,
    vibe:
      'Most sought-after family neighbourhood. Mature trees, mountain views, quiet residential streets, and the best school catchment in Squamish.',
    pros: [
      'Top schools (Fraser 6.1/10)',
      'Mature trees + mountain views',
      'Quiet streets',
      'Strongest community',
      'Best school catchment in Squamish',
    ],
    cons: ['Premium price', 'Car dependent', 'Limited condo/townhome options'],
    bestFor: ['Families prioritizing schools', 'Established buyers', 'Long-term residents'],
    hiddenGem:
      'Garibaldi Highlands Elementary has the highest Fraser Institute rating in Squamish (6.1/10) — families move here specifically for this school.',
    marketInsight:
      'Commands a consistent school premium. Best price-per-sqft retention in Squamish due to school catchment demand.',
    schools: ['Garibaldi Highlands Elementary (6.1/10)', 'Howe Sound Secondary'],
    listingsUrl: 'https://corridorhomes.ca/search?neighbourhood=garibaldi-highlands',
  },
  {
    slug: 'garibaldi-estates',
    name: 'Garibaldi Estates',
    priceRange: '$1.2M–$1.8M',
    dom: 32,
    commute: { vancouver: '65–80 min', whistler: '25 min' },
    walkScore: 22,
    vibe:
      'Mixed community with diverse housing stock, central location, and good access to schools and amenities. A solid all-rounder.',
    pros: [
      'Central location',
      'Diverse housing',
      'Good school access',
      'Better value than Garibaldi Highlands for similar school proximity',
    ],
    cons: ['Less prestigious than Garibaldi Highlands', 'Some busy roads'],
    bestFor: ['Families', 'Value seekers', 'All-rounder buyers'],
    marketInsight:
      'Good value alternative to Garibaldi Highlands — similar school access at lower entry price point.',
    schools: [
      'Mamquam Elementary',
      'Garibaldi Highlands Elementary',
      'Howe Sound Secondary',
    ],
    listingsUrl: 'https://corridorhomes.ca/search?neighbourhood=garibaldi-estates',
  },
  {
    slug: 'brackendale',
    name: 'Brackendale',
    priceRange: '$1.3M–$1.9M',
    dom: 38,
    commute: { vancouver: '75–90 min', whistler: '20 min' },
    walkScore: 10,
    vibe:
      'Artistic, nature-focused community with village atmosphere. Eagle viewing capital of Canada. Larger properties, strong connection to outdoor lifestyle.',
    pros: [
      'Largest lots',
      'Quiet',
      'Eagle Festival',
      'Village feel',
      'Best value for acreage',
    ],
    cons: [
      'Far from amenities',
      'Low walkability',
      'Flooding history in some areas',
      'Long Vancouver commute',
    ],
    bestFor: ['Acreage seekers', 'Nature lovers', 'Whistler workers', 'Remote workers'],
    hiddenGem:
      'Brackendale Eagle Festival every January — one of the most unique wildlife experiences in BC.',
    marketInsight:
      'Best value for large lots and acreage on the Sea to Sky. Increasingly popular with Whistler workers for the shorter northbound commute.',
    schools: ['Brackendale Elementary (5.2/10)', 'Howe Sound Secondary'],
    listingsUrl: 'https://corridorhomes.ca/search?neighbourhood=brackendale',
  },
  {
    slug: 'tantalus',
    name: 'Tantalus',
    priceRange: '$1.5M–$2.5M+',
    dom: 40,
    commute: { vancouver: '70–85 min', whistler: '25 min' },
    walkScore: 8,
    vibe:
      'Modern, upscale community with new construction, contemporary design, and spectacular Tantalus Mountain range views.',
    pros: [
      'New builds with warranties',
      'Mountain views',
      'Modern finishes',
      'Quiet',
    ],
    cons: ['Car dependent', 'Premium pricing', 'Far from amenities'],
    bestFor: ['Luxury buyers', 'New build seekers', 'View-focused buyers'],
    marketInsight:
      'New builds command premium but offer modern efficiency and warranties unavailable in older housing stock.',
    schools: ['Brackendale Elementary', 'Howe Sound Secondary'],
    listingsUrl: 'https://corridorhomes.ca/search?neighbourhood=tantalus',
  },
  {
    slug: 'university-heights',
    name: 'University Heights',
    priceRange: '$1.5M–$2.5M+',
    dom: 42,
    commute: { vancouver: '65–80 min', whistler: '30 min' },
    walkScore: 5,
    vibe:
      'Upscale, modern community with spectacular views and high-end contemporary finishes.',
    pros: [
      'Spectacular views',
      'High-end finishes',
      'Modern architecture',
      'Quiet',
    ],
    cons: ['Very car dependent', 'Premium price', 'Remote from amenities'],
    bestFor: ['Luxury buyers', 'View seekers', 'Established professionals'],
    marketInsight:
      'View properties in Squamish retain value better than non-view equivalents. Strong appreciation track record.',
    schools: ['Mamquam Elementary', 'Howe Sound Secondary'],
    listingsUrl: 'https://corridorhomes.ca/search?neighbourhood=university-heights',
  },
  {
    slug: 'oceanfront-squamish',
    name: 'Oceanfront Squamish',
    priceRange: 'Coming 2026 (pre-sale)',
    commute: { vancouver: '60–75 min', whistler: '30 min' },
    walkScore: 40,
    vibe:
      'Brand-new master-planned waterfront community under development. Mix of homes, businesses, green spaces, water access. Rooftop lounge, entertainment room, wellness studio.',
    pros: [
      'Waterfront location',
      'Brand new',
      'Mixed-use master plan',
      'Shoreline greenway',
      'Pump track + outdoor pool',
      'House of Lager already open',
    ],
    cons: ['Under construction', 'Strata fees', 'Phased rollout'],
    bestFor: ['Pre-sale buyers', 'Waterfront lifestyle seekers'],
    hiddenGem:
      "House of Lager has already become a local watering hole — oceanfront views, outstanding beers, epic fries. Worth a visit even while exploring.",
    marketInsight:
      'Slated for sale early 2026 — register early for priority access.',
    schools: ['Squamish Elementary', 'Howe Sound Secondary'],
    listingsUrl: 'https://corridorhomes.ca/search?neighbourhood=oceanfront',
    presaleNote: 'Slated for sale early 2026. Register to be first notified.',
  },
]

export function getNeighbourhood(slug: string): Neighbourhood | undefined {
  return neighbourhoods.find((n) => n.slug === slug)
}
