import './AppStyles.scss';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Bio from './components/Bio/Bio';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Bio/>  
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
