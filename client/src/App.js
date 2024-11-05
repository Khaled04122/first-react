import './App.css';
import { Link } from 'react-router-dom';
import Home from './componant/home';
import News from './componant/news';
import Counter from './componant/counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home name=" alhareth "/>}/>
      <Route path='news' element={<News/>}/>
      <Route path='counter' element={<Counter/>}/>
    </Routes>
    </BrowserRouter>
    
    
    
  );
}

export default App;