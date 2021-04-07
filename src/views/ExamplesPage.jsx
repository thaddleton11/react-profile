import React, {Component} from "react";
import THNavbar from "../components/Navbars/THNavbar";
import THHeader from "../components/PageHeader/THHeader";
import Footer from "../components/Footer/Footer";
import About from "./HomePage/About";
import Skills from "./HomePage/Skills";
import {Col, Container, Row} from "reactstrap";
import Examples from "./HomePage/Examples";
import Employment from "./HomePage/Employment";
import Qualifications from "./HomePage/Qualifications";
import Box from "../components/Examples/Box";



export default class ExamplesPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.classList.toggle("index-page");
    }

    componentWillUnmount() {
        document.body.classList.toggle("index-page");
    }


    render() {
        return (
            <>
            <THNavbar />
            <div className={'wrapper'}>
                <div className={'main'}>
                    <section className={'section section-examples'}>
                        <Container>
                            <Row>
                                <Col lg={6}>
                                    <Box
                                        title={'Glasgows Guest Check In'}
                                        number={'04'}
                                        desc={'Using iPads, staff and clients can check-in arriving conference attendees.'}
                                        href={'/examples/check-in'}
                                        btnname={'View'} />
                                </Col>
                                <Col lg={6}>
                                    <Box
                                        title={'This Website'}
                                        number={'03'}
                                        desc={'Take a look at what was involved in making this React JS site.'}
                                        href={'/examples/this'}
                                        btnname={'View'} />
                                </Col>

                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <Box
                                        title={'Event App'}
                                        number={'02'}
                                        desc={'A bespoke mobile web app created using HTML, Java and Swift.'}
                                        href={'/examples/glasgows-app'}
                                        btnname={'See more'} />
                                </Col>
                                <Col lg={6}>
                                    <Box
                                        title={'Guest Check In'}
                                        number={'01'}
                                        desc={'Using iPads, staff and clients can check-in arriving conference attendees.'}
                                        href={'/examples/check-in'}
                                        btnname={'See more'} />
                                </Col>
                            </Row>
                        </Container>

                    </section>

                </div>
            </div>
            <Footer />
            </>
            )
    }



}