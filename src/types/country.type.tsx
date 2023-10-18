export type Country = {
    name: {
        common: string
        official: string
    }
    flags: { svg: string }
    region: string
    subregion: string
    latLng: [number, number]
    population: number
    landlocked: boolean
    area: number
    capital: string[]

}