# Specify Project Management Command

You are helping the user manage their portfolio project using the Specify framework located in `.specify/`.

## Core Capabilities

The Specify system helps organize feature development with:
- **Feature specifications** in `specs/[branch-name]/spec.md`
- **Implementation plans** in `specs/[branch-name]/plan.md`
- **Tasks tracking** in `specs/[branch-name]/tasks.md`
- **Project constitution** in `.specify/memory/constitution.md`
- **PowerShell automation scripts** in `.specify/scripts/powershell/`

## Available Commands

When the user invokes `/sp [action]`, perform these actions:

### `/sp new [feature-name]`
Create a new feature:
1. Run `.specify/scripts/powershell/create-new-feature.ps1` with the feature name
2. Open the generated `spec.md` and help fill it out based on the feature description
3. Guide the user through the specification process

### `/sp plan`
Set up an implementation plan:
1. Run `.specify/scripts/powershell/setup-plan.ps1`
2. Help the user fill out the `plan.md` template with implementation steps
3. Break down the feature into actionable tasks

### `/sp check`
Check prerequisites and current setup:
1. Run `.specify/scripts/powershell/check-prerequisites.ps1`
2. Report on the current feature status, missing files, and next steps

### `/sp init`
Initialize the Specify system for this portfolio project:
1. Create the `specs/` directory structure
2. Fill out `.specify/memory/constitution.md` with portfolio-specific principles
3. Ensure all templates are ready to use

### `/sp status`
Show current feature status:
1. List all feature directories in `specs/`
2. Show which files exist (spec.md, plan.md, tasks.md, etc.)
3. Report current branch and feature being worked on

## Workflow Guidance

The typical Specify workflow is:
1. **Create feature** (`/sp new feature-name`) - Creates numbered feature branch and spec directory
2. **Write specification** - Define user stories, requirements, success criteria
3. **Create plan** (`/sp plan`) - Break down implementation into steps
4. **Track tasks** - Use tasks.md to track progress
5. **Document decisions** - Use ADR template for architectural decisions

## Project Context

This is a Next.js 16 portfolio website for Mirza Adeel Baig featuring:
- Personal portfolio showcase
- Skills and achievements display
- Client work and testimonials
- Contact information
- Built with React 19, TypeScript, Tailwind CSS 4, and Framer Motion

When helping with specifications:
- Focus on user experience and visual appeal
- Consider responsive design requirements
- Think about performance and SEO
- Align with modern portfolio best practices

## Important Notes

- Feature branches should be named `001-feature-name`, `002-feature-name`, etc.
- All specs should follow the templates in `.specify/templates/`
- The constitution defines the project's core principles
- PowerShell scripts handle automation (Windows environment)
