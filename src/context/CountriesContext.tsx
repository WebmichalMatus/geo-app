import { createContext, useReducer } from 'react'
import { countriesReducer } from '../reducers/countriesReducer'

export type SelectedDataProps = {
    region: string | null
    subRegion: string | null
    country: string | null
}

export type ActionProps = {
    type: string
    payload?: string
}

export type CountriesContextProps = {
    selectedData: SelectedDataProps
    dispatch: React.Dispatch<ActionProps>
}

type CountriesContextProviderProps = {
    children: React.ReactNode
}

const initialSelectedData: SelectedDataProps = {
    region: null,
    subRegion: null,
    country: null
}

export const CountriesContext = createContext(initialSelectedData)

export const CountriesContextProvider = ({ children }: CountriesContextProviderProps) => {

    const [state, dispatch] = useReducer<React.Reducer<SelectedDataProps, ActionProps>>(countriesReducer, initialSelectedData)

    return (
        <CountriesContext.Provider value={{ selectedData: state, dispatch }}>
            {children}
        </CountriesContext.Provider>
    )
}