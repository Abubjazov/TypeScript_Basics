import { Company } from './Company'
import { User } from './User'

export class CustomMap {
    private googleMap: google.maps.Map

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 1
        })
    }

    addMarker(mappabelObj: User | Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappabelObj.location.lat,
                lng: mappabelObj.location.lng
            }
        })
    }
}
