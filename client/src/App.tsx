
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import BeforeLog from './BeforeLogin'
import Jobs from './pages/Jobs'
import UserCheck from './pages/UserCheck'
import BeforeLog from './pages/BeforeLogin'
import { Community } from './pages/Community'
import { Recommended } from './pages/Recommended'
import { Company } from './pages/Company'
import { Search } from './pages/Search'
import { Saved } from './pages/Saved'
import { Checkinggoogle } from './components/Signin/Checkinggoogle'
import { NewGoogleuser } from './components/Signin/newGoogleuser'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<BeforeLog />} />
        {/* <Route path="/" element={<Afterlogin/>} /> */}
        <Route path="/community" element={<Community />} />
        <Route path="/recomend" element={<Recommended />} />
        <Route path="/company" element={<Company />} />

         <Route path="/jobs" element={<Jobs />} />
         <Route path="/search" element={<Search />} />
         <Route path="/saved" element={<Saved />} />
         <Route path="/checkinggoogle" element={<Checkinggoogle />} />
        <Route path="/withmail" element={<UserCheck />} />
        <Route path="/newuser" element={<NewGoogleuser />} />





      </Routes>
    </>
  )
}

export default App
