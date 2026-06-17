import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DoctorProfile from './components/DoctorProfile';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './App.css';

function App() {
  useScrollAnimation();

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <DoctorProfile />
        <Services />
        <WhyChoose />
        <Reviews />
        <Booking />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
