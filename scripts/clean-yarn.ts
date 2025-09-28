import { $ } from 'execa'
import { rimraf as r } from 'rimraf'

// TODO: promote this as a script to @alienfast/ci once it is stable

export default {}
console.log('Cleaning yarn...')

await $`yarn tsc -b --clean`

// node_modules yarn.lock .yarn/install-state.gz
await Promise.all([r('yarn.lock'), r('node_modules'), r('.yarn/install-state.gz')]).then(
  async () => {
    await $`yarn cache clean`
  },
)
