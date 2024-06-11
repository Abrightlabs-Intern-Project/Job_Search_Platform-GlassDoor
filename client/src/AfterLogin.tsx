import SearchInspirationComponent from "./components/LoginCom/Startsearch"
import Profile from "./components/Signin/profile"
import NavBar from "./components/navBarBeforeLog/NavBar"


function Afterlogin() {

    return (
      <>
        <NavBar />
        <div>main page</div>
        <Profile />
        <SearchInspirationComponent />
      </>
    )
  }
  
  export default Afterlogin
  