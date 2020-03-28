import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication('auth', () => SystemJS.import('@platafoor/auth'), isActive.auth)
singleSpa.registerApplication('companies', () => SystemJS.import('@platafoor/companies'), isActive.companies)

singleSpa.start()
