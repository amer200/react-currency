import AdArea from "./AdArea";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="col-lg-12">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <AdArea />
          </div>
        </div>
        <div className="row">
          <div className="made col-12">
            <p className="lead">
              made with &#9829; by{" "}
              <a href="https://amermostafa.netlify.app">AMER MOSTAFA</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
