// import JobsCard from "./components/Afterlogin/JobsComp"
import NavigationBar from "./components/Afterlogin/NavigationBar"
import SearchBar from "./components/Afterlogin/SearchBar"
import TabNavBar from "./components/Afterlogin/TabNavBar"
import Demos from "./components/cards/demosjobs"
// import Apps from "./demo/maindemo"


function Afterlogin() {

    return (
      <>
        <NavigationBar />
        <SearchBar />
        <TabNavBar />
        
        {/* <JobsCard /> */}
        {/* <Apps /> */}
        <Demos />
      </>
    )
  }
  
  export default Afterlogin
  