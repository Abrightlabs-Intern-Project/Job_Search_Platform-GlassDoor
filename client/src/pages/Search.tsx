import NavigationBar from "../components/Afterlogin/NavigationBar"
import SearchBar from "../components/Afterlogin/SearchBar"
import TabNavBar from "../components/Afterlogin/TabNavBar"
import { Searchfilter } from "../components/Search/Searchfilter"
import MainCard from "../components/cards/MainCard"

export const Search = () => {
  return (
    <>
    <NavigationBar />
        <SearchBar />
        <TabNavBar />
        <Searchfilter />
        <MainCard />

    
    </>
  )
}
