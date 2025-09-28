/**
 * Biome configuration exports.
 *
 * Usage:
 *
 * Default (base configuration):
 * ```javascript
 * import config from '@alienfast/biome-config'
 * export default config
 * ```
 *
 * React configuration:
 * ```javascript
 * import { react } from '@alienfast/biome-config'
 * export default react
 * ```
 */
import base from "./base.js";
import reactConfig from "./react.js";

// Default export is base configuration
export default base;

// Named exports for specific configurations
export const react = reactConfig;
