// src/data/projects.ts

export type ProjectCategory = 'infrastructure' | 'real-estate' | 'interiors' | 'water' | 'urban-tech';
export type ProjectStatus = 'completed' | 'ongoing' | 'upcoming';

export interface Project {
    slug: string;
    title: string;
    category: ProjectCategory;
    status: ProjectStatus;
    imageUrl: string;
    heroImage: string;
    location: string; // Moved to top level for easier access in cards
    details: { label: string; value: string }[];
    caseStudy: string;
}

export const projectCategories: Record<ProjectCategory, string> = {
    'infrastructure': 'Infrastructure',
    'real-estate': 'Real Estate',
    'interiors': 'Interiors',
    'water': 'Water & Env.',
    'urban-tech': 'Urban Tech'
};

export const projectStatuses: Record<ProjectStatus, string> = {
    'completed': 'Completed',
    'ongoing': 'Ongoing',
    'upcoming': 'Upcoming'
};

export const projectsData: Project[] = [
    {
        slug: 'giga-space-it-park',
        title: 'GIGA SPACE IT PARK',
        category: 'real-estate',
        status: 'completed',
        location: 'Pune, India',
        imageUrl: 'https://picsum.photos/800/600?it-park-architecture',
        heroImage: 'https://picsum.photos/1600/900?it-park-architecture',
        details: [
            { label: 'Client', value: 'Major Tech Conglomerate' },
            { label: 'Services', value: 'Commercial Hub, EPC Contract' },
            { label: 'Year', value: '2024' },
        ],
        caseStudy: `
      <p>The GIGA SPACE IT PARK was a landmark project...</p>
    `
    },
    {
        slug: 'metrorail-cable-bridge',
        title: 'Metro Rail Cable-Stayed Bridge',
        category: 'infrastructure',
        status: 'completed',
        location: 'Mumbai, India',
        imageUrl: 'https://picsum.photos/800/600?cable-stayed-bridge',
        heroImage: 'https://picsum.photos/1600/900?cable-stayed-bridge',
        details: [
            { label: 'Client', value: 'City Metro Rail Corporation' },
            { label: 'Services', value: 'Bridges & Flyovers, Govt. Tender' },
            { label: 'Year', value: '2023' },
        ],
        caseStudy: `
      <p>This project was a critical "nation-building" endeavor...</p>
    `
    },
    {
        slug: 'luxury-apartment-interiors',
        title: 'Skyline Heights Fit-Out',
        category: 'interiors',
        status: 'completed',
        location: 'Bangalore, India',
        imageUrl: 'https://picsum.photos/800/600?luxury-apartment',
        heroImage: 'https://picsum.photos/1600/900?luxury-apartment',
        details: [
            { label: 'Client', value: 'Private Developer' },
            { label: 'Services', value: 'Premium Interiors, Bespoke Furniture' },
            { label: 'Year', value: '2024' },
        ],
        caseStudy: `
      <p>Our task was the complete "Turnkey Luxury" fit-out...</p>
    `
    },
    // NEW PROJECT: Ongoing Example
    {
        slug: 'coastal-highway-expansion',
        title: 'Coastal Highway Expansion',
        category: 'infrastructure',
        status: 'ongoing',
        location: 'Konkan Region',
        imageUrl: 'https://picsum.photos/800/600?highway-construction',
        heroImage: 'https://picsum.photos/1600/900?highway-construction',
        details: [
            { label: 'Client', value: 'NHAI' },
            { label: 'Services', value: 'Roads & Highways' },
            { label: 'Progress', value: '65% Completed' },
        ],
        caseStudy: `
      <p>A challenging terrain project expanding the coastal connectivity...</p>
    `
    },
    // NEW PROJECT: Upcoming Example
    {
        slug: 'smart-city-surveillance',
        title: 'Smart City Surveillance Grid',
        category: 'urban-tech',
        status: 'upcoming',
        location: 'Nashik, India',
        imageUrl: 'https://picsum.photos/800/600?smart-city',
        heroImage: 'https://picsum.photos/1600/900?smart-city',
        details: [
            { label: 'Client', value: 'Municipal Corporation' },
            { label: 'Services', value: 'Urban Tech, Public Amenities' },
            { label: 'Start Date', value: 'Q3 2025' },
        ],
        caseStudy: `
      <p>An upcoming initiative to modernize urban security...</p>
    `
    },
    {
        slug: 'expressway-tunnel-khandala',
        title: 'Khandala Ghat Twin Tunnel',
        category: 'infrastructure',
        status: 'completed',
        location: 'Lonavala, Maharashtra',
        imageUrl: 'https://images.unsplash.com/photo-1519817914152-22d216bb9170?q=80&w=2000&auto=format&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1519817914152-22d216bb9170?q=80&w=2000&auto=format&fit=crop',
        details: [
            { label: 'Client', value: 'MSRDC' },
            { label: 'Length', value: '1.2 KM Dual Tube' },
            { label: 'Method', value: 'NATM Boring' },
            { label: 'Year', value: '2022' },
        ],
        caseStudy: `
            <p>One of the most challenging geological terrains in the Sahyadris. This project involved boring two parallel 3-lane tunnels to decongest the Mumbai-Pune Expressway.</p>
            <h3>Engineering Feat</h3>
            <p>Using the <strong>New Austrian Tunnelling Method (NATM)</strong>, we successfully navigated basalt rock formations with zero structural incidents. The tunnel includes state-of-the-art jet fan ventilation and fire suppression systems.</p>
        `
    },
    {
        slug: 'industrial-corridor-nagpur',
        title: 'Samruddhi Industrial Node',
        category: 'infrastructure',
        status: 'ongoing',
        location: 'Nagpur Region',
        imageUrl: 'https://images.unsplash.com/photo-1565514020176-db79237b60e7?q=80&w=2000&auto=format&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1565514020176-db79237b60e7?q=80&w=2000&auto=format&fit=crop',
        details: [
            { label: 'Client', value: 'MIDC' },
            { label: 'Area', value: '500 Acres' },
            { label: 'Scope', value: 'Roads, Utilities, Drainage' },
            { label: 'Completion', value: 'Q4 2025' },
        ],
        caseStudy: `
            <p>Developing the backbone infrastructure for a new manufacturing hub. This massive site grading and utility project sets the stage for future factories and logistics parks.</p>
        `
    },

    // --- NEW REAL ESTATE PROJECTS ---
    {
        slug: 'skyline-sapphire-towers',
        title: 'Skyline Sapphire Residences',
        category: 'real-estate',
        status: 'upcoming',
        location: 'Baner, Pune',
        imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop',
        details: [
            { label: 'Type', value: 'Luxury Residential' },
            { label: 'Units', value: '120 Apartments' },
            { label: 'Features', value: 'Rooftop Infinity Pool' },
        ],
        caseStudy: `
            <p>A flagship luxury project featuring twin 25-storey towers. Designed with a focus on "Biophilic Design," incorporating vertical gardens and ample natural light for every unit.</p>
        `
    },
    {
        slug: 'tech-hub-co-working',
        title: 'Innov8 Co-Working Campus',
        category: 'real-estate',
        status: 'completed',
        location: 'Hinjewadi, Pune',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
        details: [
            { label: 'Client', value: 'Global Tech Firm' },
            { label: 'Capacity', value: '2,000 Desks' },
            { label: 'Cert', value: 'LEED Gold' },
        ],
        caseStudy: `
            <p>A sustainable commercial campus built with pre-cast concrete technology to reduce construction time by 40%. Includes a dedicated sewage treatment plant (STP) and solar roofing.</p>
        `
    },

    // --- NEW WATER PROJECTS ---
    {
        slug: 'municipal-wtp-solapur',
        title: 'Municipal Water Treatment Plant',
        category: 'water',
        status: 'completed',
        location: 'Solapur, India',
        imageUrl: 'https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?q=80&w=2000&auto=format&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?q=80&w=2000&auto=format&fit=crop',
        details: [
            { label: 'Capacity', value: '50 MLD' },
            { label: 'Tech', value: 'Membrane Filtration' },
            { label: 'Impact', value: '200,000 Citizens Served' },
        ],
        caseStudy: `
            <p>A critical lifeline project ensuring clean drinking water for the city. We handled the complete civil construction, piping, and electromechanical installation.</p>
        `
    },
    {
        slug: 'flood-retention-wall',
        title: 'Riverbank Flood Defence Wall',
        category: 'water',
        status: 'ongoing',
        location: 'Chiplun, Konkan',
        imageUrl: 'https://images.unsplash.com/photo-1595237840801-9252a1762c4c?q=80&w=2000&auto=format&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1595237840801-9252a1762c4c?q=80&w=2000&auto=format&fit=crop',
        details: [
            { label: 'Length', value: '3.5 KM' },
            { label: 'Height', value: '8 Meters' },
            { label: 'Material', value: 'Reinforced Concrete' },
        ],
        caseStudy: `
            <p>Following recent floods, this project aims to protect low-lying villages. We are using rapid-setting concrete and sheet piling to complete the wall before the next monsoon.</p>
        `
    },

    // --- NEW URBAN TECH PROJECTS ---
    {
        slug: 'smart-bus-shelters',
        title: 'Solar-Powered Bus Shelters',
        category: 'urban-tech',
        status: 'completed',
        location: 'Pune City',
        imageUrl: 'https://images.unsplash.com/photo-1570126618953-d43713a22950?q=80&w=2000&auto=format&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1570126618953-d43713a22950?q=80&w=2000&auto=format&fit=crop',
        details: [
            { label: 'Quantity', value: '50 Units' },
            { label: 'Features', value: 'CCTV, USB Charging, WiFi' },
        ],
        caseStudy: `
            <p>Modernizing public transport infrastructure with self-sustaining shelters. Each unit generates its own power for lighting and digital advertisement boards.</p>
        `
    },
    {
        slug: 'highway-digital-billboards',
        title: 'NH-48 Digital Hoarding Grid',
        category: 'urban-tech',
        status: 'upcoming',
        location: 'Mumbai-Pune Hwy',
        imageUrl: 'https://images.unsplash.com/photo-1563229676-e41c4639e4a3?q=80&w=2000&auto=format&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1563229676-e41c4639e4a3?q=80&w=2000&auto=format&fit=crop',
        details: [
            { label: 'Size', value: '40x20 ft Screens' },
            { label: 'Tech', value: 'Remote Content Mgmt' },
        ],
        caseStudy: `
            <p>Implementing a connected grid of high-resolution LED billboards that can be updated in real-time for traffic alerts and commercial advertising.</p>
        `
    }
];