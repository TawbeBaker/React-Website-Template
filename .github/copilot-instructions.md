# Baker Tech Template - Project Instructions

## Project Overview
This is a professional Next.js 15 website template featuring:
- Modern React with TypeScript
- Tailwind CSS for styling
- Light/Dark theme system
- Framer Motion animations
- Fully responsive design
- SEO optimized
- Multiple pre-built page templates

## Technology Stack
- **Framework**: Next.js 15.5.4 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)
- **Icons**: Lucide React

## Theme System
The project uses a class-based dark mode system:

### How It Works
1. **ThemeProvider** (`components/ThemeProvider.tsx`): Client-side theme management
   - Stores theme preference in localStorage as `baker-tech-theme`
   - Applies `.light` or `.dark` class to `<html>` element
   - Provides `useTheme()` hook for components

2. **Tailwind Config** (`tailwind.config.ts`): 
   - Configured with `darkMode: 'class'`
   - Dark mode classes are prefixed with `dark:`

3. **Global Styles** (`app/globals.css`):
   - Defines CSS variables for theme colors
   - `.light` class applies light mode colors
   - `.dark` class applies dark mode colors

### Using Themes in Components
```tsx
// Always include both light and dark variants
className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"

// Access theme state
import { useTheme } from '@/components/ThemeProvider';
const { theme, toggleTheme } = useTheme();
```

### Theme Color Patterns
- **Backgrounds**: `bg-white` / `dark:bg-gray-900`
- **Text**: `text-gray-900` / `dark:text-white`
- **Borders**: `border-gray-200` / `dark:border-gray-700`
- **Accents**: `text-indigo-600` / `dark:text-indigo-400`

## Project Structure
```
template-react-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles & theme CSS
│   ├── about/             # About page
│   ├── blog/              # Blog listing page
│   ├── contact/           # Contact page
│   ├── forum/             # Forum page
│   ├── get-started/       # Getting started page
│   ├── not-found/         # 404 page
│   └── products/          # Products page
├── components/            # Reusable React components
│   ├── ThemeProvider.tsx  # Theme context & state management
│   ├── Header.tsx         # Site header with navigation & theme toggle
│   ├── Footer.tsx         # Site footer
│   ├── Features.tsx       # Features section
│   ├── Testimonials.tsx   # Customer testimonials
│   ├── Pricing.tsx        # Pricing cards
│   ├── BlogPreview.tsx    # Blog post previews
│   ├── Portfolio.tsx      # Portfolio showcase
│   ├── Stats.tsx          # Statistics display
│   ├── FAQ.tsx            # Frequently asked questions
│   ├── CTA.tsx            # Call-to-action sections
│   ├── Newsletter.tsx     # Newsletter signup
│   └── Loading.tsx        # Loading spinner
├── public/                # Static assets
└── [config files]         # TypeScript, ESLint, etc.
```

## Development Guidelines

### Adding New Pages
1. Create a new directory in `app/` with a `page.tsx` file
2. Import and use the `Header` and `Footer` components
3. Follow the existing page structure and styling patterns
4. Ensure all components have proper light/dark theme support

### Creating New Components
1. Place in `components/` directory
2. Use TypeScript for props and type safety
3. Include both light and dark mode styles
4. Export default for the component
5. Add animations with Framer Motion where appropriate

### Styling Best Practices
- Use Tailwind utility classes
- Always include dark mode variants (`dark:`)
- Follow the color system defined in the theme
- Use responsive classes: `sm:`, `md:`, `lg:`, `xl:`
- Maintain consistent spacing with Tailwind's spacing scale

### Animation Guidelines
- Use Framer Motion's `motion` components
- Common patterns:
  - `initial={{ opacity: 0, y: 20 }}`
  - `animate={{ opacity: 1, y: 0 }}`
  - `whileInView` for scroll animations with `viewport={{ once: true }}`
- Keep animations subtle and performant

## Commands

### Development
```bash
npm run dev          # Start development server (Turbopack)
npm run build        # Create production build
npm start            # Start production server
npm run lint         # Run ESLint
```

### Port Configuration
- Default development port: `3000`
- Access at: `http://localhost:3000`

## SEO Configuration
The template includes comprehensive SEO setup in `app/layout.tsx`:
- Metadata with title templates
- Open Graph tags
- Twitter Card tags
- Robots configuration
- Canonical URLs

### Customizing SEO
Update the `metadata` export in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: {
    default: "Your Site - Tagline",
    template: "%s | Your Site"
  },
  description: "Your description",
  // ... other metadata
};
```

## Customization Guide

### Colors
Edit `tailwind.config.ts` to add custom colors:
```typescript
theme: {
  extend: {
    colors: {
      brand: {
        // your colors
      }
    }
  }
}
```

### Fonts
Fonts are loaded in `app/layout.tsx`:
- Currently using Geist Sans and Geist Mono
- Replace with any Google Font or custom font

### Navigation
Update navigation links in `components/Header.tsx`:
```typescript
const navigation = [
  { name: 'Home', href: '/' },
  // Add your links here
];
```

## Troubleshooting

### Theme Not Switching
1. Clear localStorage: Open browser console and run: `localStorage.clear()`
2. Hard refresh the page (Cmd+Shift+R / Ctrl+Shift+R)
3. Check browser console for JavaScript errors

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Delete `.next` folder and rebuild
- Check for TypeScript errors with `npm run lint`

### Styling Issues
- Ensure Tailwind classes are not purged (check `tailwind.config.ts`)
- Verify `globals.css` is imported in `layout.tsx`
- Check for conflicting CSS

## Performance Optimization
- All components use Next.js optimizations
- Images should use Next.js `<Image>` component
- Lazy load below-the-fold content
- Use `'use client'` directive only when necessary

## Deployment
This template is ready to deploy to:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **Any Node.js host**: Build with `npm run build`, then run `npm start`

### Environment Variables
Create `.env.local` for any environment-specific configuration:
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add other variables as needed
```

## Extending the Template

### Adding a Blog System
1. Create a `posts/` directory for markdown files
2. Use a library like `gray-matter` to parse frontmatter
3. Create dynamic routes: `app/blog/[slug]/page.tsx`

### Adding a Database
1. Install Prisma or your preferred ORM
2. Create models in `prisma/schema.prisma`
3. Add API routes in `app/api/`

### Adding Authentication
1. Install NextAuth.js: `npm install next-auth`
2. Configure providers in `app/api/auth/[...nextauth]/route.ts`
3. Protect pages with middleware

## Support & Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## License
This template is provided as-is for your projects. Customize and use as needed.
