import { createContext, useEffect, useState} from "react";
import useFetch from './callAPI/UseFetch';

export const CountriesContext = createContext({
    countries: [],
    loading: true
})

export const CountriesProvider = ({children}) => {
    const url = "https://restcountries.com/v3.1/all"
    const {data, loading} = useFetch(url)
    const [countries, setCountries] = useState([])
    const value  = {
        countries,
        loading
    }

    useEffect(()=>{
        if (!loading){
            setCountries(data)
        }
    },[data, loading])

    return (
        <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>
    )
}