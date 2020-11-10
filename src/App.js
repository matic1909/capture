import { Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contact";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route exact path="/">
        <AboutUs />
      </Route>
      <Route path="/work">
        <OurWork />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>
    </div>
  );
}

export default App;
