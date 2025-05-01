import { Route,Routes,BrowserRouter } from 'react-router-dom'
import './App.css'
import ClinicManagementHomepage from './Homepage/homepage'
import  Layout  from './Homepage/Layout'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Layout>
      <ClinicManagementHomepage/>

      </Layout>
      
      </BrowserRouter>
    </div>
  )
}

export default App
