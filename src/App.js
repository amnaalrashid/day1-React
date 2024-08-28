import "./App.css";
import "./assets/css/starter.css";
import bakerystore from "./assets/media/bakery-store.png";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div className="container">
      <h1>Bakers World </h1>
      <p1>Unleash Your Inner Bakers</p1>
      <img src={bakerystore} alt="Bakery" className="bakerystore-image"></img>
      <div className="bakery-section">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
