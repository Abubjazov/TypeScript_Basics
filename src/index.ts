import 'dotenv/config'

import { Company } from './models/Company'
import { User } from './models/User'

new google.maps.Map(document.getElementById('map'), {
    center: {
        lat: 0,
        lng: 0
    },
    zoom: 1
})
