import { ListGroup, ListGroupItem } from "reactstrap";
import "./ListVs.css";
const ListVs = () => {
  return (
    <ListGroup flush className="col-lg-6" lang="en">
      <h1 className="white left">Eur <span className="vs">vs</span></h1>
      <ListGroupItem className="left">25 = eg</ListGroupItem>
      <ListGroupItem className="left">25 = syp</ListGroupItem>
      <ListGroupItem className="left">25 = usd</ListGroupItem>
    </ListGroup>
  );
};

export default ListVs;
