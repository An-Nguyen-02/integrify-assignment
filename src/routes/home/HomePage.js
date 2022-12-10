import { useState, useEffect, useContext, useCallback} from 'react';
import {CountriesContext} from '../../contexts/countriesContext'
import SearchBox from '../../components/searchBox/SearchBox';
import CountryTable from '../../components/countryTable/countryTable';
import Spinner from '../../components/spinner/Spinner';
export default function HomePage(){
    const {countries, loading} = useContext(CountriesContext)
    const [searchField, setSearchField] = useState('')
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(()=>{
        if (!loading){
    
          setFilteredCountries(countries.filter(country => {
            return country.name.common.toString().toLowerCase().includes(searchField.toLowerCase())
          }))
        }
    
    },[countries, searchField, loading])
    
    const onSearchChange = useCallback((e) => {
        setSearchField(e.target.value)
    },[])

    if (loading) return (
        <Spinner />
    ) 
    return (
        <div className="App">
          <SearchBox searchChange = {onSearchChange}/>
          <CountryTable rows={filteredCountries} />
        </div>
    );
        
}