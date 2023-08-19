import './App.css';
import { Container } from 'react-bootstrap';

import { FirstComponent } from './components/FirstComponent';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Container className='text-light'>
          <FirstComponent />
        </Container >
      </header>
    </div>
  );
}

export default App;
