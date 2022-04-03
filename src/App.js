import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componants/Header/Header';
import Inventory from './componants/Inventory/Inventory';
import Login from './componants/Login/Login';
import NotFound from './componants/NotFound/NotFound';
import OrderReview from './componants/OrderReview/OrderReview';
import PlaceOrder from './componants/PlaceOrder/PlaceOrder';
import PrivateOutlet from './componants/PrivateOutlet/PrivateOutlet';
import Register from './componants/Register/Register';
import Shipping from './componants/Shipping/Shipping';
import Shop from './componants/Shop/Shop';
import AuthProvider from './context/AuthProvider';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Shop/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/review" element={<OrderReview/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          {/* //Private Router// */}
          <Route path='/*' element={<PrivateOutlet/>}>
            <Route path="placeOrder" element={<PlaceOrder/>}></Route>
            <Route path="inventory" element={<Inventory/>}></Route>
            <Route path="shipping" element={<Shipping/>}></Route>
          </Route>
          
        </Routes>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
