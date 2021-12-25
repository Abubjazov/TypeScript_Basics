import 'dotenv/config'

import { Company } from './models/Company'
import { User } from './models/User'

const user = new User
const company = new Company

console.log(user)
console.log(company)
console.log(process.env.GOOGLE_API_KEY)
