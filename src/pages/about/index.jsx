import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import Popup from "reactjs-popup";
import { IoMdClose } from "react-icons/io";
import transition from "../../transition.jsx";

const About = () => {
  const divStyle = {
    position: "relative",
    width: "100%",
    height: 0,
    paddingTop: "141.4286%",
    paddingBottom: 0,
    boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
    marginTop: "25em",
    marginBottom: "0.9em",
    overflow: "hidden",
    borderRadius: "8px",
    willChange: "transform",
  };

  const iframeStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    border: "none",
    padding: 0,
    margin: 0,
  };

  return (
    <HelmetProvider>
      <div className="custom-shape-divider-top-1712911821">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 margin-topp pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-2 title">A propos de moi</h1>
            <Popup
              trigger={
                <span className="button hover-this"> DOWNLOAD MY RESUME </span>
              }
              modal
              closeOnDocumentClick
            >
              {(close) => (
                <div className="custom-modal">
                  <p>SCROLL DOWN</p>
                  <div style={divStyle}>
                    <iframe
                      loading="lazy"
                      style={iframeStyle}
                      src="https://www.canva.com/design/DAGBWwoDXik/S0qAwj9rnl6eJVDtm8bGMw/view?embed"
                      allowFullScreen="allowfullscreen"
                      allow="fullscreen"
                    ></iframe>
                  </div>
                  <a href="public/fill/cv.pdf" title="pdf" download>
                    <button className="download-btn">Download</button>
                  </a>
                  <IoMdClose className="close-button" onClick={close}>
                    &times;
                  </IoMdClose>
                </div>
              )}
            </Popup>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col className="d-flex align-items-center aboutMeText">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Mes stages de BTS</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody className="tablee">
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Mes Compétences</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
      <div className="custom-shape-divider-bottom-1712912114">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </HelmetProvider>
  );
};

export default transition(About);
