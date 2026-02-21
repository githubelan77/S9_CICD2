import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={        
        () => setIsOpen(true)}  >
        Open Login Part
      </button>
      {isOpen}

      {isOpen && (
        <div className="overlay">
          <div className="modal">
            <h2>Login</h2>
            <input type="text" placeholder="Username" /><br></br>
            <input type="password" placeholder="Password" />
            
            <div className="actions">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button>Login</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
