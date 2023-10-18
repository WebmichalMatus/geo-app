import { useContext } from 'react'
import SelectChoice from './SelectChoice'
import { CountriesContext } from '../../../context/CountriesContext'
import { Country } from '../../../types/country.type'


type CountriesNavigationProps = {
    regions: string[]
    subRegions: string[]
    countries: Country[]
    nestedRegions: {
        region: string;
        subregions: string[]
    }[]
}
function CountriesNavigation({ regions, subRegions, countries, nestedRegions }: CountriesNavigationProps) {
    const { selectedData, dispatch } = useContext(CountriesContext)

    const setRegion = (val: string) => {
        dispatch({ type: 'setRegion', payload: val })
    }
    const setSubRegion = (val: string) => {
        dispatch({ type: 'setSubRegion', payload: val })
    }
    const setCountry = (val: string) => {
        dispatch({ type: 'setCountry', payload: val })
    }

    const filteredAndSortedCountries = () => {

        const { region, subRegion } = selectedData

        const filtered = countries?.filter((c) => c.region === region && c.subregion === subRegion)

        return filtered?.map((country) => country?.name?.common).sort()
    }

    const filteredAndSortedSubRegions = () => {
        const { region } = selectedData

        const filteredNestedRegions = nestedRegions.find((nestedRegion) => nestedRegion?.region === region)

        if (!filteredNestedRegions?.subregions) {
            return subRegions.sort()
        }
        return filteredNestedRegions?.subregions.sort()
    }

    const regionsAZ = regions.sort()
    const subRegionsAZ = filteredAndSortedSubRegions()
    const countriesNamesAZ = filteredAndSortedCountries()

    return (
        <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-1 p-4 md:p-6 pb-6'>
            <h3 className='font-bold mb-1 text-slate-200 md:col-span-3 lg:col-auto'>Show Country detail</h3>
            <SelectChoice label="Choose Region" items={regionsAZ} onChange={setRegion} />
            <SelectChoice label="Choose Sub Region" items={subRegionsAZ} isDisabled={!selectedData?.region} onChange={setSubRegion} />
            <SelectChoice label="Choose Country" items={countriesNamesAZ} isDisabled={!selectedData?.subRegion} onChange={setCountry} />
        </div>
    )
}

export default CountriesNavigation