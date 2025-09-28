# v1.0.1 (Sun Sep 28 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Kevin Ross ([@rosskevin](https://github.com/rosskevin)), for all your work!

#### ⚠️ Pushed to `main`

- cleanup and refactor settings to prenvent duplication ([@rosskevin](https://github.com/rosskevin))
- Convert to static JSONC configuration files ([@rosskevin](https://github.com/rosskevin))
- Convert configuration from JS to JSONC format ([@rosskevin](https://github.com/rosskevin))
- Initial biome-config implementation ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-09-28

### Added

- Initial release of @alienfast/biome-config
- Base configuration (`@alienfast/biome-config/base`) with universal formatting and linting rules
  - Consistent code formatting (indentation, line width, quotes)
  - TypeScript and JavaScript linting rules
  - Import sorting and organization
  - Unused variable detection
- React preset (`@alienfast/biome-config/react`) extending base with React-specific rules
  - React hooks exhaustive dependencies checking
  - JSX accessibility rules
  - React-specific linting patterns
- Modular exports supporting configuration composition
  - Base configuration for all JavaScript/TypeScript projects
  - Optional React preset for React projects
  - Flexible composition patterns
- VCS integration features
  - Git ignore support with automatic .gitignore recognition
  - Staged file targeting for pre-commit workflows
- Biome assist features enabled for enhanced development experience
- Peer dependency on @biomejs/biome ^1.9.4

### Migration

If migrating from a local `biome.jsonc` configuration:

1. Install the package: `yarn add -D @alienfast/biome-config`
2. Replace your `biome.jsonc` with an extends reference:

   ```json
   {
     "extends": ["@alienfast/biome-config/react"]
   }
   ```

3. Override specific rules as needed in your local configuration
4. Remove any redundant rules now covered by the shared config

---

**Note**: Future releases will be automatically generated and managed by [auto](https://github.com/intuit/auto).

[1.0.0]: https://github.com/alienfast/biome-config/releases/tag/v1.0.0
