import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './componets/Navbar';
import Hero from './componets/Hero';
import Tranding from './componets/Tranding';
import FilterSearch from './componets/FilterSearch';
import Brand from './componets/Brand';
import Review from './componets/Review';
import Location from './componets/location';
import Footer from './componets/Footer';


function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <FilterSearch />
      <Tranding />
      <Brand />
      <Review />
      <Location />
      <Footer />
    </>
  )
}

export default App
