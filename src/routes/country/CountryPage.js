import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryCard from '../../components/countryCard/CountryCard';
import { CountriesContext } from '../../contexts/countriesContext';

export default function CountryPage() {
    const {countries} = useContext(CountriesContext)
    const {country} = useParams();
    const [countryDetail, setCountryDetail] = useState([])
    useEffect (() =>{
        setCountryDetail(countries.filter(country_i => {
            return (country_i.name.common.toString().toLowerCase() === country)
        }))
    },[countries, country])

    if (countryDetail.length === 0) return (
        <h1>Loading...</h1>
    ) 
    return (
        <CountryCard country={countryDetail[0]}/>
    )
}