import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Restaurentlist from './Restaurentlist';
import ViewRest from './ViewRest';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
     
         <Routes>
          {/*path setting for Restaurentlist */}
           <Route path='/' element={<Restaurentlist></Restaurentlist>}></Route>
          {/*path setting for ViewRest */}
          <Route path='/view-restaurant/:id' element={<ViewRest></ViewRest>}></Route>
         </Routes>
     
      <Footer></Footer>
      </Router>
    
    </div>
   
  );
}

export default App;
