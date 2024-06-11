
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BeforeLog from './BeforeLogin'
import Afterlogin from './AfterLogin'
import UserCheck from './UserCheck'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<BeforeLog />} />
        <Route path="/profile" element={<Afterlogin />} />
        <Route path="/withmail" element={<UserCheck />} />

      </Routes>
    </>
  )
}

export default App
