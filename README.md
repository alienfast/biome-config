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
  "extends": ["@alienfast/biome-config/base"]
}
```

### React Configuration

For React projects (includes all base rules + React domain):

```jsonc
// biome.jsonc
{
  "extends": ["@alienfast/biome-config/base", "@alienfast/biome-config/react"]
}
```

## Contributing

Issues and pull requests welcome at [github.com/alienfast/biome-config](https://github.com/alienfast/biome-config).

## License

MIT
