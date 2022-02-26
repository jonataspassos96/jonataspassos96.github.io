import './styles.js';
import Header from './components/Header';
import WrapperApp from './styles.js';
import About from './pages/About';

function App() {
  return (    
    <WrapperApp>
      <Header />
      <About />
    </WrapperApp>
  );
}

export default App;
