import { useContext } from 'react'
import { CountriesContext } from '../../../context/CountriesContext'
import { WishlistContext } from '../../../context/WishlistContext';
import { Tooltip, Button, Divider } from "@nextui-org/react";
import { HeartIcon } from '../../../assets/icons/HeartIcon'
import { Country } from '../../../types/country.type';
import CountryStat from './CountryStat';

type CountryDetailProps = {
    countries: Country[] | null
}
function CountryDetail({ countries }: CountryDetailProps) {

    const countriesData = useContext(CountriesContext)
    const wishlistData = useContext(WishlistContext)

    if (!wishlistData || !countriesData) {
        return <></>
    }
    const { selectedData } = countriesData
    const { setWishlist, wishlist } = wishlistData

    const setWishedCountry = () => {
        setWishlist((prev: string[]) => {
            const countryName = country?.name?.common
            if (countryName) {
                if (!prev.includes(countryName)) {
                    return [...prev, countryName]
                } else if (prev.includes(countryName)) {
                    return prev.filter(p => p !== countryName)
                }
            }
            return prev
        })

    }

    const buttonVariant = () => {
        const isInWish = wishlist && wishlist.some((i: string) => i === country?.name?.common)
        if (isInWish) return 'solid'
        return 'bordered'
    }

    const country = countries && countries.find(country => country?.name?.common === selectedData?.country)
    console.log(country)

    return (
        <>
            {country && <div className="p-4 md:p-8">
                <div className="flex items-start lg:items-center justify-between mb-6">
                    <div className='lg:flex gap-4'>
                        <div>
                            <img src={country?.flags?.svg} className="h-16 shadow block" />
                        </div>

                        <div className="mt-4 lg:mt-0">
                            <div className='flex gap-2'>
                                <h2 className='text-sm'>{country?.region}</h2>
                                <h2 className='text-sm'>{country?.subregion}</h2>
                            </div>
                            <div className='flex gap-4'>
                                <h1 className='text-3xl '>{country?.name?.common} <span className='opacity-60'>{country?.name?.official}</span></h1>

                            </div>
                        </div>
                    </div>

                    <Tooltip
                        placement="bottom-end"
                        content="Add to visited"
                        color="secondary"
                    >
                        <Button onClick={() => setWishedCountry()} size="lg" variant={buttonVariant()} isIconOnly color="primary" aria-label="Like">
                            <HeartIcon />
                        </Button>
                    </Tooltip>
                </div>
                <Divider className="my-4" />

                <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">


                    <CountryStat title="Population">
                        {country?.population.toLocaleString()}
                    </CountryStat>
                    <CountryStat title="Capital">
                        {country?.capital.join(", ")}
                    </CountryStat>
                    <CountryStat title="Area">
                        {country?.area.toLocaleString()} km<sup>2</sup>
                    </CountryStat>
                    <CountryStat title={country?.landlocked ? 'Landlocked' : 'Has sea'} />
                </div>

            </div >}
        </>


    )
}

export default CountryDetail