
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import BeforeLog from './BeforeLogin'
import Afterlogin from './AfterLogin'
import UserCheck from './UserCheck'
import Demos from './components/cards/MainCard'


function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<BeforeLog />} /> */}
        <Route path="/" element={<Afterlogin/>} />
        // <Route path="/profile" element={<Afterlogin />} />
        <Route path="/withmail" element={<UserCheck />} />

        <Route path="/demos" element={<Demos />} />



      </Routes>
    </>
  )
}

export default App
