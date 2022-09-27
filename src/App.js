import Main from "./components/main/Main";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/stickyNavBar/StickyNav";

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Products />
      <Contact />
      <Navbar />
    </div>
  );
}

export default App;
