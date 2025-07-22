# GitHub Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a personal agency-style portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. The project includes:

- **Multilingual Support**: Arabic (RTL), English, Turkish
- **CMS Integration**: Notion API or Sanity.io for content management
- **Modern Design**: Agency-style with animations and dark/light mode
- **Business Features**: Services, pricing, secure CV download, admin panel
- **Responsive Design**: Mobile-first approach with full responsiveness

## Code Style Guidelines

### TypeScript
- Use strict TypeScript with proper type definitions
- Prefer interfaces over types for object shapes
- Use proper generic types for reusable components
- Export types alongside components

### React/Next.js
- Use App Router (app directory) structure
- Prefer Server Components when possible
- Use 'use client' directive only when necessary
- Implement proper error boundaries and loading states

### Tailwind CSS
- Use Tailwind utility classes with custom CSS properties
- Implement design system with consistent spacing, colors, and typography
- Use responsive design patterns (mobile-first)
- Leverage dark mode with proper color schemes

### Internationalization
- Use next-intl for multilingual support
- Support RTL languages (Arabic) with proper layout handling
- Organize translations in structured JSON files
- Implement proper locale routing

### Components
- Create reusable components with proper prop types
- Use composition over inheritance
- Implement proper accessibility (ARIA labels, semantic HTML)
- Add proper error handling and fallbacks

### Animation
- Use Framer Motion for smooth animations
- Implement progressive enhancement for animations
- Consider reduced motion preferences
- Use appropriate easing and duration

## File Structure
- Components in `/src/components/` with proper categorization
- Pages in `/src/app/` following App Router conventions
- Utilities in `/src/lib/` and `/src/utils/`
- Types in `/src/types/` or co-located with components
- Internationalization files in `/src/locales/`

## Performance
- Optimize images with Next.js Image component
- Implement proper caching strategies
- Use dynamic imports for code splitting
- Minimize bundle size with tree shaking

## Security
- Implement proper authentication for admin features
- Sanitize user inputs
- Use environment variables for sensitive data
- Implement rate limiting for forms and APIs
