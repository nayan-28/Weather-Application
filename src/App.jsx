import WeatherApp from "./Components/WeatherApp/WeatherApp.jsx"
import './App.css'
function App() {
  return (
    <>
      <div className='App'>
      <h3 className='blinking-text'>Weather Application</h3>
        <h3><WeatherApp/></h3>
        <footer className='footer'>
        <p>&copy; 2023 Nayan Malaakr. All rights reserved.</p>
      </footer>
      </div>
    </>
  )
}

export default App
