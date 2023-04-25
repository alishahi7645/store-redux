import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Product from './components/Product';
import Cart from './components/Cart';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
