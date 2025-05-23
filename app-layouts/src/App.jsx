import products from "./data/products";
import Store from "./components/Store";
import './App.css';

function App() {
  return <Store products={products} />
}

export default App;