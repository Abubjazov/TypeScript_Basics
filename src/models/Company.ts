import faker from 'faker'

export class Company {
    name: string
    catchFrase: string
    location: {
        lat: number
        lng: number
    }

    constructor() {
        this.name = faker.company.companyName()
        this.catchFrase = faker.company.catchPhrase()
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        }
    }
}
