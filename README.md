# @alienfast/biome-config

Shareable Biome configuration for AlienFast projects. Provides static JSONC configuration files for base and React presets with formatting and linting rules.

## Installation

```bash
# npm
npm install --save-dev @alienfast/biome-config @biomejs/biome

# yarn
yarn add -D @alienfast/biome-config @biomejs/biome
```

## Usage

This package provides static JSONC configuration files that are consumed via Biome's `extends` feature. All configurations are declarative and cannot be imported programmatically.

### Base Configuration

For universal JavaScript/TypeScript projects:

```jsonc
// biome.jsonc
{
  "extends": ["@alienfast/biome-config"]
}
```

### React Configuration

For React projects (includes all base rules + React domain):

```jsonc
// biome.jsonc
{
  "extends": ["@alienfast/biome-config/react"]
}
```

### Overriding Rules

Customize the configuration by adding your own rules after the extends:

```jsonc
// biome.jsonc
{
  "extends": ["@alienfast/biome-config"],
  "formatter": {
    "lineWidth": 120 // Override line width
  },
  "linter": {
    "rules": {
      "suspicious": {
        "noExplicitAny": "error" // Re-enable explicit any check
      }
    }
  }
}
```

## Configuration Details

### Base Configuration

The base preset includes:

**Formatting:**
- 2-space indentation
- 100 character line width
- Single quotes for strings
- Semicolons as needed (not required)
- Trailing commas everywhere
- Bracket spacing enabled
- Brackets on new line

**Linting (key rules):**
- Unused imports/variables/parameters (error with auto-fix)
- Optional chaining enforcement
- Literal keys over computed
- Template literals over string concatenation
- Strict equality (no `==`, use `===`)
- Exhaustive React hook dependencies
- `noExplicitAny` disabled (allows `any` type)

**Additional Features:**
- Import organization and key sorting (assist)
- Git VCS integration with `.gitignore` support
- Recommended rules enabled by default

### React Configuration

Extends base configuration with:
- All React domain rules enabled (`react: 'all'`)
- React Hooks rules
- JSX best practices

## Migration

If migrating from a local `biome.jsonc`:

1. Install this package
2. Replace your configuration with the `extends` syntax (see Usage)
3. Move any custom overrides to the root level of your configuration
4. Test the configuration and remove unnecessary local rules

Example migration:

```jsonc
// Before (local biome.jsonc)
{
  "$schema": "https://biomejs.dev/schemas/2.2.4/schema.json",
  "formatter": { "lineWidth": 100 },
  "linter": { "rules": { "recommended": true } }
}

// After (using shared config)
{
  "extends": ["@alienfast/biome-config"]
}
```

## Contributing

Issues and pull requests welcome at [github.com/alienfast/biome-config](https://github.com/alienfast/biome-config).

## License

MIT