import './App.css';
import Heading from './components/Heading';
import Main from './components/Main';
import Footer from './components/Footer'
import Contentment from './components/Content'
import Section from  './components/Section'

function App() {
  return (
   <div className="flex_container"><Heading/><Main/><Contentment/><Section/><Footer/></div>
  );
}

export default App;
