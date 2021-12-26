import faker from 'faker'

export class User {
    name: string
    location: {
        lat: number
        lng: number
    }

    constructor() {
        this.name = faker.name.firstName()
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        }
    }

    getObjMetaData(): string {
        return `
        <div>
            <h2>User name: ${this.name}</h2>
        </div>
        `
    }
}
