// src/data/serviceDetails.ts
import {
    Truck, Ruler, ShieldCheck, Zap,
    Droplet, Wifi, Layers, Anchor, Maximize
} from "lucide-react";

export interface ServiceDetail {
    id: string;
    tagline: string;
    stats: { label: string; value: string }[];
    processSteps: { title: string; desc: string }[];
    features: { title: string; desc: string; icon: any }[];
    techSpecs: { category: string; specs: string[] }[];
    faqs: { question: string; answer: string }[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
    'infrastructure': {
        id: 'infrastructure',
        tagline: "Engineering the Arteries of the Nation",
        stats: [
            { label: "Daily Paving Capacity", value: "2.5 KM" },
            { label: "Bridge Spans", value: "Up to 800m" },
            { label: "Tunnel Boring", value: "NATM Tech" },
            { label: "Fleet Strength", value: "150+ Units" }
        ],
        processSteps: [
            { title: "Geotechnical Survey", desc: "Advanced soil testing, topographical mapping, and feasibility analysis using LiDAR drones." },
            { title: "Design & Structural Modeling", desc: "3D BIM modeling and load simulation for bridges and highways to ensure 100-year durability." },
            { title: "Earthworks & Grading", desc: "Precision cut-and-fill operations using GPS-guided bulldozers for perfect road alignment." },
            { title: "Paving & Concreting", desc: "Automated paver deployment for asphalt/concrete layers with strict temperature control." },
            { title: "Quality Assurance", desc: "Core sampling, density testing, and load testing before handover." }
        ],
        features: [
            { title: "Cable-Stayed Mastery", desc: "Expertise in Harp and Fan cable arrangements for long-span bridges.", icon: Anchor },
            { title: "Trenchless Tunnelling", desc: "Minimal surface disruption using micro-tunneling and boring machines.", icon: Layers },
            { title: "Industrial Grade", desc: "Heavy-duty pavement design for industrial corridors and logistics parks.", icon: Truck }
        ],
        techSpecs: [
            { category: "Roads", specs: ["Flexible Pavement (Asphalt)", "Rigid Pavement (PQC)", "Soil Stabilization"] },
            { category: "Bridges", specs: ["Pre-stressed Concrete", "Steel-Composite Girders", "Seismic Dampers"] },
            { category: "Machinery", specs: ["Wirtgen Pavers", "Vibratory Rollers (20T)", "Excavators (CAT/Komatsu)"] }
        ],
        faqs: [
            { question: "Do you handle land acquisition?", answer: "We assist government bodies with survey and demarcation but do not handle legal acquisition directly." },
            { question: "What is your daily concreting capacity?", answer: "Our batching plants can deliver up to 2000 cubic meters of concrete per day." }
        ]
    },
    'real-estate': {
        id: 'real-estate',
        tagline: "Building Ecosystems for Life & Work",
        stats: [
            { label: "Delivered Area", value: "5M+ Sq.Ft" },
            { label: "Safety Rating", value: "5-Star" },
            { label: "Green Rating", value: "IGBC Gold" },
            { label: "Projects", value: "12+" }
        ],
        processSteps: [
            { title: "Site Selection", desc: "Analyzing connectivity, future growth corridors, and environmental impact." },
            { title: "Master Planning", desc: "Optimizing layout for sunlight, ventilation, and community spaces." },
            { title: "Construction (Mivan)", desc: "Using Aluminium Formwork (Mivan) for faster, stronger, and smoother monolithic casting." },
            { title: "MEP Installation", desc: "Integrated Mechanical, Electrical, and Plumbing systems with smart metering." },
            { title: "Finishing & Handover", desc: "Premium tiling, painting, and rigorous snagging inspections." }
        ],
        features: [
            { title: "Smart Automation", desc: "App-based control for lighting, security, and climate in luxury units.", icon: Wifi },
            { title: "Sustainable Design", desc: "Rainwater harvesting, STPs, and solar power integration.", icon: Zap },
            { title: "High-Rise Safety", desc: "Advanced fire suppression and earthquake-resistant structural design.", icon: ShieldCheck }
        ],
        techSpecs: [
            { category: "Construction", specs: ["Mivan Aluminium Formwork", "Post-Tensioned Slabs", "AAC Blocks"] },
            { category: "Amenities", specs: ["Infinity Pools", "EV Charging Stations", "Co-working Lounges"] },
            { category: "Safety", specs: ["24/7 CCTV Grid", "Video Door Phones", "Biometric Access"] }
        ],
        faqs: [
            { question: "Are your projects RERA approved?", answer: "Yes, every single project is registered with RERA and complies with all local bylaws." },
            { question: "Do you provide rental management?", answer: "For our commercial IT parks, we offer comprehensive facility management and leasing support." }
        ]
    },
    'water': {
        id: 'water',
        tagline: "Sustainable Solutions for a Thirsty World",
        stats: [
            { label: "Treatment Capacity", value: "100 MLD" },
            { label: "Pipeline Laid", value: "500+ KM" },
            { label: "Villages Served", value: "50+" },
            { label: "Dams Built", value: "3 Major" }
        ],
        processSteps: [
            { title: "Hydrological Survey", desc: "Mapping water flow, tables, and catchment areas." },
            { title: "Plant Design", desc: "Custom engineering for WTP/STP based on water chemical analysis." },
            { title: "Excavation & Civil Work", desc: "Constructing massive retention tanks, clarifiers, and filtration beds." },
            { title: "Electromechanical Fit-out", desc: "Installing high-capacity pumps, SCADA systems, and filtration membranes." },
            { title: "Commissioning", desc: "Pressure testing pipelines and water quality analysis." }
        ],
        features: [
            { title: "Advanced Filtration", desc: "Reverse Osmosis (RO) and Ultrafiltration (UF) technologies.", icon: Droplet },
            { title: "Flood Control", desc: "Reinforced concrete retaining walls and check dams.", icon: ShieldCheck },
            { title: "Smart Metering", desc: "IoT-enabled water meters for leak detection and usage tracking.", icon: Wifi }
        ],
        techSpecs: [
            { category: "Treatment", specs: ["Moving Bed Biofilm Reactor (MBBR)", "Sequencing Batch Reactor (SBR)", "Ozonation"] },
            { category: "Piping", specs: ["DI (Ductile Iron) Pipes", "HDPE High-Pressure Lines", "Glass Fused Steel Tanks"] },
            { category: "Control", specs: ["PLC/SCADA Automation", "Remote Monitoring Apps"] }
        ],
        faqs: [
            { question: "Can you upgrade existing STPs?", answer: "Yes, we specialize in retrofitting old plants with modern MBBR technology to boost capacity." },
            { question: "Do you handle industrial effluent?", answer: "We build specialized ETPs (Effluent Treatment Plants) for chemical and textile industries." }
        ]
    },
    'interiors': {
        id: 'interiors',
        tagline: "Where Aesthetics Meet Ergonomics",
        stats: [
            { label: "Units Completed", value: "500+" },
            { label: "Design Styles", value: "15+" },
            { label: "Material Sourcing", value: "Global" },
            { label: "Warranty", value: "10 Years" }
        ],
        processSteps: [
            { title: "Design Consultation", desc: "Understanding client lifestyle and creating 3D mood boards." },
            { title: "Material Selection", desc: "Curating Italian marble, veneers, and hardware from global vendors." },
            { title: "Factory Fabrication", desc: "Precision cutting of modular furniture to ensure zero-error assembly." },
            { title: "On-site Execution", desc: "Civil changes, false ceiling, electrical, and final assembly." },
            { title: "Styling & Handover", desc: "Deep cleaning and final decor placement." }
        ],
        features: [
            { title: "Bespoke Carpentry", desc: "Custom-built wardrobes and units that fit your space perfectly.", icon: Ruler },
            { title: "Global Finishes", desc: "Imported Italian Marble, German Hardware (Hettich/Hafele).", icon: Maximize },
            { title: "Smart Lighting", desc: "Dimmable, app-controlled architectural lighting profiles.", icon: Zap }
        ],
        techSpecs: [
            { category: "Materials", specs: ["Marine Grade Plywood (BWP)", "Anti-scratch Acrylic", "Quartz Countertops"] },
            { category: "Finishes", specs: ["PU Polish", "Duco Paint", "Veneer Wrapping"] },
            { category: "Hardware", specs: ["Soft-close Hinges", "Tandem Boxes", "Biometric Drawer Locks"] }
        ],
        faqs: [
            { question: "Do you provide 3D designs?", answer: "Yes, we provide realistic 3D renders/walkthroughs before starting any work." },
            { question: "What is the timeline for a 3BHK?", answer: "Typically 45-60 days for a complete turnkey solution." }
        ]
    },
    'urban-tech': {
        id: 'urban-tech',
        tagline: "Smart Solutions for Modern Cities",
        stats: [
            { label: "Active Screens", value: "200+" },
            { label: "Bus Stops", value: "50+" },
            { label: "Footfall Covered", value: "1M+/Day" },
            { label: "Uptime", value: "99.9%" }
        ],
        processSteps: [
            { title: "Location Survey", desc: "Identifying high-visibility, high-traffic zones for maximum impact." },
            { title: "Structural Engineering", desc: "Designing wind-resistant unipole structures." },
            { title: "Tech Integration", desc: "Installing LED modules, controllers, and 4G/5G connectivity." },
            { title: "Content Management", desc: "Setting up the remote CMS for real-time ad updates." },
            { title: "Maintenance", desc: "24/7 monitoring and automated diagnostics." }
        ],
        features: [
            { title: "Digital Hoardings", desc: "High-brightness P6/P10 LED outdoor screens.", icon: Wifi },
            { title: "Smart Furniture", desc: "Solar-powered benches and bus stops with USB charging.", icon: Zap },
            { title: "Public Safety", desc: "Integrated CCTV and Emergency Call Boxes (ECB).", icon: ShieldCheck }
        ],
        techSpecs: [
            { category: "Display", specs: ["Outdoor LED (6500 nits)", "IP65 Weatherproof", "Auto-Brightness Sensor"] },
            { category: "Connectivity", specs: ["4G/LTE Modules", "Cloud CMS", "Real-time Analytics"] },
            { category: "Structure", specs: ["Galvanized Steel Poles", "Wind load tested up to 150 kmph"] }
        ],
        faqs: [
            { question: "Can the screens handle monsoon rain?", answer: "Yes, all our outdoor assets are IP65 rated and completely waterproof." },
            { question: "Do you sell ad space?", answer: "We build the infrastructure; we also have partners who manage ad bookings." }
        ]
    }
};