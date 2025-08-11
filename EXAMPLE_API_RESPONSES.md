# Example API Responses

This document provides example API responses for all endpoints to help with frontend integration and testing.

## 1. Page API Responses

### GET /api/v1/pages/home
```json
{
  "success": true,
  "data": {
    "page": {
      "id": 1,
      "slug": "home",
      "title": "Home",
      "meta_title": "GojoTech PLC - Home",
      "meta_description": "GojoTech PLC - Ethiopia's premier technology company...",
      "meta_keywords": "e-commerce, online shop, GojoTech, Ethiopia technology",
      "canonical_url": "https://gojotech.et/",
      "page_type": "home",
      "is_active": true,
      "components": [
        {
          "id": 1,
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
          },
          "sort_order": 1,
          "is_active": true
        },
        {
          "id": 2,
          "type": "services",
          "data": {
            "title": "Our Services",
            "subtitle": "Comprehensive technology solutions",
            "services": [1, 2, 3, 4, 5, 6],
            "layout": "grid",
            "show_icons": true
          },
          "sort_order": 2,
          "is_active": true
        },
        {
          "id": 3,
          "type": "portfolio",
          "data": {
            "title": "Our Work",
            "subtitle": "Featured projects",
            "items": [1, 2, 3],
            "layout": "masonry",
            "show_categories": true
          },
          "sort_order": 3,
          "is_active": true
        }
      ]
    },
    "seo": {
      "meta_title": "GojoTech PLC - Home",
      "meta_description": "GojoTech PLC - Ethiopia's premier technology company...",
      "meta_keywords": "e-commerce, online shop, GojoTech, Ethiopia technology",
      "canonical_url": "https://gojotech.et/",
      "og_title": "GojoTech PLC - Home",
      "og_description": "Ethiopia's premier technology company...",
      "og_image": "/images/og-home.jpg",
      "twitter_title": "GojoTech PLC - Home",
      "twitter_description": "Ethiopia's premier technology company...",
      "twitter_image": "/images/twitter-home.jpg",
      "structured_data": {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "GojoTech PLC",
        "url": "https://gojotech.et",
        "description": "Ethiopia's premier technology company..."
      }
    }
  }
}
```

### GET /api/v1/pages/services/ecommerce-solutions
```json
{
  "success": true,
  "data": {
    "page": {
      "id": 2,
      "slug": "services/ecommerce-solutions",
      "title": "E-commerce Solutions",
      "meta_title": "E-commerce Solutions - GojoTech PLC",
      "meta_description": "Professional e-commerce solutions including online store development...",
      "meta_keywords": "e-commerce solutions Ethiopia, online store development",
      "canonical_url": "https://gojotech.et/services/ecommerce-solutions",
      "page_type": "service",
      "is_active": true,
      "components": [
        {
          "id": 4,
          "type": "hero",
          "data": {
            "title": "E-commerce Solutions",
            "subtitle": "Professional e-commerce solutions for Ethiopian businesses",
            "background_image": "/images/ecommerce-hero.jpg"
          },
          "sort_order": 1,
          "is_active": true
        },
        {
          "id": 5,
          "type": "content",
          "data": {
            "title": "Complete E-commerce Solutions",
            "content": "<p>Our e-commerce solutions include...</p>",
            "image": "/images/ecommerce-solutions.jpg"
          },
          "sort_order": 2,
          "is_active": true
        },
        {
          "id": 6,
          "type": "features",
          "data": {
            "title": "Key Features",
            "features": [
              {
                "title": "Online Store Development",
                "description": "Custom e-commerce websites with modern design",
                "icon": "🛒"
              },
              {
                "title": "Payment Integration",
                "description": "Secure payment processing with multiple options",
                "icon": "💳"
              }
            ]
          },
          "sort_order": 3,
          "is_active": true
        }
      ]
    },
    "seo": {
      "meta_title": "E-commerce Solutions - GojoTech PLC",
      "meta_description": "Professional e-commerce solutions including online store development...",
      "meta_keywords": "e-commerce solutions Ethiopia, online store development",
      "canonical_url": "https://gojotech.et/services/ecommerce-solutions",
      "og_title": "E-commerce Solutions - GojoTech PLC",
      "og_description": "Professional e-commerce solutions...",
      "og_image": "/images/og-ecommerce.jpg",
      "structured_data": {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "E-commerce Solutions",
        "description": "Professional e-commerce solutions...",
        "provider": {
          "@type": "Organization",
          "name": "GojoTech PLC"
        }
      }
    }
  }
}
```

## 2. Services API Responses

### GET /api/v1/services
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "slug": "ecommerce-solutions",
      "title": "E-commerce Solutions",
      "short_description": "Professional e-commerce solutions including online store development...",
      "icon": "🛒",
      "image_path": "/images/services/ecommerce.jpg",
      "has_pricing": false,
      "is_featured": true,
      "sort_order": 1,
      "is_active": true
    },
    {
      "id": 2,
      "slug": "gojoshop",
      "title": "GojoShop.et",
      "short_description": "Ethiopia's premier e-commerce platform with 10K+ users...",
      "icon": "🛍️",
      "image_path": "/images/services/gojoshop.jpg",
      "has_pricing": true,
      "is_featured": true,
      "sort_order": 2,
      "is_active": true
    },
    {
      "id": 3,
      "slug": "foreign-consulting",
      "title": "Foreign Consulting",
      "short_description": "Comprehensive business setup and consulting services...",
      "icon": "🌍",
      "image_path": "/images/services/consulting.jpg",
      "has_pricing": false,
      "is_featured": false,
      "sort_order": 3,
      "is_active": true
    }
  ]
}
```

### GET /api/v1/services/gojoshop
```json
{
  "success": true,
  "data": {
    "id": 2,
    "slug": "gojoshop",
    "title": "GojoShop.et",
    "short_description": "Ethiopia's premier e-commerce platform with 10K+ users",
    "full_description": "GojoShop.et is Ethiopia's leading e-commerce platform serving over 10,000 users nationwide. Features customer wallet system, advanced order management, integrated POS, and dedicated apps for both buyers and sellers with Telegram bot integration.",
    "icon": "🛍️",
    "image_path": "/images/services/gojoshop.jpg",
    "has_pricing": true,
    "pricing_data": {
      "plans": [
        {
          "name": "Basic",
          "price": "10,000",
          "currency": "ETB",
          "period": "monthly",
          "features": [
            "Basic store setup",
            "Product management",
            "Order processing",
            "Email support"
          ],
          "cta_text": "Get Started",
          "cta_link": "/contact"
        },
        {
          "name": "Professional",
          "price": "25,000",
          "currency": "ETB",
          "period": "monthly",
          "features": [
            "Everything in Basic",
            "Customer wallet system",
            "POS integration",
            "Mobile apps",
            "Priority support"
          ],
          "cta_text": "Get Started",
          "cta_link": "/contact",
          "is_popular": true
        },
        {
          "name": "Enterprise",
          "price": "50,000",
          "currency": "ETB",
          "period": "monthly",
          "features": [
            "Everything in Professional",
            "Custom development",
            "Dedicated support",
            "API access",
            "White-label solution"
          ],
          "cta_text": "Contact Sales",
          "cta_link": "/contact"
        }
      ]
    },
    "features": [
      "Customer Wallet System",
      "Order Management & Tracking",
      "Integrated POS System",
      "Seller & Buyer Apps",
      "Telegram Bot Integration",
      "Real-time Notifications",
      "Inventory Management",
      "Analytics Dashboard"
    ],
    "technologies": [
      "Laravel",
      "MySQL",
      "Firebase",
      "React",
      "Node.js"
    ],
    "stats": {
      "users": "10K+",
      "sellers": "1,000+",
      "modules": "8+",
      "uptime": "99.9%"
    },
    "is_featured": true,
    "sort_order": 2,
    "is_active": true
  }
}
```

### GET /api/v1/services/featured
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "slug": "ecommerce-solutions",
      "title": "E-commerce Solutions",
      "short_description": "Professional e-commerce solutions including online store development...",
      "icon": "🛒",
      "image_path": "/images/services/ecommerce.jpg",
      "has_pricing": false,
      "is_featured": true
    },
    {
      "id": 2,
      "slug": "gojoshop",
      "title": "GojoShop.et",
      "short_description": "Ethiopia's premier e-commerce platform with 10K+ users...",
      "icon": "🛍️",
      "image_path": "/images/services/gojoshop.jpg",
      "has_pricing": true,
      "is_featured": true
    }
  ]
}
```

## 3. Portfolio API Responses

### GET /api/v1/portfolio
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "GojoShop.et",
      "description": "Ethiopia's premier e-commerce platform serving over 10,000 users nationwide. Features customer wallet system, advanced order management, integrated POS, and dedicated apps for both buyers and sellers with Telegram bot integration.",
      "category": "E-commerce Platform",
      "image_path": "/images/projects/gojotech_et.jpeg",
      "live_url": "https://gojoshop.et",
      "technologies": [
        "Laravel",
        "MySQL",
        "Firebase",
        "React"
      ],
      "stats": {
        "users": "10K+",
        "sellers": "1,000+",
        "modules": "8+"
      },
      "completion_date": "2024-01-01",
      "is_featured": true,
      "sort_order": 1,
      "is_active": true
    },
    {
      "id": 2,
      "title": "Iraqi Journal of Medical Sciences",
      "description": "Professional OJS setup for the College of Medicine, Al-Nahrain University. Features peer-reviewed medical research publishing with comprehensive editorial workflow and advanced submission management.",
      "category": "Academic Publishing",
      "image_path": "/images/projects/Iraqi_Journal_of_Medical_Sciences-min.png",
      "live_url": "https://ojs.iraqijms.net/index.php",
      "technologies": [
        "OJS",
        "PHP",
        "MySQL",
        "Linux"
      ],
      "stats": {
        "articles": "100+",
        "issues": "23+",
        "citations": "500+"
      },
      "completion_date": "2023-06-01",
      "is_featured": true,
      "sort_order": 2,
      "is_active": true
    }
  ]
}
```

### GET /api/v1/portfolio/featured
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "GojoShop.et",
      "description": "Ethiopia's premier e-commerce platform...",
      "category": "E-commerce Platform",
      "image_path": "/images/projects/gojotech_et.jpeg",
      "live_url": "https://gojoshop.et",
      "technologies": ["Laravel", "MySQL", "Firebase", "React"],
      "stats": {
        "users": "10K+",
        "sellers": "1,000+",
        "modules": "8+"
      },
      "completion_date": "2024-01-01",
      "is_featured": true
    }
  ]
}
```

## 4. SEO API Responses

### GET /api/v1/seo/home
```json
{
  "success": true,
  "data": {
    "meta_title": "GojoTech PLC - Home",
    "meta_description": "GojoTech PLC - Ethiopia's premier technology company founded by Abraham Sisay, Negusu Sisay, and Samson Tesfaye. Specializing in e-commerce solutions, online shop development, GojoShop.et platform, foreign consulting, and custom software development in Addis Ababa, Ethiopia.",
    "meta_keywords": "e-commerce Ethiopia, online shop development, GojoTech, Abraham Sisay, Negusu Sisay, Samson Tesfaye, GojoShop.et, customer wallet system, order management, POS system, Laravel development, MySQL, Firebase, foreign consulting Ethiopia, software development Addis Ababa, Ethiopian tech company, academic publishing OJS, mobile app development Ethiopia",
    "canonical_url": "https://gojotech.et/",
    "og_title": "GojoTech PLC - Home",
    "og_description": "Ethiopia's premier technology company...",
    "og_image": "https://gojotech.et/og-image.jpg",
    "og_image_width": 1200,
    "og_image_height": 630,
    "og_site_name": "GojoTech PLC",
    "og_locale": "en_US",
    "twitter_card": "summary_large_image",
    "twitter_title": "GojoTech PLC - Home",
    "twitter_description": "Ethiopia's premier technology company...",
    "twitter_image": "https://gojotech.et/og-image.jpg",
    "twitter_creator": "@gojotech",
    "twitter_site": "@gojotech",
    "structured_data": [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "GojoTech PLC",
        "url": "https://gojotech.et",
        "description": "Ethiopia's premier technology company specializing in e-commerce solutions and software development",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://gojotech.et/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What e-commerce solutions does GojoTech offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GojoTech offers comprehensive e-commerce solutions including GojoShop.et platform, customer wallet systems, order management, integrated POS, and custom online shop development."
            }
          }
        ]
      }
    ]
  }
}
```

## 5. Error Responses

### 404 Not Found
```json
{
  "success": false,
  "error": "Page not found",
  "message": "The requested page could not be found",
  "code": 404
}
```

### 500 Server Error
```json
{
  "success": false,
  "error": "Internal server error",
  "message": "An unexpected error occurred",
  "code": 500
}
```

### 422 Validation Error
```json
{
  "success": false,
  "error": "Validation failed",
  "message": "The given data was invalid",
  "code": 422,
  "errors": {
    "title": ["The title field is required"],
    "slug": ["The slug field must be unique"]
  }
}
```

## 6. Pagination Response

### GET /api/v1/services?page=1&per_page=10
```json
{
  "success": true,
  "data": [
    // ... services data
  ],
  "pagination": {
    "current_page": 1,
    "per_page": 10,
    "total": 25,
    "last_page": 3,
    "from": 1,
    "to": 10,
    "has_more_pages": true
  }
}
```

## 7. Search Response

### GET /api/v1/services?search=ecommerce
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "slug": "ecommerce-solutions",
      "title": "E-commerce Solutions",
      "short_description": "Professional e-commerce solutions...",
      "icon": "🛒",
      "is_featured": true
    },
    {
      "id": 2,
      "slug": "gojoshop",
      "title": "GojoShop.et",
      "short_description": "Ethiopia's premier e-commerce platform...",
      "icon": "🛍️",
      "is_featured": true
    }
  ],
  "search": {
    "query": "ecommerce",
    "total_results": 2,
    "search_time": 0.15
  }
}
```

## Usage Examples

### Frontend Integration (Astro)
```astro
---
// src/pages/index.astro
import { ApiService } from '../utils/api';

const api = new ApiService();
const pageData = await api.getPage('home');
const services = await api.getServices();
const portfolio = await api.getPortfolio();

// Fallback data if API fails
const fallbackData = {
  hero: {
    title: "Welcome to GojoTech",
    subtitle: "Ethiopia's premier technology company"
  }
};

const heroData = pageData?.data?.page?.components?.find(c => c.type === 'hero')?.data || fallbackData.hero;
---

<Layout 
  title={pageData?.data?.seo?.meta_title || "GojoTech PLC - Home"}
  description={pageData?.data?.seo?.meta_description}
  keywords={pageData?.data?.seo?.meta_keywords}
  canonical={pageData?.data?.seo?.canonical_url}
>
  <main>
    <Hero data={heroData} />
    <Services data={services?.data || []} />
    <Portfolio data={portfolio?.data || []} />
  </main>
</Layout>
```

### JavaScript/TypeScript Integration
```typescript
// src/utils/api.ts
export class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.API_URL || 'http://localhost:8000/api/v1';
  }

  async getPage(slug: string): Promise<ApiResponse<PageData> | null> {
    try {
      const response = await fetch(`${this.baseUrl}/pages/${slug}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      return null;
    }
  }

  async getServices(): Promise<ApiResponse<Service[]> | null> {
    try {
      const response = await fetch(`${this.baseUrl}/services`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      return null;
    }
  }
}

// Type definitions
interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  message?: string;
  code?: number;
}

interface PageData {
  page: {
    id: number;
    slug: string;
    title: string;
    components: Component[];
  };
  seo: SeoData;
}

interface Component {
  id: number;
  type: string;
  data: any;
  sort_order: number;
  is_active: boolean;
}

interface SeoData {
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  canonical_url: string;
  structured_data?: any;
}
```

These example responses should help you understand the expected data structure and implement the frontend integration accordingly. 