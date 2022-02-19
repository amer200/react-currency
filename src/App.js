import Nav from "./components/NavBar";
import ListVs from "./components/ListVs";
import TransBox from "./components/TransBox";
import AdArea from "./components/AdArea";
import Footer from "./components/footer";
import "./app.css";

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <ListVs />
          <TransBox />
        </div>
        <div className="divider"></div>
        <div className="Container">
          <div className="row">
            <AdArea />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
