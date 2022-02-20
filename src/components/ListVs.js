import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import "./ListVs.css";
const ListVs = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/currency")
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
  } else {
    var cur = items[0]?.vs;
    return (
      <ListGroup flush className="col-lg-6" lang="en">
        <h1 className="left">
          {items[0]?.name} <span className="vs">vs</span>
        </h1>
        {/* { 
        Object.keys(cur).forEach((a) => {
          <ListGroupItem className="left">
            <span>{cur.a}</span> {a}
          </ListGroupItem>;
        })} */}
        <Button color="success" outline>
          load more
        </Button>
      </ListGroup>
    );
  }
};

export default ListVs;
