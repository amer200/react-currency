import Nav from "./components/NavBar";
import ListVs from "./components/ListVs";
import TransBox from "./components/TransBox";
function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <ListVs />
          <TransBox />
        </div>
      </div>
    </div>
  );
}

export default App;
