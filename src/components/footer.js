import { Badge } from "reactstrap";
import AdArea from "./AdArea";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="col-lg-12">
      <div className="container">
        <div className="row">
          <div className="logo col-lg-3">logo</div>
          <div className="col-lg-3">
            <div>
              <Badge color="dark">EUR</Badge>
            </div>
          </div>
          <div className="col-lg-6">
            <AdArea />
          </div>
        </div>
        <div className="row">
            <div className="made">
                <p className="lead">made with &#9829; by <a href="/">AMER MOSTAFA</a></p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
