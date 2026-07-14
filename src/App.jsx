import {Routes, Route} from 'react-router'
import Home from './components/Home'
import Create from './components/Create'
import Delete from './components/Delete'
import Edit from './components/Edit'
import Navbar from './components/navbar/Navbar'
import './App.css'

function App() {
  return (
    <>
    <Navbar 
    content={
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/delete/:id' element={<Delete />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    }
    />
    </>
  )
}

export default App
