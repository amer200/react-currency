import { useState, useEffect } from "react";
import { Form, FormGroup, Col, Input } from "reactstrap";
import AdArea from "./AdArea";
import "./TransBox.css";
const TransBox = () => {
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
    return <div>error : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>....loading</div>;
  } else if (items.vs) {
    const vsKeys = Object.keys(items.vs);
    const transHandler = () => {
      const fromVal = document.getElementById("currency-from");
      const toVal = document.getElementById("currency-t");
      const toCurr = document.getElementById("s-to");
      const price = items.vs[toCurr.value];
      return toVal.value = price * fromVal.value;
    };
    return (
      <Form className="col-lg-6 form">
        <FormGroup row>
          <Col sm={10}>
            <Input
              onChange={transHandler}
              bsSize="lg"
              id="currency-from"
              name="curreny-from"
              placeholder="0.0 EUR"
              type="number"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={10}>
            <Input
              id="currency-t"
              name="currency-t"
              placeholder="0.0"
              type="number"
            />
          </Col>
        </FormGroup>
        <FormGroup className="select">
          <Col sm={10}>
            <Input id="s-to" name="s-to" type="select">
              {
                vsKeys.map((item, id) => {
                  return <option key={id}>{item}</option>;
                })
                // items.forEach((i) => {
                //   console.log(i)
                //   return <option>{i.vs.AED}</option>;
                // })
              }
            </Input>
          </Col>
        </FormGroup>
        <AdArea />
      </Form>
    );
  } else {
    return null;
  }
};
export default TransBox;
