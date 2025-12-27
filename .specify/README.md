# Specify Framework - Portfolio Project

This directory contains the Specify project management framework for organizing feature development.

## What is Specify?

Specify is a lightweight framework for managing feature development through structured specifications, implementation plans, and task tracking. It helps maintain consistency and quality across all portfolio features.

## Directory Structure

```
.specify/
├── memory/
│   └── constitution.md        # Project principles and standards
├── scripts/
│   └── powershell/            # Automation scripts
│       ├── common.ps1         # Shared functions
│       ├── create-new-feature.ps1
│       ├── setup-plan.ps1
│       ├── check-prerequisites.ps1
│       └── update-agent-context.ps1
├── templates/                 # Document templates
│   ├── spec-template.md
│   ├── plan-template.md
│   ├── tasks-template.md
│   ├── adr-template.md
│   └── checklist-template.md
└── README.md                  # This file
```

## Quick Start

### Using Claude Code (Recommended)

The easiest way to use Specify is through the `/sp` command in Claude Code:

```
/sp new feature-name    # Create a new feature
/sp plan                # Set up implementation plan
/sp check               # Check prerequisites
/sp status              # View all features
```

### Using PowerShell Scripts

From the repository root:

```powershell
# Create a new feature
.\.specify\scripts\powershell\create-new-feature.ps1 "my-feature"

# Set up a plan for the current feature
.\.specify\scripts\powershell\setup-plan.ps1

# Check prerequisites
.\.specify\scripts\powershell\check-prerequisites.ps1
```

## Workflow

### 1. Create a Feature Specification

```powershell
.\.specify\scripts\powershell\create-new-feature.ps1 "portfolio-gallery"
```

This creates:
- A numbered directory in `specs/` (e.g., `specs/001-portfolio-gallery/`)
- A `spec.md` file from the template
- A feature branch (if using Git)

### 2. Fill Out the Specification

Edit `specs/001-portfolio-gallery/spec.md`:
- Define user stories with acceptance criteria
- List functional requirements
- Set measurable success criteria
- Note any edge cases or constraints

### 3. Create an Implementation Plan

```powershell
.\.specify\scripts\powershell\setup-plan.ps1
```

This creates `specs/001-portfolio-gallery/plan.md` where you outline:
- Technical approach
- Components to build
- Step-by-step implementation
- Testing strategy

### 4. Track Tasks

Use `specs/001-portfolio-gallery/tasks.md` to:
- Break down the plan into actionable tasks
- Track progress
- Note blockers and decisions

### 5. Document Decisions

For significant architectural decisions, create ADRs in:
`specs/001-portfolio-gallery/adr-001-decision-title.md`

## Constitution

The `.specify/memory/constitution.md` defines the project's core principles:

1. **User Experience First** - Prioritize visitor journey
2. **Performance & Responsiveness** - Fast, smooth, mobile-friendly
3. **Content Quality** - Professional and accurate
4. **Visual Consistency** - Coherent design language
5. **Accessibility & SEO** - Inclusive and discoverable
6. **Simplicity Over Complexity** - Minimal viable solutions

All features should align with these principles.

## Templates

### spec-template.md
Comprehensive feature specification with:
- User stories and scenarios
- Functional requirements
- Success criteria
- Edge cases

### plan-template.md
Implementation planning with:
- Technical approach
- Architecture decisions
- Step-by-step breakdown
- Risk mitigation

### tasks-template.md
Task tracking with:
- Checklist items
- Status indicators
- Priority levels
- Time estimates

### adr-template.md
Architecture Decision Records documenting:
- Context and problem
- Considered options
- Chosen solution and rationale
- Consequences

## Environment Variables

Set `SPECIFY_FEATURE` to override automatic feature detection:

```powershell
$env:SPECIFY_FEATURE = "001-my-feature"
```

## Integration with Git

Specify works with or without Git. When using Git:
- Feature branches should match directory names (e.g., `001-feature-name`)
- Scripts automatically detect the current branch
- Constitution can enforce branch naming conventions

## Best Practices

1. **Number Features Sequentially** - 001, 002, 003, etc.
2. **Write Specs Before Code** - Clarify requirements first
3. **Keep Specs Updated** - Reflect actual implementation
4. **Document Decisions** - Use ADRs for significant choices
5. **Review Against Constitution** - Ensure alignment with principles
6. **Use Templates Consistently** - Maintain standard structure

## Support

For issues or questions about the Specify framework:
- Check the templates in `.specify/templates/`
- Review the constitution in `.specify/memory/constitution.md`
- See example workflows in `specs/README.md`
- Use `/sp` commands in Claude Code for assistance
