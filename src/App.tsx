import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import NewNote from './pages/NewNote/NewNote';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote/>} />
        <Route path="/:id" >
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="/*" element={<Navigate to='/' />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
