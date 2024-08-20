import "./App.css";
import "./assets/css/starter.css";
import bakerystore from "./assets/media/bakery-store.png";
import product from "./assets/data/products";

const displayBakery = product.map((products) => {
  return (
    <div className="bakerystore-container">
      <h2>{products.name}</h2>
      <img className="bakery-items" src={products.image} alt="Bread"></img>
      <p>{products.price}</p>
    </div>
  );
});

function App() {
  return (
    <div className="container">
      <h1>Bakers World </h1>
      <p1>Unleash Your Inner Bakers</p1>
      <img src={bakerystore} alt="Bakery" className="bakerystore-image"></img>
      <div className="bakery-section">{displayBakery}</div>
    </div>
  );
}

export default App;
