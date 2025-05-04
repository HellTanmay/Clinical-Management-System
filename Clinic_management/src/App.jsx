import { Route,Routes,BrowserRouter } from 'react-router-dom'
import './App.css'
import ClinicManagementHomepage from './Homepage/homepage'
import  Layout  from './Homepage/Layout'
import Login from './Authentication/Login'
import Register from './Authentication/Register'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Layout>
        <Routes>
        <Route index element={<ClinicManagementHomepage/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />

        </Routes>
      
      </Layout>
      
      </BrowserRouter>
    </div>
  )
}

export default App
