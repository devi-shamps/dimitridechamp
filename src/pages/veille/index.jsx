import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option.js";
import { Col, Container, Row } from "react-bootstrap";

export const Veille = () => {
    const iframeContainerStyle = {
        position: "relative",
        width: "100%",
        height: 0,
        paddingTop: "56.2500%",
        paddingBottom: 0,
        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
        marginTop: "1.6em",
        marginBottom: "0.9em",
        overflow: "hidden",
        borderRadius: "15px",
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
        margin: 0
    };
    const pStyle = {
        textAlign: "center",
        color: "#6c757d",
        fontSize: "0.8em",
        marginTop: "0.5em",

    };

    return (
        <HelmetProvider>
            <section id="home" className="home">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Veille Informatioque | {meta.title} </title>{" "}
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Container >
                    <Row>
                        <Col md={12}>
                            <div style={iframeContainerStyle}>
                                <iframe
                                    loading="lazy"
                                    style={iframeStyle}
                                    src="https://www.canva.com/design/DAGAhSVXn5c/k6bE1WFbCd2Ztu6lG1YQPw/view?embed"
                                    allow="fullscreen"
                                ></iframe>
                            </div>
                            <p style={pStyle}>Click pour passer les diapo</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </HelmetProvider>
    );
};
