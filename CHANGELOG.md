# Changelog

All notable changes to the Ezraa Dashboard will be documented in this file.

## [0.2.0] - 2026-02-08

### Added
- **Multi-account sidebar system**: Separate sidebar menus for individual accounts, company home, and five company module views (Order Plants, Carbon Accounting, ESG, Sustainability Report, Geospatial Monitoring)
- **Company dashboard home page**: Five-card category selector with colored cards linking to each company module
- **Dynamic menu switching**: Sidebar automatically switches menu based on current route path (`/i/*` for individual, `/c/*` for company modules)
- **"Back to Home" sidebar link**: Shown when inside a company module view to navigate back to the dashboard
- **Cart component**: Added shopping cart to the header navigation bar
- **ComingSoon placeholder page**: Catch-all route component for company module pages not yet built
- **Route configuration**: Centralized route definitions in `src/config/routes.ts`
- **Cart store** (`src/stores/cart.ts`): State management for cart functionality
- **Localization strings**: Added 70+ new translation keys for all company modules in both English and Arabic (en.json, ae.json)
- **Font assets**: Added calendar, feather, flag-icon, font-awesome, ico, slick, and themify icon fonts
- **Empty cart SVG**: Added `public/images/empty-cart.svg`
- **JS build outputs**: Compiled `.vue.js` files for all components, stores, utils, and types

### Changed
- **Logo**: Replaced image-based logo with text-based "LOGO" placeholder in both header and sidebar
- **Sidebar collapsed icon**: Replaced logo-icon image with text "L" in collapsed sidebar state
- **Dashboard title**: Changed from "Dashboard | Ezraa" to "Home | Ezraa"
- **Route exports**: `src/router/routes.ts` now re-exports from centralized `src/config/routes`
- **Menu store**: Added `switchMenu()`, `showingCompanyView()`, and route watcher for dynamic sidebar menu switching

### Removed
- **NoticeSlider**: Removed from header layout
- **Image logo imports**: Removed `getImage()` utility usage from Logo.vue and Sidebar.vue

## [0.1.0] - 2026-02-08

### Added
- Initial Ezraa Vue Dashboard skeleton with full layout system
- Header, sidebar, footer, breadcrumbs, and customizer with 11 layout themes
- Arabic + English i18n with RTL support
- Dark mode toggle
- Responsive sidebar with bookmark and search functionality
