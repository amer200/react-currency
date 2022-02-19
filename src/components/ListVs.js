import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import "./ListVs.css";
const ListVs = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/currency")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>{error}</div>;
  } else if (!isLoaded) {
    return <div>...loading</div>;
  } else {
    return (
      <ListGroup flush className="col-lg-6" lang="en">
        <h1 className="left">
          {items[0].name} <span className="vs">vs</span>
        </h1>
        {items[0].vs.forEach((v) => {
          <ListGroupItem className="left">
            <span>25</span> usd
          </ListGroupItem>;
        })}
        <Button color="success" outline>
          load more
        </Button>
      </ListGroup>
    );
  }
};

export default ListVs;
