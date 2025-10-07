# Baker Tech Website Template

A modern, responsive website template built with Next.js and Tailwind CSS. Perfect as a starting point for tech companies, development agencies, and digital service providers.

## Features

- **Modern Design**: Clean, professional design with smooth animations and micro-interactions
- **Fully Functional Dark Mode**: Complete theme system with manual toggle and system preference detection
- **Responsive Layout**: Mobile-first approach that works flawlessly on all devices
- **Interactive Components**: Working contact form, animated elements, hover effects, and scroll animations
- **Multiple Page Types**: Home, About, Products/Services, Blog, Forum, Contact, Get Started, and custom 404 pages
- **Professional Components**: 
  - Responsive Header with mobile menu and theme toggle
  - Comprehensive Features showcase with 9+ feature cards
  - Stats section with animated counters
  - Pricing tables with 3 tiers
  - Testimonials carousel with customer reviews
  - Portfolio showcase with project cards
  - Blog preview with latest posts
  - FAQ accordion with 10+ questions
  - Call-to-Action sections with animated backgrounds
  - Newsletter signup with success states
  - Loading spinner component
  - Custom 404 error page
- **Static Export**: Ready for deployment to static hosting platforms
- **TypeScript**: Full type safety with TypeScript
- **Form Validation**: Contact form with Zod validation and error handling
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and semantic HTML
- **Performance**: Optimized bundle sizes, lazy loading, and efficient rendering
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## Tech Stack

- **Next.js 15**: React framework with App Router
- **React 19**: UI library with hooks
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation
- **Lucide React**: Beautiful icons
- **React Intersection Observer**: Scroll-based animations
- **Headless UI**: Accessible UI components

## Quick Start

### Prerequisites

- **Node.js 18 or higher** and npm (comes with Node.js)
- **Git** for cloning the repository

To check your Node.js version:
```bash
node --version
npm --version
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url (The link might chagne for the futur, and it would be better to have a general formula for other templates. Another important thing is to learn to use our brains and learn to understand what we are doing, and not just doing it.)>
   cd template-react-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The development server will start and show you the URL (usually [http://localhost:3000](http://localhost:3000)).
   If port 3000 is busy, Next.js will automatically use the next available port (3001, 3002, etc.).

### First Time Setup

If you're running this on a new computer and the theme appears incorrect:

1. Open your browser's developer tools (F12)
2. Go to the Console tab
3. Run: `localStorage.clear(); location.reload();`
4. Or visit: `http://localhost:3000/reset-theme.html`

This clears any saved theme preferences and resets to the default dark theme.

## Project Structure

```
├── app/
│   ├── about/page.tsx           # About page
│   ├── blog/page.tsx            # Blog listing with sample posts
│   ├── contact/page.tsx         # Contact page with working form
│   ├── forum/page.tsx           # Forum/discussion page
│   ├── get-started/page.tsx     # Getting started guide
│   ├── not-found/page.tsx       # Custom 404 error page
│   ├── products/page.tsx        # Products/services page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page with hero and features
├── components/
│   ├── BlogPreview.tsx          # Blog post preview cards
│   ├── CTA.tsx                  # Call-to-action sections with animations
│   ├── FAQ.tsx                  # Accordion FAQ component
│   ├── Features.tsx             # Feature showcase grid
│   ├── Footer.tsx               # Footer component with social links
│   ├── Header.tsx               # Responsive navigation with theme toggle
│   ├── Loading.tsx              # Loading spinner component
│   ├── Newsletter.tsx           # Email newsletter signup form
│   ├── Portfolio.tsx            # Project portfolio showcase
│   ├── Pricing.tsx              # Pricing tables component
│   ├── Stats.tsx                # Animated statistics section
│   ├── Testimonials.tsx         # Customer testimonials carousel
│   └── ThemeProvider.tsx        # Dark mode theme provider
├── public/                      # Static assets
├── next.config.ts               # Next.js configuration for static export
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## Customization Guide

### Using Dark Mode

The template includes a fully functional dark mode system:

- **Manual Toggle**: Click the moon/sun icon in the header to switch themes
- **System Preference**: Automatically respects user's OS dark mode setting
- **Persistent**: Theme choice is saved in localStorage
- **No Flash**: Uses `suppressHydrationWarning` to prevent theme flash on load

### Changing Colors

Edit the Tailwind classes throughout the components. The primary color is indigo (`indigo-600`). To change:

1. Find and replace `indigo-` with your preferred color (e.g., `blue-`, `purple-`, `green-`)
2. Update dark mode variants (e.g., `dark:bg-indigo-900` → `dark:bg-blue-900`)

### Changing the Site Name

Edit the header in each page component (e.g., `app/page.tsx`):

```tsx
<h1 className="text-2xl font-bold text-gray-900">Your Site Name</h1>
```

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Update the navigation in all page components

### Customizing Styles

- Modify `app/globals.css` for global styles
- Use Tailwind classes for component styling
- Update `tailwind.config.ts` for custom theme colors

### For Blog Sites

- Expand the blog page with dynamic content
- Add individual post pages in `app/blog/[id]/page.tsx`
- Implement a CMS or headless CMS integration

### For E-commerce

- Enhance the products page with shopping cart functionality
- Add product detail pages
- Integrate payment processing (Stripe, PayPal, etc.)

### For Forums

- Add user authentication
- Implement posting and replying functionality
- Add categories and moderation features

## Building for Production

### Static Export (for GitHub Pages, Netlify, etc.)

1. **Build the static files:**
   ```bash
   npm run build
   ```

2. **The static files will be in the `out/` directory**

3. **Deploy the `out/` directory to your hosting platform**

### Server-Side Rendering

If you need server-side features, remove the `output: 'export'` from `next.config.ts` and deploy to Vercel, Netlify, or another platform that supports Next.js.

## Deployment Options

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Set source to "GitHub Actions" or deploy from `out/` folder
4. Use a GitHub Action for automated deployment

### Vercel (Recommended for SSR)

1. Import your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `out`

## Technologies Used

- **Next.js 15**: React framework with App Router
- **React 19**: UI library with hooks
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation
- **Lucide React**: Beautiful icons

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or customization help, please open an issue on GitHub or contact us at hello@bakertech.com.

---

**Built by Baker Tech - Innovative web solutions for modern businesses**
