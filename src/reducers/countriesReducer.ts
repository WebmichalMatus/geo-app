import { SelectedDataProps, ActionProps } from "../context/CountriesContext";


export function countriesReducer(state: SelectedDataProps, action: ActionProps) {
    switch (action.type) {
        case 'setRegion': {
            return { region: action.payload, subRegion: null, country: null };
        }
        case 'setSubRegion': {
            return { ...state, subRegion: action.payload, country: null };
        }
        case 'setCountry': {
            return { ...state, country: action.payload };
        }
        default: return state
    }
}
