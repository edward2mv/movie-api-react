
import React from 'react'
import styles from './App.module.css'
import { MovieDetails } from './pages/MovieDetails.jsx';
import { Landing } from './pages/Landing.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <header>
      {/* */}
      <Link to="/"><h1 className={styles.title}>MOVIES APP</h1> </Link>
    </header>
    <main>
    <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails/>}>Movies</Route>
          <Route path="/" element={<Landing />}> Home </Route>
        </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App;