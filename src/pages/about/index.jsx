import React from "react";
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


export const About = () => {
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
    willChange: "transform"
  };

  const iframeStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    border: "none",
    padding: 0,
    margin: 0
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-5 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-2 title">A propos de moi</h1>
            <Popup
                trigger={<span className="button hover-this"> DOWNLOAD MY RESUME </span>}
                modal
                closeOnDocumentClick
            >
              {close => (
                  <div className="custom-modal">
                    <p>SCROLL DOWN</p>
                    <div style={divStyle}>
                      <iframe loading="lazy"
                              style={iframeStyle}
                              src="https://www.canva.com/design/DAGBWwoDXik/S0qAwj9rnl6eJVDtm8bGMw/view?embed"
                              allowFullScreen="allowfullscreen" allow="fullscreen">
                      </iframe>
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
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
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
    </HelmetProvider>
  );
};
