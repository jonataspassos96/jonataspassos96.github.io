import './styles.js';
import Header from './components/Header';
import WrapperApp from './styles.js';
import Home from './pages/Home';

function App() {
  return (
    <WrapperApp>
      <Header />
      <Home />
    </WrapperApp>
  );
}

export default App;
