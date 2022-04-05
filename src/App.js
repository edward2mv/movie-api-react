
import React from 'react'
import styles from './App.module.css'
import { MovieDetails } from './pages/MovieDetails.jsx';
import { Landing } from './pages/Landing.jsx';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <header>
      <Link to="/"><h1 className={styles.neonText}>Movies</h1> </Link>
    </header>
    <main>
    <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails/>}>Movies</Route>
          <Route path="/" element={<Landing />}> Home </Route>
        </Routes>
    </main>
    </Router>
  )
}

export default App;