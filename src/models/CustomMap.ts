interface Mappable {
    location: {
        lat: number
        lng: number
    }
    getObjMetaData(): string
}

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

    addMarker(mappabelObj: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappabelObj.location.lat,
                lng: mappabelObj.location.lng
            }
        })

        marker.addListener('click', (): void => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappabelObj.getObjMetaData()
            })

            infoWindow.open(this.googleMap, marker)
        })
    }
}
