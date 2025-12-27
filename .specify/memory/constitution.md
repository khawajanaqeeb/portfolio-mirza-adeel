# Mirza Adeel Baig Portfolio Constitution

## Core Principles

### I. User Experience First
Every feature must prioritize the visitor's experience and journey through the portfolio. Design and functionality decisions should be guided by what creates the most impactful and memorable presentation of skills, work, and achievements. All interactions should be intuitive, smooth, and purposeful.

### II. Performance & Responsiveness
The portfolio MUST load quickly and perform flawlessly across all devices and screen sizes. Images must be optimized, animations must be smooth (60fps), and Core Web Vitals must meet Google's "Good" thresholds. Mobile experience is equally important as desktop.

### III. Content Quality
Content must be professional, accurate, and up-to-date. Every section (About, Skills, Portfolio Work, Achievements, Education, Clients, Contact) should tell a cohesive story. No placeholder text or dummy content in production. All claims must be verifiable.

### IV. Visual Consistency
Maintain consistent design language across all pages using the established design system (Tailwind CSS). Typography, spacing, colors, and components must follow defined patterns. Animations and transitions should enhance, not distract from content.

### V. Accessibility & SEO
The portfolio MUST be accessible (WCAG 2.1 AA compliance) and SEO-optimized. Semantic HTML, proper heading hierarchy, alt text for images, keyboard navigation, and proper meta tags are non-negotiable. Site must be discoverable and usable by everyone.

### VI. Simplicity Over Complexity
Start with the simplest solution that solves the problem. Avoid over-engineering, unnecessary dependencies, and premature optimization. Each feature should have a clear purpose and measurable value. When in doubt, ship the minimal viable version first.

## Technology Standards

### Required Stack
- **Framework**: Next.js 16+ (App Router)
- **UI**: React 19+ with TypeScript
- **Styling**: Tailwind CSS 4+
- **Animations**: Framer Motion for complex animations
- **Icons**: Lucide React for consistent iconography

### Code Quality
- TypeScript strict mode enabled
- ESLint rules must pass
- No console errors or warnings in production
- Proper error boundaries and fallbacks
- Mobile-first responsive design approach

### Asset Management
- Images optimized and served via Next.js Image component
- Lazy loading for below-the-fold content
- Proper caching strategies
- CDN usage where beneficial

## Development Workflow

### Feature Development
1. Create feature specification using templates in `.specify/templates/`
2. Define user stories with acceptance criteria
3. Create implementation plan
4. Develop feature following the plan
5. Test across devices and browsers
6. Update documentation

### Quality Gates
- Features must not break existing functionality
- Responsive design verified on mobile, tablet, desktop
- Performance impact assessed (no significant degradation)
- Accessibility checked with automated tools
- SEO impact considered

### Content Updates
- All portfolio work entries must include: title, description, technologies used, and visual
- Achievement entries must be dated and verifiable
- Skills should be grouped logically and kept current
- Client testimonials (if any) must be authentic

## Governance

This constitution guides all development decisions for the Mirza Adeel Baig portfolio website. When features or changes are proposed, they should be evaluated against these principles. The constitution can be amended when necessary, but amendments should be documented with rationale.

**Version**: 1.0.0 | **Ratified**: 2025-12-26 | **Last Amended**: 2025-12-26
