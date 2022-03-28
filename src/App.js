import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componants/Header/Header';
import Inventory from './componants/Inventory/Inventory';
import NotFound from './componants/NotFound/NotFound';
import OrderReview from './componants/OrderReview/OrderReview';
import Shop from './componants/Shop/Shop';



function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Routes>
          <Route path="/"></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/review" element={<OrderReview/>}></Route>
          <Route path="/inventory" element={<Inventory/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
