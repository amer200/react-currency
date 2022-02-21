import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./ListVs.css";
const ListVs = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://curr-api-2.herokuapp.com/currency/EUR")
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
  } else if (items.vs) {
    const myVsKey = () => Object.keys(items?.vs);
    return (
      <ListGroup flush className="col-lg-6" lang="en">
        <h1 className="left">
          {items.name} <span className="vs">vs</span>
        </h1>
        {myVsKey().map((k, id) => {
          return (
            <ListGroupItem className="left" key={id}>
              <span>{items.vs[k]}</span> {k}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }else {
    return ( <div>no data</div>)
  }
};

export default ListVs;
