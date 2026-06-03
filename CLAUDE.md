# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a shareable Biome configuration package (`@alienfast/biome-config`) that provides formatting, linting, and code quality rules for JavaScript/TypeScript projects at AlienFast. Unlike traditional configuration packages, this distributes source files directly without a build step.

## Development Commands

- **Clean**: `pnpm clean` - Removes build artifacts and cache files
- **Clean pnpm**: `pnpm clean:pnpm` - Removes `node_modules`/lockfile and prunes the pnpm store
- **Reset**: `pnpm reset` - Comprehensive reset (runs clean, clean:pnpm, then reinstalls)
- **Check**: `pnpm check` - Runs Biome and markdownlint checks in parallel (JS/TS/JSON + Markdown)
- **Check Biome**: `pnpm check-biome` - Runs Biome check on JS/TS/JSON files (linting + formatting verification)
- **Check Markdown**: `pnpm check-markdown` - Lints and formats Markdown files with markdownlint
- **Format**: `pnpm format` - Formats all files with Biome formatter
- **Test**: `pnpm test` - Alias for `pnpm check` (no separate test suite)
- **Release**: `pnpm release` - Automated release using auto (version bump, changelog, publish)

## Architecture

### Core Structure

- **`src/base.jsonc`** - Universal base configuration for all JavaScript/TypeScript projects
- **`src/react.jsonc`** - React-specific configuration extending base with React domain rules
- **`scripts/`** - Utility scripts for cleanup and maintenance

### Configuration Philosophy

The package provides modular presets using a layered approach:

1. **Base Configuration** - Universal rules for formatting, linting, VCS integration, and assist features
2. **Domain-Specific Overlays** - React preset extends base with framework-specific rules
3. **Source Distribution** - Exports raw JavaScript modules directly (no build artifacts)

This design allows consumers to:

- Import the base config for vanilla JS/TS projects
- Import domain-specific presets (e.g., React) for framework projects
- Extend or override rules by merging with their own configuration

### Key Features

**Formatting:**

- 100 character line width
- Single quotes, semicolons as needed
- 2-space indentation
- Trailing commas everywhere

**Linting:**

- Recommended rules enabled by default
- Safe auto-fixes for unused imports, optional chaining, template literals
- Exhaustive dependency checking for React hooks
- Literal keys and double-equals enforcement

**VCS Integration:**

- Git-aware with `.gitignore` support
- Default branch: `main`

**Assist Features:**

- Automatic import organization
- Sorted object keys

### Export Strategy

Package exports are defined for modular consumption:

```javascript
// Default base configuration
import config from '@alienfast/biome-config'

// React-specific configuration
import { react } from '@alienfast/biome-config'

// Direct file imports (also supported)
import base from '@alienfast/biome-config/base'
import reactConfig from '@alienfast/biome-config/react'
```

All exports point directly to source files in `src/`, no build step required.

## Package Management

- Uses pnpm 10.x with package manager enforcement (`packageManager` field + Corepack)
- ESM-only package (`"type": "module"`)
- Publishes to two registries: the public npm registry (primary, via OIDC Trusted Publishing with provenance) and GitHub Packages (secondary mirror, via the `GH_TOKEN` PAT)
- Node.js >= 22 required
- Biome as peer dependency (consumer must install)

## Configuration Guidelines

### Adding New Rules

When modifying configurations, follow these principles:

1. **Rule Placement:**
   - Universal rules → `base.jsonc`
   - Framework-specific rules → domain preset (e.g., `react.jsonc`)

2. **Fix Safety:**
   - Use `"fix": "safe"` for non-destructive fixes
   - Use `"fix": "unsafe"` only when necessary (e.g., unused variables)

3. **Error Level:**
   - Use `"level": "error"` for critical rules
   - Avoid warnings; prefer error or off

4. **Options:**
   - Include empty `options: {}` for consistency
   - Document non-obvious option values with comments

### Extending Configurations

Domain presets should extend base configuration by importing and merging objects. Since these are JSONC files, consumers will reference them directly in their Biome configuration:

```jsonc
{
  "extends": ["@alienfast/biome-config/base"],
  // Add domain-specific overrides
}
```

### Schema Version

Always specify the Biome schema version in base configuration:

```javascript
$schema: 'https://biomejs.dev/schemas/2.4.16/schema.json'
```

Update this when upgrading Biome versions.

## Release Process

This package uses [auto](https://intuit.github.io/auto/) for automated releases.

### Versioning Strategy

- **Patch**: Bug fixes, documentation updates
- **Minor**: New features, rule additions (non-breaking)
- **Major**: Breaking changes, rule removals, significant behavior changes

### Release Steps

1. Commit changes with conventional commit messages
2. Run `pnpm release` (CI runs this automatically on push to `main` via the `build` workflow)
3. Auto will:
   - Determine version bump from commit messages
   - Generate changelog
   - Create Git tag
   - Publish to the public npm registry (OIDC Trusted Publishing, with provenance)
   - Update contributors
4. A follow-up CI step mirrors the same version to GitHub Packages using `GH_TOKEN`

### Commit Message Format

Use conventional commits for proper versioning:

- `fix:` → patch version
- `feat:` → minor version
- `BREAKING CHANGE:` → major version

## Important Notes

- **No Build Step**: This package distributes source files directly
- **TypeScript Types**: TypeScript checking is for IDE support only; no declaration files generated
- **Peer Dependencies**: Consumers must install `@biomejs/biome` themselves
- **ESM Only**: No CommonJS support; all imports must use ESM syntax
