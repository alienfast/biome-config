# @alienfast/biome-config

Shareable Biome configuration for AlienFast projects. Provides base and React presets with formatting and linting rules.

## Installation

```bash
# npm
npm install --save-dev @alienfast/biome-config @biomejs/biome

# yarn
yarn add -D @alienfast/biome-config @biomejs/biome
```

## Usage

### Base Configuration

For universal JavaScript/TypeScript projects:

```javascript
// biome.jsonc
import config from '@alienfast/biome-config'
export default config
```

Or using the explicit base export:

```javascript
// biome.jsonc
import { base } from '@alienfast/biome-config/base'
export default base
```

### React Configuration

For React projects (includes all base rules + React domain):

```javascript
// biome.jsonc
import config from '@alienfast/biome-config/react'
export default config
```

Or using named import:

```javascript
// biome.jsonc
import { react } from '@alienfast/biome-config'
export default react
```

### Overriding Rules

Extend and customize the configuration:

```javascript
// biome.jsonc
import config from '@alienfast/biome-config'

export default {
  ...config,
  formatter: {
    ...config.formatter,
    lineWidth: 120, // Override line width
  },
  linter: {
    ...config.linter,
    rules: {
      ...config.linter.rules,
      suspicious: {
        ...config.linter.rules.suspicious,
        noExplicitAny: 'error', // Re-enable explicit any check
      },
    },
  },
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
2. Replace `biome.jsonc` with import statement (see Usage)
3. Move any custom overrides into the spread pattern
4. Remove local configuration file once tested

Example migration:

```javascript
// Before (local biome.jsonc)
{
  "$schema": "https://biomejs.dev/schemas/2.2.4/schema.json",
  "formatter": { "lineWidth": 100 },
  "linter": { "rules": { "recommended": true } }
}

// After (using shared config)
import config from '@alienfast/biome-config'
export default config
```

## Contributing

Issues and pull requests welcome at [github.com/alienfast/biome-config](https://github.com/alienfast/biome-config).

## License

MIT