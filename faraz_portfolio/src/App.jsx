import react from 'react';
import Intro from './components/Intro'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import TimeLine from './components/Timeline'
import Footer from './components/Footer'
import {useState} from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Intro/>
      <Portfolio/>
      <TimeLine/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
