import './App.css';
import Landing from './components/Landing/Landing';
import Bio from './components/Bio/Bio';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Bio/>  
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
