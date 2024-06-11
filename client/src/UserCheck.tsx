import GlassdoorFeatureComponent from './components/LoginCom/FeatureComp'
import NewFeatureComponent from './components/LoginCom/NewFeatureComponent'
import ResponsiveComponent2 from './components/LoginCom/Responsivecomp2'
import SearchInspirationComponent from './components/LoginCom/Startsearch'
import NavBar from './components/navBarBeforeLog/NavBar'

function UserCheck() {

    return (
      <>
        <NavBar />
        <ResponsiveComponent2 />
        <NewFeatureComponent />
        <GlassdoorFeatureComponent />
        <SearchInspirationComponent />
      </>
    )
  }
  
  export default UserCheck
  