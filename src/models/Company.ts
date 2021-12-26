import faker from 'faker'
import { Mappable } from './CustomMap'

export class Company implements Mappable{
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

    getObjMetaData(): string {
        return `
        <div>
            <h2>Company name: ${this.name}</h2>
            <h3>Company catch frase: ${this.catchFrase}</h3>
        </div>
        `
    }
}
