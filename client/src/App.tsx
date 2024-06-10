
import './App.css'
import GlassdoorFeatureComponent from './components/LoginCom/FeatureComp'
import NewFeatureComponent from './components/LoginCom/NewFeatureComponent'
import ResponsiveComponent from './components/LoginCom/Responsivecomp'
import SearchInspirationComponent from './components/LoginCom/Startsearch'
import NavBar from './components/navBarBeforeLog/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <ResponsiveComponent />
      <NewFeatureComponent />
      <GlassdoorFeatureComponent />
      <SearchInspirationComponent />
    </>
  )
}

export default App
