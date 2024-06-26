import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Welcome from "./components/welcome";
import SecondWelcome from "./components/welcome2";
import About from "./components/about";
import Benefits from "./components/benefits";
import Tokenomic from "./components/tokenomic";
import Footer from "./components/footer";
import Test from "./components/test";
import Transition from "./components/transition";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <SecondWelcome />
      <About />
      <Benefits />
      <Tokenomic />
      <Transition />
      <Footer />
    </>
  );
}

export default App;
