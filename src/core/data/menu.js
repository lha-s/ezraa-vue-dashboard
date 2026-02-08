// ═══════════════════════════════════════════════════════════
// INDIVIDUAL ACCOUNT SIDEBAR
// Flat sidebar, same on all /i/* pages
// ═══════════════════════════════════════════════════════════
export const individualMenuItems = [
    { main_title: 'general' },
    {
        title: 'dashboard',
        id: 'i-dashboard',
        icon: 'home',
        type: 'link',
        path: '/i/dashboard',
        active: true,
        level: 1,
    },
    {
        title: 'projects',
        id: 'i-projects',
        icon: 'project',
        type: 'link',
        path: '/i/projects',
        active: false,
        level: 1,
    },
    {
        title: 'my_trees',
        id: 'i-trees',
        icon: 'widget',
        type: 'link',
        path: '/i/trees',
        active: false,
        level: 1,
    },
    {
        title: 'certificates',
        id: 'i-certificates',
        icon: 'file',
        type: 'link',
        path: '/i/certificates',
        active: false,
        level: 1,
    },
    {
        title: 'tracking',
        id: 'i-tracking',
        icon: 'maps',
        type: 'link',
        path: '/i/tracking',
        active: false,
        level: 1,
    },
    {
        title: 'reports',
        id: 'i-reports',
        icon: 'charts',
        type: 'link',
        path: '/i/reports',
        active: false,
        level: 1,
    },
];
// ═══════════════════════════════════════════════════════════
// COMPANY HOME SIDEBAR
// Minimal sidebar shown on /c/dashboard (5-card selector page)
// ═══════════════════════════════════════════════════════════
export const companyHomeMenuItems = [
    { main_title: 'general' },
    {
        title: 'home',
        id: 'c-home',
        icon: 'home',
        type: 'link',
        path: '/dashboard',
        active: true,
        level: 1,
    },
];
// ═══════════════════════════════════════════════════════════
// COMPANY VIEW 1: ORDER PLANTS
// /c/plants/*
// ═══════════════════════════════════════════════════════════
export const plantsMenuItems = [
    { main_title: 'order_plants' },
    {
        title: 'dashboard',
        id: 'plants-dashboard',
        icon: 'home',
        type: 'link',
        path: '/c/plants/dashboard',
        active: true,
        level: 1,
    },
    {
        title: 'projects',
        id: 'plants-projects',
        icon: 'project',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'available_projects',
                id: 'plants-available-projects',
                type: 'link',
                path: '/c/plants/projects',
                active: false,
                level: 2,
            },
            {
                title: 'my_projects',
                id: 'plants-my-projects',
                type: 'link',
                path: '/c/plants/projects/mine',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'orders',
        id: 'plants-orders',
        icon: 'ecommerce',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'order_list',
                id: 'plants-order-list',
                type: 'link',
                path: '/c/plants/orders',
                active: false,
                level: 2,
            },
            {
                title: 'create_order',
                id: 'plants-create-order',
                type: 'link',
                path: '/c/plants/orders/create',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'analytics',
        id: 'plants-analytics',
        icon: 'charts',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'reports',
                id: 'plants-reports',
                type: 'link',
                path: '/c/plants/analytics/reports',
                active: false,
                level: 2,
            },
        ],
    },
];
// ═══════════════════════════════════════════════════════════
// COMPANY VIEW 2: CARBON ACCOUNTING
// /c/carbon/*
// ═══════════════════════════════════════════════════════════
export const carbonMenuItems = [
    { main_title: 'carbon_accounting' },
    {
        title: 'dashboard',
        id: 'carbon-dashboard',
        icon: 'home',
        type: 'link',
        path: '/c/carbon/dashboard',
        active: true,
        level: 1,
    },
    {
        title: 'manage_emissions',
        id: 'carbon-emissions',
        icon: 'activity',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'emissions',
                id: 'carbon-emissions-list',
                type: 'link',
                path: '/c/carbon/emissions',
                active: false,
                level: 2,
            },
            {
                title: 'category_exclusions',
                id: 'carbon-exclusions',
                type: 'link',
                path: '/c/carbon/exclusions',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'sites_clients_suppliers',
        id: 'carbon-sites',
        icon: 'sitemap',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'site_projects',
                id: 'carbon-site-projects',
                type: 'link',
                path: '/c/carbon/sites/projects',
                active: false,
                level: 2,
            },
            {
                title: 'site_project_plans',
                id: 'carbon-site-plans',
                type: 'link',
                path: '/c/carbon/sites/plans',
                active: false,
                level: 2,
            },
            {
                title: 'suppliers',
                id: 'carbon-suppliers',
                type: 'link',
                path: '/c/carbon/suppliers',
                active: false,
                level: 2,
            },
            {
                title: 'client_users',
                id: 'carbon-clients',
                type: 'link',
                path: '/c/carbon/clients',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'emission_factors',
        id: 'carbon-factors',
        icon: 'table',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'emission_factors',
                id: 'carbon-factors-standard',
                type: 'link',
                path: '/c/carbon/factors',
                active: false,
                level: 2,
            },
            {
                title: 'custom_emission_factors',
                id: 'carbon-factors-custom',
                type: 'link',
                path: '/c/carbon/factors/custom',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'analytics',
        id: 'carbon-analytics',
        icon: 'charts',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'reports',
                id: 'carbon-reports',
                type: 'link',
                path: '/c/carbon/analytics/reports',
                active: false,
                level: 2,
            },
        ],
    },
];
// ═══════════════════════════════════════════════════════════
// COMPANY VIEW 3: ESG
// /c/esg/*
// ═══════════════════════════════════════════════════════════
export const esgMenuItems = [
    { main_title: 'esg' },
    {
        title: 'dashboard',
        id: 'esg-dashboard',
        icon: 'home',
        type: 'link',
        path: '/c/esg/dashboard',
        active: true,
        level: 1,
    },
    {
        title: 'environmental',
        id: 'esg-environmental',
        icon: 'widget',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'metrics',
                id: 'esg-env-metrics',
                type: 'link',
                path: '/c/esg/environmental/metrics',
                active: false,
                level: 2,
            },
            {
                title: 'targets',
                id: 'esg-env-targets',
                type: 'link',
                path: '/c/esg/environmental/targets',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'social',
        id: 'esg-social',
        icon: 'social',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'metrics',
                id: 'esg-social-metrics',
                type: 'link',
                path: '/c/esg/social/metrics',
                active: false,
                level: 2,
            },
            {
                title: 'initiatives',
                id: 'esg-social-initiatives',
                type: 'link',
                path: '/c/esg/social/initiatives',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'governance',
        id: 'esg-governance',
        icon: 'task',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'policies',
                id: 'esg-governance-policies',
                type: 'link',
                path: '/c/esg/governance/policies',
                active: false,
                level: 2,
            },
            {
                title: 'board_oversight',
                id: 'esg-governance-board',
                type: 'link',
                path: '/c/esg/governance/board',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'frameworks',
        id: 'esg-frameworks',
        icon: 'layout',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'gri',
                id: 'esg-frameworks-gri',
                type: 'link',
                path: '/c/esg/frameworks/gri',
                active: false,
                level: 2,
            },
            {
                title: 'sasb',
                id: 'esg-frameworks-sasb',
                type: 'link',
                path: '/c/esg/frameworks/sasb',
                active: false,
                level: 2,
            },
            {
                title: 'tcfd',
                id: 'esg-frameworks-tcfd',
                type: 'link',
                path: '/c/esg/frameworks/tcfd',
                active: false,
                level: 2,
            },
            {
                title: 'cdp',
                id: 'esg-frameworks-cdp',
                type: 'link',
                path: '/c/esg/frameworks/cdp',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'compliance',
        id: 'esg-compliance',
        icon: 'file',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'regulatory_tracker',
                id: 'esg-compliance-regulations',
                type: 'link',
                path: '/c/esg/compliance/regulations',
                active: false,
                level: 2,
            },
            {
                title: 'audit_logs',
                id: 'esg-compliance-audits',
                type: 'link',
                path: '/c/esg/compliance/audits',
                active: false,
                level: 2,
            },
            {
                title: 'certifications',
                id: 'esg-compliance-certifications',
                type: 'link',
                path: '/c/esg/compliance/certifications',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'targets_and_kpis',
        id: 'esg-targets',
        icon: 'report',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'esg_goals',
                id: 'esg-targets-goals',
                type: 'link',
                path: '/c/esg/targets/goals',
                active: false,
                level: 2,
            },
            {
                title: 'kpi_dashboard',
                id: 'esg-targets-kpi',
                type: 'link',
                path: '/c/esg/targets/kpi',
                active: false,
                level: 2,
            },
            {
                title: 'progress_tracking',
                id: 'esg-targets-progress',
                type: 'link',
                path: '/c/esg/targets/progress',
                active: false,
                level: 2,
            },
        ],
    },
];
// ═══════════════════════════════════════════════════════════
// COMPANY VIEW 4: SUSTAINABILITY REPORT
// /c/reports/*
// ═══════════════════════════════════════════════════════════
export const sustainabilityMenuItems = [
    { main_title: 'sustainability_report' },
    {
        title: 'dashboard',
        id: 'sustainability-dashboard',
        icon: 'home',
        type: 'link',
        path: '/c/reports/dashboard',
        active: true,
        level: 1,
    },
    {
        title: 'reports',
        id: 'sustainability-reports',
        icon: 'reports',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'report_builder',
                id: 'sustainability-builder',
                type: 'link',
                path: '/c/reports/builder',
                active: false,
                level: 2,
            },
            {
                title: 'published_reports',
                id: 'sustainability-published',
                type: 'link',
                path: '/c/reports/published',
                active: false,
                level: 2,
            },
            {
                title: 'scheduled_reports',
                id: 'sustainability-scheduled',
                type: 'link',
                path: '/c/reports/scheduled',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'data_collection',
        id: 'sustainability-data',
        icon: 'form',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'data_sources',
                id: 'sustainability-data-sources',
                type: 'link',
                path: '/c/reports/data/sources',
                active: false,
                level: 2,
            },
            {
                title: 'collection_forms',
                id: 'sustainability-data-forms',
                type: 'link',
                path: '/c/reports/data/forms',
                active: false,
                level: 2,
            },
            {
                title: 'import_export',
                id: 'sustainability-data-import-export',
                type: 'link',
                path: '/c/reports/data/import-export',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'templates',
        id: 'sustainability-templates',
        icon: 'sample-page',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'report_templates',
                id: 'sustainability-templates-list',
                type: 'link',
                path: '/c/reports/templates',
                active: false,
                level: 2,
            },
            {
                title: 'section_library',
                id: 'sustainability-sections',
                type: 'link',
                path: '/c/reports/templates/sections',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'analytics',
        id: 'sustainability-analytics',
        icon: 'charts',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'trend_analysis',
                id: 'sustainability-trends',
                type: 'link',
                path: '/c/reports/analytics/trends',
                active: false,
                level: 2,
            },
            {
                title: 'benchmarking',
                id: 'sustainability-benchmarks',
                type: 'link',
                path: '/c/reports/analytics/benchmarks',
                active: false,
                level: 2,
            },
        ],
    },
];
// ═══════════════════════════════════════════════════════════
// COMPANY VIEW 5: GEOSPATIAL MONITORING
// /c/geo/*
// ═══════════════════════════════════════════════════════════
export const geoMenuItems = [
    { main_title: 'geospatial_monitoring' },
    {
        title: 'dashboard',
        id: 'geo-dashboard',
        icon: 'home',
        type: 'link',
        path: '/c/geo/dashboard',
        active: true,
        level: 1,
    },
    {
        title: 'map_view',
        id: 'geo-map',
        icon: 'maps',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'interactive_map',
                id: 'geo-map-interactive',
                type: 'link',
                path: '/c/geo/map',
                active: false,
                level: 2,
            },
            {
                title: 'satellite_imagery',
                id: 'geo-map-satellite',
                type: 'link',
                path: '/c/geo/map/satellite',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'sites',
        id: 'geo-sites',
        icon: 'sitemap',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'monitored_sites',
                id: 'geo-sites-monitored',
                type: 'link',
                path: '/c/geo/sites',
                active: false,
                level: 2,
            },
            {
                title: 'site_zones',
                id: 'geo-sites-zones',
                type: 'link',
                path: '/c/geo/sites/zones',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'sensors_and_iot',
        id: 'geo-sensors',
        icon: 'widget',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'sensor_network',
                id: 'geo-sensors-network',
                type: 'link',
                path: '/c/geo/sensors',
                active: false,
                level: 2,
            },
            {
                title: 'sensor_data',
                id: 'geo-sensors-data',
                type: 'link',
                path: '/c/geo/sensors/data',
                active: false,
                level: 2,
            },
            {
                title: 'alerts_and_thresholds',
                id: 'geo-sensors-alerts',
                type: 'link',
                path: '/c/geo/sensors/alerts',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'environmental_layers',
        id: 'geo-layers',
        icon: 'layout',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'air_quality',
                id: 'geo-layers-air',
                type: 'link',
                path: '/c/geo/layers/air',
                active: false,
                level: 2,
            },
            {
                title: 'water_quality',
                id: 'geo-layers-water',
                type: 'link',
                path: '/c/geo/layers/water',
                active: false,
                level: 2,
            },
            {
                title: 'soil_health',
                id: 'geo-layers-soil',
                type: 'link',
                path: '/c/geo/layers/soil',
                active: false,
                level: 2,
            },
            {
                title: 'biodiversity',
                id: 'geo-layers-biodiversity',
                type: 'link',
                path: '/c/geo/layers/biodiversity',
                active: false,
                level: 2,
            },
        ],
    },
    {
        title: 'analytics',
        id: 'geo-analytics',
        icon: 'charts',
        type: 'sub',
        active: false,
        level: 1,
        children: [
            {
                title: 'spatial_reports',
                id: 'geo-spatial-reports',
                type: 'link',
                path: '/c/geo/analytics/reports',
                active: false,
                level: 2,
            },
            {
                title: 'change_detection',
                id: 'geo-change-detection',
                type: 'link',
                path: '/c/geo/analytics/changes',
                active: false,
                level: 2,
            },
        ],
    },
];
// ═══════════════════════════════════════════════════════════
// MENU RESOLVER
// Returns the correct menu array based on the current path
// ═══════════════════════════════════════════════════════════
export function getMenuForPath(pathname) {
    if (pathname.startsWith('/c/plants'))
        return plantsMenuItems;
    if (pathname.startsWith('/c/carbon'))
        return carbonMenuItems;
    if (pathname.startsWith('/c/esg'))
        return esgMenuItems;
    if (pathname.startsWith('/c/reports'))
        return sustainabilityMenuItems;
    if (pathname.startsWith('/c/geo'))
        return geoMenuItems;
    if (pathname.startsWith('/i/'))
        return individualMenuItems;
    return companyHomeMenuItems;
}
export function isCompanyView(pathname) {
    return (pathname.startsWith('/c/plants') ||
        pathname.startsWith('/c/carbon') ||
        pathname.startsWith('/c/esg') ||
        pathname.startsWith('/c/reports') ||
        pathname.startsWith('/c/geo'));
}
// ═══════════════════════════════════════════════════════════
// DEFAULT EXPORT (Company Home - current working state)
// Used by the menu store as the active sidebar
// ═══════════════════════════════════════════════════════════
export const menuItems = companyHomeMenuItems;
