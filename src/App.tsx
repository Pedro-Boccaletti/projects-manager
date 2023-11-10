import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from './components/Container'
import Home from './pages/Home'
import ProjectsView from './pages/ProjectsView'

function App() {

  return (
    <>
      <BrowserRouter>
        <Container customClass='min-height'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<ProjectsView />}/>
            <Route path='/newproject' element={<Home />}/>
            <Route path='/project/:id' element={<Home />}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
