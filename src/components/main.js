import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/NavBar";
import ListVs from "../components/ListVs";
import TransBox from "../components/TransBox";
import AdArea from "../components/AdArea";
import Footer from "../components/footer";
import "../app.css";

function Main(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { curr } = useParams();
  useEffect(() => {
    fetch("https://curr-api-2.herokuapp.com/currency")
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>{error.message}</div>;
  } else if (!isLoaded) {
    return <div>...loading</div>;
  } else if (items[0]) {
    let currs = [];
    items.forEach((i) => {
      currs.push(i.name);
    });
    return (
      <div>
        <Nav currs={currs} />
        <div className="container">
          <div className="row">
            <ListVs curr={curr} />
            <TransBox curr={curr} />
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
  } else {
    return null;
  }
}

export default Main;
