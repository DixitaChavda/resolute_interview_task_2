import './App.css';
import FeatureSet from './components/FeatureSet';
import Footer from './components/Footer';
import Header from './components/Header';
import Repos from './components/Repos';
import SoftwareSolution from './components/SoftwareSolution';

function App() {
  return (
   <div className='pt-[90px]'>
   <Header/>
   <SoftwareSolution/>
   <Repos/>
   <FeatureSet/>
   <Footer/>
   

   

   </div>
    

  
    
  );
}

export default App;
