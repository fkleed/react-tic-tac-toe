import Header from "./layout/Header.js";
import Footer from "./layout/Footer.js";
import Game from "./components/Game.js";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}
