import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screen/HomeScreen.js'

function App() {
  return (
    <div>
      <Header/>
<main className='py-3' >
<Container>
  <HomeScreen />
</Container>
</main>
   <Footer/>
    </div>
  )
}
export default App;