import useFetch from './useFetch';
import { Country } from '../types/country.type';

type UseCountriesResult = {
    countries: Country[] | null;
    loading: boolean;
    error: any | null;
    nestedRegions: { region: string; subregions: string[] }[];
    subRegions: string[];
    regions: string[]
}

type NestedRegionsProps = {
    regions: string[]
    nestedRegions: { region: string; subregions: string[] }[]
    subRegions: string[]
}

export default function useCountries(): UseCountriesResult {

    const { data: countries, loading, error } = useFetch<Country[]>(
        'https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,latLng,population,languages,landlocked,area'
    );

    const getRegionsAndSubregions = (): NestedRegionsProps => {
        if (!countries) return {
            regions: [],
            nestedRegions: [],
            subRegions: []
        }

        const nestedRegionsMap: Map<string, Set<string>> = new Map();
        const subRegions: Set<string> = new Set();
        const regions: Set<string> = new Set();

        countries.forEach((country) => {
            const { region, subregion } = country;

            if (region && subregion) {
                if (!nestedRegionsMap.has(region)) {
                    nestedRegionsMap.set(region, new Set());
                }

                nestedRegionsMap.get(region)?.add(subregion);
                regions.add(region);
                subRegions.add(subregion);
            }
        });

        const nestedRegions: { region: string; subregions: string[] }[] = [];

        nestedRegionsMap.forEach((subregions, region) => {
            nestedRegions.push({ region, subregions: Array.from(subregions) });
        });

        return { regions: Array.from(regions), nestedRegions, subRegions: Array.from(subRegions) };
    };

    const { nestedRegions, subRegions, regions } = getRegionsAndSubregions();

    return {
        countries,
        loading,
        error,
        nestedRegions,
        subRegions,
        regions,
    };
}
