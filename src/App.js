
import React from 'react'
import MovieGrid from './MovieGrid';
import styles from './App.module.css'

function App() {
  return (
    <div>
    <header>
      <h1 className={styles.title}>Movies</h1>
    </header>
    <main>
    <MovieGrid></MovieGrid>
    </main>
    </div>
  )
}



export default App;