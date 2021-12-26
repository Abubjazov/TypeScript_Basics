import 'dotenv/config'

import { User } from './models/User'
import { Company } from './models/Company'
import { CustomMap } from './models/CustomMap'

const map = new CustomMap('map')
const user = new User()
const company = new Company()

map.addUserMarker(user)
map.addUserMarker(company)
