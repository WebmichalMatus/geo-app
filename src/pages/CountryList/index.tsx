
import useCountries from '../../hooks/useCountries'
import CountriesNavigation from '../../components/country-list/country-list/CountriesNavigation'
import CountryDetail from '../../components/country-list/country-list/CountryDetail'


export default function CountryListPage() {

    const { regions, subRegions, countries, nestedRegions } = useCountries()

    return (
        <div className="lg:flex gap-0 grow overflow-hidden">

            <div className='bg-slate-900 lg:h-full w-full lg:w-[360px]'>
                {regions && subRegions && countries && nestedRegions && <CountriesNavigation nestedRegions={nestedRegions} regions={regions} subRegions={subRegions} countries={countries} />}
            </div>
            <div className='lg:col-span-2'>
                <CountryDetail countries={countries} />
            </div>
        </div>
    )
}
