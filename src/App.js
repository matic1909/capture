import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contact";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route exact path="/">
        <AboutUs />
      </Route>
      <Route exact path="/work">
        <OurWork />
      </Route>
      <Route path="/work/:id">
        <MovieDetail />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>
    </div>
  );
}

export default App;
