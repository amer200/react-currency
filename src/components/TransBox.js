import { Form, FormGroup, Col, Input } from "reactstrap";
import AdArea from "./AdArea";
import "./TransBox.css";
const TransBox = () => {
  return (
    <Form className="col-lg-6 form">
      <FormGroup row>
        <Col sm={10}>
          <Input
            bsSize="lg"
            id="curreny-from"
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
          <Input id="exampleSelect" name="select" type="select">
            <option>EUR</option>
            <option>EG</option>
            <option>SYP</option>
            <option>usd</option>
          </Input>
        </Col>
      </FormGroup>
      <AdArea />
    </Form>
  );
};
export default TransBox;
