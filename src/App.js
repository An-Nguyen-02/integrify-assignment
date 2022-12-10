import * as React from 'react';
import './App.css';
import CountryCard from './components/countryPage/CountryPage'
import SearchBox from './components/searchBox/SearchBox';
import CountryTable from './components/countryTable/countryTable';
import { useState, useEffect, useContext} from 'react';
import {CountriesContext} from './contexts/countriesContext'
function App() {
  const {countries, loading} = useContext(CountriesContext)
  const [searchField, setSearchField] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])
  const props = {
    name : "Afganistan",
    capital : ["Kabul"],
    flag : "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    region : "Asia",
    subRegion : "Southern Asia",
    latlng: [33.0, 65.0],
    population: 40218234,
    independent: true,
    officialName: "Islamic Republic of Afghanistan",
    area: 652230.0,
    capitalLatLng : [34.52, 69.18],
    coatOfArms : "https://mainfacts.com/media/images/coats_of_arms/af.svg",
    unMember: true,
    fifa : "AFG",
    startOfWeek : "Monday"
  }
  useEffect(()=>{
    if (!loading){

      setFilteredCountries(countries.filter(country => {
        return country.name.common.toString().toLowerCase().includes(searchField.toLowerCase())
      }))
    }

  },[countries, searchField, loading])

  const onSearchChange = (e) => {
    setSearchField(e.target.value)
  }

  if (loading) return (
    <h1>Loading...</h1>
  ) 
  return (
    <div className="App">
      <SearchBox searchChange = {onSearchChange}/>
      <CountryTable rows={filteredCountries} />
    </div>
  );
}

export default App;
