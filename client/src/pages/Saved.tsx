import NavigationBar from '../components/Afterlogin/NavigationBar'
import SearchBar from '../components/Afterlogin/SearchBar'
import TabNavBar from '../components/Afterlogin/TabNavBar'
import { SavedPages } from '../components/Saved/SavedPages'

export const Saved = () => {
  return (
    <>
    <NavigationBar />
        <SearchBar />
        <TabNavBar />
        <SavedPages />
        <h1>saved</h1>
    </>
  )
}
