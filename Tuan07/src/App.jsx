import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './components/SideBar'
import Header from './components/Header'
import Overview from './components/Overview'
import Table from './components/Table'
import Analytics from './pages/Analytics'
import Integrations from './pages/Integrations'
import Messages from './pages/Messages'
import Projects from './pages/Projects'
import Teams from './pages/Teams'

function App() {

  return (
    <>
    <BrowserRouter>
      <div className='flex min-h-screen'>
        <SideBar/>
        <div className='w-4/5 p-2'>
          <Header/>
          <Routes>
            {/* Route mặc định khi tải trang */}
            <Route path="/" element={
              <>
              <Overview/>
              <Table/>
             </>
             } />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/analytics" element={<Analytics/>} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/teams" element={<Teams/>} />
            <Route path="/integrations" element={<Integrations/>} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
