import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Meals from "./components/Meals/Meals";
import { CartContextProvider } from "./store/CartContext";
import "./App.css";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Hero />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
