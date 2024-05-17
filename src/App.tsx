import { useCallback, useState } from 'react'
import './App.css'
import { calculerHeure } from './modules/solution'

function App() {
  const [lune, setLune] = useState(1)
  const [terre, setTerre] = useState(1)
  const [soleil, setSoleil] = useState(1)
  const [heure, setHeure] = useState('')

  const handleGetSolution = useCallback(() => {
    setHeure(calculerHeure(lune, terre, soleil))
  }, [lune, terre, soleil])

  const handleChangeTerre = useCallback((e) => {
    const newValue = e.target.value
    try {
      const intValue = parseInt(newValue)
      if (intValue < 1) {
        setTerre(1)
      }
      else if (intValue > 2) {
        setTerre(2)
      }
      else {
        setTerre(intValue)
      }
    }
    catch (error) {
      setTerre(1)
    }
  }, [])

  return (
    <>
      <div>
        <h1>TP-full-tests</h1>
        <div>
          <label htmlFor="lune">Lune</label>
          <input id="lune" type="number" min={1} max={2} value={lune} onChange={(e) => setLune(parseInt(e.target.value))} />
        </div>
        <div>
          <label htmlFor="terre">Terre</label>
          <input id="terre" type="number" min={1} max={2} value={terre} onChange={handleChangeTerre} />
        </div>
        <div>
          <label htmlFor="soleil">Soleil</label>
          <input id="soleil" type="number" min={1} max={2} value={soleil} onChange={(e) => setSoleil(parseInt(e.target.value))} />
        </div>
        <button id="solution-btn" onClick={handleGetSolution}>Solution</button>
        <div>
          <p>Heure: <span id='solution'>{heure}</span></p>
        </div>
      </div>
    </>
  )
}

export default App
