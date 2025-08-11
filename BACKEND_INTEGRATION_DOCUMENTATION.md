# GojoTech Landing Page - Backend Integration Documentation

## Table of Contents
1. [Overview](#overview)
2. [Current Structure Analysis](#current-structure-analysis)
3. [Backend Architecture](#backend-architecture)
4. [Database Schema](#database-schema)
5. [API Endpoints](#api-endpoints)
6. [Content Management System](#content-management-system)
7. [SEO Management](#seo-management)
8. [Implementation Guide](#implementation-guide)
9. [Migration Strategy](#migration-strategy)
10. [Testing & Quality Assurance](#testing--quality-assurance)

## Overview

This documentation outlines the plan to transform the current static Astro.js landing page into a dynamic, content-managed website with a Laravel backend. The goal is to make all content editable through an admin panel while maintaining the current design and SEO optimization.

## Current Structure Analysis

### Page Types Identified:
1. **Homepage** (`/`) - Hero, About, Services, Portfolio, Features, FAQ, CTA
2. **Service Pages** (7 pages) - Each with unique content structure:
   - E-commerce Solutions (`/services/ecommerce-solutions`)
   - GojoShop.et (`/services/gojoshop`) - Has pricing section
   - Foreign Consulting (`/services/foreign-consulting`)
   - Mobile App Development (`/services/mobile-app-development`)
   - OJS Support (`/services/ojs-support`)
   - Custom App Customization (`/services/custom-app-customization`)
   - Software Development (`/services/software-development`)

### Content Components:
- **Static Components**: Navbar, Footer, Layout
- **Dynamic Components**: Hero, About, Services, Portfolio, Features, FAQ, CTA
- **SEO Elements**: Meta tags, structured data, canonical URLs
- **Media Assets**: Images, logos, project screenshots

## Backend Architecture

### Technology Stack:
- **Backend**: Laravel 11 (PHP 8.2+)
- **Database**: MySQL 8.0+
- **Admin Panel**: Filament 3.x
- **API**: RESTful API with JSON responses
- **File Storage**: Local storage with CDN support
- **Caching**: Redis for performance optimization

### Project Structure:
```
gojotech-backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Api/
│   │   │   │   ├── PageController.php
│   │   │   │   ├── ServiceController.php
│   │   │   │   ├── PortfolioController.php
│   │   │   │   ├── SeoController.php
│   │   │   │   └── MediaController.php
│   │   │   └── Admin/
│   │   │       ├── PageController.php
│   │   │       ├── ServiceController.php
│   │   │       └── SeoController.php
│   │   └── Resources/
│   │       ├── PageResource.php
│   │       ├── ServiceResource.php
│   │       └── PortfolioResource.php
│   ├── Models/
│   │   ├── Page.php
│   │   ├── Service.php
│   │   ├── Portfolio.php
│   │   ├── Seo.php
│   │   ├── Media.php
│   │   └── Component.php
│   └── Filament/
│       ├── Resources/
│       │   ├── PageResource.php
│       │   ├── ServiceResource.php
│       │   ├── PortfolioResource.php
│       │   └── SeoResource.php
│       └── Widgets/
│           ├── StatsOverview.php
│           └── RecentPages.php
├── database/
│   ├── migrations/
│   └── seeders/
└── routes/
    ├── api.php
    └── web.php
```

## Database Schema

### Core Tables:

#### 1. `pages` Table
```sql
CREATE TABLE pages (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    meta_title VARCHAR(255),
    meta_description TEXT,
    meta_keywords TEXT,
    canonical_url VARCHAR(255),
    page_type ENUM('home', 'service', 'about', 'contact') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL
);
```

#### 2. `page_components` Table
```sql
CREATE TABLE page_components (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    page_id BIGINT UNSIGNED,
    component_type VARCHAR(100) NOT NULL,
    component_data JSON,
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    FOREIGN KEY (page_id) REFERENCES pages(id) ON DELETE CASCADE
);
```

#### 3. `services` Table
```sql
CREATE TABLE services (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    short_description TEXT,
    full_description LONGTEXT,
    icon VARCHAR(50),
    image_path VARCHAR(255),
    has_pricing BOOLEAN DEFAULT FALSE,
    pricing_data JSON,
    features JSON,
    technologies JSON,
    stats JSON,
    is_featured BOOLEAN DEFAULT FALSE,
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL
);
```

#### 4. `portfolio` Table
```sql
CREATE TABLE portfolio (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    image_path VARCHAR(255),
    live_url VARCHAR(255),
    technologies JSON,
    stats JSON,
    completion_date DATE,
    is_featured BOOLEAN DEFAULT FALSE,
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL
);
```

#### 5. `seo_metadata` Table
```sql
CREATE TABLE seo_metadata (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    page_id BIGINT UNSIGNED,
    meta_title VARCHAR(255),
    meta_description TEXT,
    meta_keywords TEXT,
    canonical_url VARCHAR(255),
    og_title VARCHAR(255),
    og_description TEXT,
    og_image VARCHAR(255),
    twitter_title VARCHAR(255),
    twitter_description TEXT,
    twitter_image VARCHAR(255),
    structured_data JSON,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    FOREIGN KEY (page_id) REFERENCES pages(id) ON DELETE CASCADE
);
```

#### 6. `media` Table
```sql
CREATE TABLE media (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    filename VARCHAR(255) NOT NULL,
    original_name VARCHAR(255),
    file_path VARCHAR(255) NOT NULL,
    file_size BIGINT,
    mime_type VARCHAR(100),
    alt_text VARCHAR(255),
    caption TEXT,
    is_public BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL
);
```

## API Endpoints

### Public API Endpoints:

#### 1. Pages API
```php
// GET /api/pages/{slug}
// Returns page data with components
GET /api/pages/home
GET /api/pages/services/ecommerce-solutions

// GET /api/pages
// Returns all active pages
GET /api/pages
```

#### 2. Services API
```php
// GET /api/services
// Returns all services
GET /api/services

// GET /api/services/{slug}
// Returns specific service
GET /api/services/gojoshop

// GET /api/services/featured
// Returns featured services
GET /api/services/featured
```

#### 3. Portfolio API
```php
// GET /api/portfolio
// Returns all portfolio items
GET /api/portfolio

// GET /api/portfolio/featured
// Returns featured portfolio items
GET /api/portfolio/featured
```

#### 4. SEO API
```php
// GET /api/seo/{page_slug}
// Returns SEO metadata for page
GET /api/seo/home
GET /api/seo/services/ecommerce-solutions
```

### API Response Format:
```json
{
    "success": true,
    "data": {
        "page": {
            "id": 1,
            "slug": "home",
            "title": "Home",
            "meta_title": "GojoTech PLC - Home",
            "meta_description": "...",
            "components": [
                {
                    "type": "hero",
                    "data": {
                        "title": "Welcome to GojoTech",
                        "subtitle": "...",
                        "cta_text": "Get Started",
                        "cta_link": "/contact"
                    }
                }
            ]
        },
        "seo": {
            "meta_title": "...",
            "meta_description": "...",
            "structured_data": {...}
        }
    }
}
```

## Content Management System

### Filament Admin Panel Features:

#### 1. Page Management
- **Page List**: View all pages with status indicators
- **Page Editor**: Rich text editor for content
- **Component Builder**: Drag-and-drop component management
- **SEO Manager**: Meta tags and structured data editor
- **Preview Mode**: Live preview of changes

#### 2. Service Management
- **Service List**: Manage all services
- **Service Editor**: Full content editor with pricing options
- **Feature Management**: Add/edit service features
- **Technology Tags**: Manage technology stacks
- **Statistics**: Edit service statistics

#### 3. Portfolio Management
- **Portfolio List**: Manage portfolio items
- **Portfolio Editor**: Content and media management
- **Category Management**: Organize by categories
- **Featured Items**: Mark items as featured

#### 4. Media Management
- **Media Library**: Upload and organize media
- **Image Optimization**: Automatic image optimization
- **Alt Text Management**: SEO-friendly alt texts
- **File Organization**: Categorize by type/usage

### Component Types:

#### 1. Hero Component
```json
{
    "type": "hero",
    "data": {
        "title": "Welcome to GojoTech",
        "subtitle": "Ethiopia's premier technology company",
        "background_image": "/images/hero-bg.jpg",
        "cta_primary": {
            "text": "Get Started",
            "link": "/contact"
        },
        "cta_secondary": {
            "text": "Learn More",
            "link": "/about"
        }
    }
}
```

#### 2. Services Component
```json
{
    "type": "services",
    "data": {
        "title": "Our Services",
        "subtitle": "Comprehensive technology solutions",
        "services": [1, 2, 3, 4, 5, 6],
        "layout": "grid",
        "show_icons": true
    }
}
```

#### 3. Portfolio Component
```json
{
    "type": "portfolio",
    "data": {
        "title": "Our Work",
        "subtitle": "Featured projects",
        "items": [1, 2, 3],
        "layout": "masonry",
        "show_categories": true
    }
}
```

#### 4. Pricing Component (Service-specific)
```json
{
    "type": "pricing",
    "data": {
        "title": "Pricing Plans",
        "subtitle": "Choose the right plan for you",
        "plans": [
            {
                "name": "Basic",
                "price": "10,000",
                "currency": "ETB",
                "period": "monthly",
                "features": ["Feature 1", "Feature 2"],
                "cta_text": "Get Started",
                "cta_link": "/contact"
            }
        ]
    }
}
```

## SEO Management

### SEO Features:

#### 1. Meta Tag Management
- **Title Tags**: Customizable for each page
- **Meta Descriptions**: Rich text editor with character counter
- **Keywords**: Tag-based keyword management
- **Canonical URLs**: Automatic and manual canonical URL management

#### 2. Open Graph & Twitter Cards
- **OG Title**: Separate from meta title
- **OG Description**: Social media optimized descriptions
- **OG Images**: Automatic image generation or custom uploads
- **Twitter Cards**: Twitter-specific optimization

#### 3. Structured Data
- **Organization Schema**: Company information
- **Service Schema**: Service-specific structured data
- **FAQ Schema**: FAQ structured data
- **Breadcrumb Schema**: Automatic breadcrumb generation

#### 4. SEO Tools
- **SEO Score**: Automatic SEO scoring
- **Keyword Analysis**: Keyword density and optimization
- **Meta Tag Preview**: Preview how tags appear in search results
- **Social Media Preview**: Preview social media sharing

### SEO Implementation:
```php
// Example SEO data structure
{
    "meta_title": "GojoTech PLC - E-commerce Solutions",
    "meta_description": "Professional e-commerce solutions...",
    "meta_keywords": "e-commerce, Ethiopia, online shop",
    "canonical_url": "https://gojotech.et/services/ecommerce-solutions",
    "og_title": "E-commerce Solutions - GojoTech PLC",
    "og_description": "Professional e-commerce solutions...",
    "og_image": "/images/og-ecommerce.jpg",
    "structured_data": {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "E-commerce Solutions",
        "description": "..."
    }
}
```

## Implementation Guide

### Phase 1: Backend Setup (Week 1-2)

#### 1. Laravel Project Setup
```bash
# Create new Laravel project
composer create-project laravel/laravel gojotech-backend

# Install required packages
composer require filament/filament
composer require spatie/laravel-medialibrary
composer require spatie/laravel-permission
composer require spatie/laravel-tags
```

#### 2. Database Setup
```bash
# Run migrations
php artisan migrate

# Seed initial data
php artisan db:seed
```

#### 3. Filament Admin Setup
```bash
# Install Filament
php artisan filament:install

# Create admin user
php artisan make:filament-user
```

### Phase 2: API Development (Week 3-4)

#### 1. Create Models
```bash
php artisan make:model Page -m
php artisan make:model Service -m
php artisan make:model Portfolio -m
php artisan make:model Seo -m
php artisan make:model Media -m
```

#### 2. Create API Controllers
```bash
php artisan make:controller Api/PageController
php artisan make:controller Api/ServiceController
php artisan make:controller Api/PortfolioController
php artisan make:controller Api/SeoController
```

#### 3. Create API Resources
```bash
php artisan make:resource PageResource
php artisan make:resource ServiceResource
php artisan make:resource PortfolioResource
```

### Phase 3: Frontend Integration (Week 5-6)

#### 1. Update Astro Configuration
```javascript
// astro.config.mjs
export default defineConfig({
  integrations: [
    // Add API integration
  ],
  vite: {
    define: {
      'process.env.API_URL': JSON.stringify(process.env.API_URL)
    }
  }
});
```

#### 2. Create API Service
```typescript
// src/utils/api.ts
export class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.API_URL || 'http://localhost:8000/api';
  }

  async getPage(slug: string) {
    const response = await fetch(`${this.baseUrl}/pages/${slug}`);
    return response.json();
  }

  async getServices() {
    const response = await fetch(`${this.baseUrl}/services`);
    return response.json();
  }
}
```

#### 3. Update Components
```astro
---
// src/components/sections/Hero.astro
import { ApiService } from '../../utils/api';

const api = new ApiService();
const pageData = await api.getPage('home');
const heroData = pageData.data.components.find(c => c.type === 'hero');
---

<section class="hero">
  <h1>{heroData.data.title}</h1>
  <p>{heroData.data.subtitle}</p>
  <!-- Rest of component -->
</section>
```

### Phase 4: Content Migration (Week 7)

#### 1. Data Migration Scripts
```php
// database/seeders/ContentSeeder.php
class ContentSeeder extends Seeder
{
    public function run()
    {
        // Migrate existing content from data.ts
        $this->migrateServices();
        $this->migratePortfolio();
        $this->migratePages();
    }
}
```

#### 2. SEO Data Migration
```php
// Migrate existing SEO data
$pages = [
    'home' => [
        'title' => 'Home',
        'meta_title' => 'GojoTech PLC - Home',
        'meta_description' => '...',
        // ... other SEO data
    ]
];
```

### Phase 5: Testing & Deployment (Week 8)

#### 1. API Testing
```bash
# Run API tests
php artisan test --filter=Api

# Test admin panel
php artisan test --filter=Admin
```

#### 2. Frontend Testing
```bash
# Test Astro build
npm run build

# Test production build
npm run preview
```

## Migration Strategy

### Step 1: Parallel Development
- Keep current static site running
- Develop backend in parallel
- Use feature flags for gradual rollout

### Step 2: Content Migration
- Export current content from `data.ts`
- Import into Laravel database
- Verify data integrity

### Step 3: Gradual Rollout
- Deploy backend to staging
- Test API endpoints
- Update frontend to use API
- Deploy to production

### Step 4: Admin Training
- Train content managers on Filament
- Create content guidelines
- Set up approval workflows

## Testing & Quality Assurance

### API Testing
```php
// tests/Feature/Api/PageApiTest.php
class PageApiTest extends TestCase
{
    public function test_can_get_home_page()
    {
        $response = $this->getJson('/api/pages/home');
        
        $response->assertStatus(200)
                ->assertJsonStructure([
                    'success',
                    'data' => [
                        'page' => [
                            'id',
                            'slug',
                            'title',
                            'components'
                        ]
                    ]
                ]);
    }
}
```

### Frontend Testing
```typescript
// tests/api.test.ts
describe('API Integration', () => {
  test('should fetch home page data', async () => {
    const api = new ApiService();
    const data = await api.getPage('home');
    
    expect(data.success).toBe(true);
    expect(data.data.page).toBeDefined();
  });
});
```

### Performance Testing
- **API Response Time**: < 200ms for all endpoints
- **Page Load Time**: < 2s for all pages
- **SEO Score**: > 90/100 for all pages
- **Lighthouse Score**: > 90 for all metrics

### Security Testing
- **API Authentication**: Secure admin endpoints
- **Input Validation**: Sanitize all user inputs
- **File Upload Security**: Validate file types and sizes
- **SQL Injection**: Use Eloquent ORM properly

## Maintenance & Updates

### Regular Tasks:
1. **Content Updates**: Weekly content reviews
2. **SEO Monitoring**: Monthly SEO performance review
3. **Security Updates**: Monthly security patches
4. **Performance Optimization**: Quarterly performance reviews
5. **Backup Management**: Daily automated backups

### Monitoring:
- **Uptime Monitoring**: 99.9% uptime target
- **Error Tracking**: Real-time error monitoring
- **Performance Monitoring**: Response time tracking
- **SEO Monitoring**: Search ranking tracking

## Conclusion

This documentation provides a comprehensive roadmap for transforming your static Astro.js site into a dynamic, content-managed website. The Laravel backend with Filament admin panel will provide:

- **Flexible Content Management**: Easy content updates without code changes
- **SEO Optimization**: Comprehensive SEO management tools
- **Scalable Architecture**: Easy to add new features and content types
- **Performance**: Optimized API responses and caching
- **Security**: Enterprise-grade security measures

The implementation can be completed in 8 weeks with proper planning and execution. The modular approach allows for gradual rollout and easy maintenance.

---

**Next Steps:**
1. Review and approve this documentation
2. Set up development environment
3. Begin Phase 1 implementation
4. Schedule regular progress reviews
5. Plan content migration strategy 