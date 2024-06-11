import GlassdoorFeatureComponent from './components/LoginCom/FeatureComp'
import NewFeatureComponent from './components/LoginCom/NewFeatureComponent'
import ResponsiveComponent from './components/LoginCom/Responsivecomp'
import SearchInspirationComponent from './components/LoginCom/Startsearch'
import NavBar from './components/navBarBeforeLog/NavBar'

function BeforeLog() {

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
  
  export default BeforeLog
  