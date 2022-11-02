
import { Route, Routes ,} from 'react-router-dom';

import './App.css';
import Header from './components/header';
 import Home from './components/header/home';
 import Category1 from './components/header/category1';

 
function App() {

 

  return (
    <div className="App">
   
   <Header/>
   <Routes>
      <Route path='/'element={<Home />}/>
      <Route path='/:category1'element={<Category1 />}/>
      
     </Routes>
   
  
    </div>
  );
}

export default App;
