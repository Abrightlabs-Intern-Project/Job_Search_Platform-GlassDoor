import { useState } from 'react'
import GlassdoorFeatureComponent from './components/LoginCom/FeatureComp'
import NewFeatureComponent from './components/LoginCom/NewFeatureComponent'
import ResponsiveComponent from './components/LoginCom/Responsivecomp'
import SearchInspirationComponent from './components/LoginCom/Startsearch'
import NavBar from './components/navBarBeforeLog/NavBar'
import ResponsiveComponent2 from './components/LoginCom/Responsivecomp2'

function BeforeLog() {

  const [show , setShow] = useState<boolean>(true);
  function handleClick() {
    setShow(!show)
  }

    return (
      <>
        <NavBar />
        {show && <ResponsiveComponent props={handleClick}/> }
        {!show && <ResponsiveComponent2/>}
        <NewFeatureComponent />
        <GlassdoorFeatureComponent />
        <SearchInspirationComponent />
      </>
    )
  }
  
  export default BeforeLog
  