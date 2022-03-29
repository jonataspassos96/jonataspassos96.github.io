import './styles.js';
import Header from './components/Header';
import WrapperApp from './styles.js';
import Home from './pages/Home';
import About from './pages/About/index.jsx';
import Specialties from './pages/Specialties/index.jsx';
import Contact from './pages/Contact/index.jsx';

function App() {
  return (
    <WrapperApp>
      <Header />
      <Home />
      <About />
      <Specialties />
      <Contact />
    </WrapperApp>
  );
}

export default App;
