import logo from "./logo.svg";
import "./App.css";
import HomePage from "./page/HomePage";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="my-5 fs-1 fw-bold text-primary">
        TOP CONTRIBUTIOR OF THIS MONTH
      </h1>

      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
