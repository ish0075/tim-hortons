import { FinancialItem, Tenant, KeyStat, ProjectImage } from './types';

/**
 * Helper to convert Google Drive share links to embeddable image URLs.
 * 
 * Instructions:
 * 1. Share the image on Google Drive as "Anyone with the link".
 * 2. Copy the link.
 * 3. Paste it here: driveImage('YOUR_GOOGLE_DRIVE_LINK')
 * 
 * @param urlOrId - The full Google Drive share URL or just the file ID.
 */
export const driveImage = (urlOrId: string): string => {
  // If it's already a direct link (like Imgur) or empty, return as is
  if (!urlOrId || (urlOrId.startsWith('http') && !urlOrId.includes('drive.google.com'))) {
    return urlOrId;
  }
  
  // Extract the File ID from the URL
  let id = urlOrId;
  const match = urlOrId.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    id = match[1];
  }

  // Use the thumbnail API with high resolution (sz=w2500) for better performance/caching than export=view
  return `https://drive.google.com/thumbnail?id=${id}&sz=w2500`;
};

// --- PROJECT CONFIGURATION ---

export const HERO_IMAGE_URL = driveImage("https://i.imgur.com/AXn5Uyj.png");

export const PROJECT_DETAILS = {
  address: "2325 HWY 20, Thorold, ON",
  price: 5100000,
  totalCost: 9750000,
  netProfit: 6133000,
  potentialSellPrice: 15883000,
  capRate: 0.05,
  totalNetIncome: 794150,
  zoning: "Highway Commercial",
  siteSize: "6 Acres",
  status: "Close to Site Plan Approval (SPA)"
};

export const DEVELOPMENT_COSTS: FinancialItem[] = [
  { category: "Land Cost", amount: 4900000, details: "Acquisition" },
  { category: "Storage Units Construction", amount: 2400000, details: "2.47 acres / 45,283 sq ft" },
  { category: "Multi-Unit Shells", amount: 1800000, details: "Burger King / Mary Browns" },
  { category: "Site Services", amount: 200000, details: "Septic / Water Hookups" },
  { category: "Site Work", amount: 350000, details: "Paving, Curbs, Lighting" },
  { category: "Soft Costs", amount: 100000, details: "Permits, Legal, Engineering" },
];

export const TENANTS: Tenant[] = [
  { 
    name: "Tim Hortons", 
    annualIncome: 85000, 
    leaseTerm: "10-Year Escalating", 
    type: "Anchor" 
  },
  { 
    name: "Burger King", 
    annualIncome: 101150, 
    leaseTerm: "20-Year Term", 
    allowance: 70000, 
    sqFtRate: "$35-42 PSF",
    type: "Pad" 
  },
  { 
    name: "Mary Browns", 
    annualIncome: 88000, 
    leaseTerm: "10-Year Term", 
    allowance: 55000, 
    sqFtRate: "$40-42 PSF",
    type: "Pad" 
  },
  { 
    name: "Self Storage Facility", 
    annualIncome: 520000, 
    leaseTerm: "Projected Operational", 
    type: "Storage" 
  },
];

export const KEY_STATS: KeyStat[] = [
  { label: "Asking Price", value: "$5.1M" },
  { label: "Total Project Cost", value: "$9.75M" },
  { label: "Projected Exit", value: "$15.88M" },
  { label: "Net Profit", value: "$6.13M", subtext: "Upon Stabilization" },
];

// Replace these URLs with your Google Drive links using driveImage('LINK')
export const GALLERY_IMAGES: ProjectImage[] = [
  {
    id: 1,
    url: driveImage("https://i.imgur.com/poSQ9y9.png"),
    caption: "Development Concept Plan"
  },
  {
    id: 2,
    url: driveImage("https://i.imgur.com/AXn5Uyj.png"),
    caption: "Master Site Plan"
  },
  {
    id: 3,
    url: driveImage("https://i.imgur.com/JBPKHN7.png"),
    caption: "Detailed Site Layout"
  },
  {
    id: 4,
    url: driveImage("https://i.imgur.com/F963xSg.png"),
    caption: "Interactive Map View"
  },
  {
    id: 5,
    url: driveImage("https://i.imgur.com/1vtrdQ9.png"),
    caption: "Additional Site Details"
  },
  {
    id: 6,
    url: driveImage("https://i.imgur.com/aSwr91u.png"),
    caption: "Site Rendering Details"
  },
  {
    id: 7,
    url: driveImage("https://i.imgur.com/EnmZ2EO.png"),
    caption: "Additional Site Rendering 1"
  },
  {
    id: 8,
    url: driveImage("https://i.imgur.com/Fi8rJdZ.png"),
    caption: "Additional Site Rendering 2"
  },
  {
    id: 9,
    url: driveImage("https://i.imgur.com/LnA3hnP.png"),
    caption: "Site Data Table"
  }
];

export const DUE_DILIGENCE_ITEMS = [
  "Clean Environmental Report (Completed)",
  "Clean Archaeological Report (Completed)",
  "Traffic Study (Completed)",
  "Site Plan Approval (Near Completion)"
];