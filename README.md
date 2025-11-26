# 2325 HWY 20 Commercial Development Investment Portal

This application is a specialized real estate investment portal designed to present the "2325 HWY 20" commercial development project to institutional investors and developers. It highlights financial proformas, site plans, tenant profiles, and projected returns in a modern, responsive interface.

## Project Overview

The goal of this website is to provide financial transparency and project de-risking for potential buyers. It serves as a digital "Offering Memorandum".

**Key Sections:**
- **Executive Summary:** High-level project stats (asking price, zoning, status).
- **Site Visuals:** Interactive carousel of renderings, master site plans, and buildout videos.
- **Financial Proforma:** Detailed tables for Development Costs and Revenue Schedules.
- **Tenant Profile:** Specific lease terms for national tenants (Tim Hortons, Burger King, etc.).
- **Valuation:** Cap rate analysis and projected exit strategies.
- **Multimedia:** Integrated podcast player and video walkthroughs.

## Configuration & Content Management

The application is designed to be easily updated without modifying the React component logic. **All data is centralized in `constants.ts`.**

### 1. Updating Financials & Data
Open `constants.ts` to modify:
- `PROJECT_DETAILS`: Global stats like Price, Net Profit, Cap Rate.
- `DEVELOPMENT_COSTS`: Line items for the "Development Costs" table.
- `TENANTS`: Tenant specific data (Rent, Lease Terms, Allowances).
- `KEY_STATS`: The floating stats cards in the Hero section.

### 2. Updating Images
Images are managed in the `GALLERY_IMAGES` array in `constants.ts`.

**Google Drive Integration:**
The app includes a helper function `driveImage()` that converts standard Google Drive sharing links into embeddable images.
1. Upload image to Google Drive.
2. Set permissions to "Anyone with the link".
3. Copy the link.
4. Add it to `constants.ts`: `url: driveImage('YOUR_LINK_HERE')`.

## Technical Stack

- **Framework:** React 19
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Hosting Strategy:** Optimized for static hosting (e.g., Firebase Hosting, Vercel, Netlify).

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm start
   ```
3. Build for production:
   ```bash
   npm run build
   ```
