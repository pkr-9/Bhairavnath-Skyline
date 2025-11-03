// This object defines our categories and their display names
export const projectCategories = {
    'infrastructure': 'Infrastructure',
    'real-estate': 'Real Estate',
    'interiors': 'Interiors'
};

// This is our main project database
export const projectsData = [
    {
        slug: 'giga-space-it-park',
        title: 'GIGA SPACE IT PARK',
        category: 'real-estate',
        imageUrl: 'https://picsum.photos/800/600?it-park-architecture',
        heroImage: 'https://picsum.photos/1600/900?it-park-architecture',
        details: [
            { label: 'Client', value: 'Major Tech Conglomerate' },
            { label: 'Location', value: 'Pune, India' },
            { label: 'Services', value: 'Commercial Hub, EPC Contract' },
            { label: 'Year', value: '2024' },
        ],
        caseStudy: `
      <p>The GIGA SPACE IT PARK was a landmark project to create a 
      state-of-the-art commercial hub for over 20,000 employees. Our team 
      was responsible for the complete Design-to-Delivery EPC contract.</p>
      <p class="mt-4"><strong>Challenge:</strong> The primary challenge was an 
      aggressive 18-month timeline and the integration of complex "smart 
      pipeline" infrastructure for water and data.</p>
      <p class="mt-4"><strong>Solution:</strong> By leveraging trenchless 
      technology and a 24/7 parallel-work model, we successfully delivered 
      the project on time, fully compliant with all Green Norms.</p>
    `
    },
    {
        slug: 'metrorail-cable-bridge',
        title: 'Metro Rail Cable-Stayed Bridge',
        category: 'infrastructure',
        imageUrl: 'https://picsum.photos/800/600?cable-stayed-bridge,night',
        heroImage: 'https://picsum.photos/1600/900?cable-stayed-bridge,night',
        details: [
            { label: 'Client', value: 'City Metro Rail Corporation' },
            { label: 'Location', value: 'Mumbai, India' },
            { label: 'Services', value: 'Bridges & Flyovers, Govt. Tender' },
            { label: 'Year', value: '2023' },
        ],
        caseStudy: `
      <p>This project was a critical "nation-building" endeavor to connect 
      two major city districts. As the primary contractor, we were 
      responsible for the bridge's core structure.</p>
      <p class="mt-4"><strong>Challenge:</strong> Spanning a 600m active 
      navigation channel required a design with minimal environmental impact 
      and no disruption to cargo traffic.</p>
      <p class="mt-4"><strong>Solution:</strong> We engineered a cable-stayed 
      solution, fabricating and lifting segments from barges, which allowed 
      continuous channel operation. The project is a new icon for the city.</p>
    `
    },
    {
        slug: 'luxury-apartment-interiors',
        title: 'Luxury Apartment Fit-Out',
        category: 'interiors',
        imageUrl: 'https://picsum.photos/800/600?luxury-apartment-interior',
        heroImage: 'https://picsum.photos/1600/900?luxury-apartment-interior',
        details: [
            { label: 'Client', value: 'Private Developer' },
            { label: 'Location', value: 'Bangalore, India' },
            { label: 'Services', value: 'Premium Interiors, Bespoke Furniture' },
            { label: 'Year', value: '2024' },
        ],
        caseStudy: `
      <p>Our task was the complete "Turnkey Luxury" fit-out for a 50-unit 
      high-rise. The client brief was simple: "Aesthetic Mastery."</p>
      <p class="mt-4"><strong>Challenge:</strong> Sourcing and book-matching 
      over 5,000 sq. ft. of Italian marble while fabricating 50 identical 
      smart-storage modular kitchens.</p>
      <p class="mt-4"><strong>Solution:</strong> Our global procurement 
      team secured the materials, and our artisans executed flawflessly, 
      delivering all units with herringbone wooden flooring, quartz tops, 
      and motorized blinds.</p>
    `
    },
    // Add 3-4 more projects here for a full gallery
];