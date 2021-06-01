import "bulma/css/bulma.min.css";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

export const API_URL = "https://safe-exchange-api.herokuapp.com";

function App() {
  return (
    <div className="App container is-max-widescreen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
