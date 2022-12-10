import '@testing-library/jest-dom';
import CountryCard from '../components/countryCard/CountryCard';
import CountryTable from '../components/countryTable/countryTable';
import SearchBox from '../components/searchBox/SearchBox';
import Spinner from '../components/spinner/Spinner'


it('expect same snapshot Spinner', () => {
    expect(<Spinner />).toMatchSnapshot();
})

it('expect same snapshot CountryCard', () => {
    expect(<CountryCard />).toMatchSnapshot();
})

it('expect same snapshot SearchBox', () => {
    expect(<SearchBox />).toMatchSnapshot();
})

it('expect same snapshot CountryTable', () => {
    expect(<CountryTable />).toMatchSnapshot();
})

