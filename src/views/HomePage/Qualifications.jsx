import {Component} from "react";
import {Col, Row, Card, CardBody, Container} from "reactstrap";


export default class Qualifications extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <section className={'section section-lg qualifications'} id={'qualifications'}>
                <Container>
                    <hr className={'line-primary'} />
                    <h2 className={'text-white'}>
                        Qualifications
                    </h2>
                    <Row className={'justify-content-center'}>
                        <Col>
                            <Card className={'card-stats'}>
                                <CardBody className={'justify-content-center'}>
                                    <Row>
                                        <Col md={4} className={'d-flex justify-content-center align-items-center'}>
                                            <div className="icon-big text-center icon-warning">
                                                <i className="fas fa-graduation-cap text-primary"></i>
                                            </div>
                                        </Col>
                                        <Col md={8} className={'d-flex align-items-center'}>
                                            <h4>Computer and Multimedia Systems BSc (Hons)
                                                <br/><small className={'text-muted'}> University of Liverpool — 2005-2009</small></h4>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className={'card-stats'}>
                                <CardBody className={'justify-content-center'}>
                                    <Row>
                                        <Col md={4} className={'d-flex justify-content-center align-items-center'}>
                                            <div className="icon-big text-center icon-warning">
                                                <i className="fas fa-graduation-cap text-primary"></i>
                                            </div>
                                        </Col>
                                        <Col md={8} className={'d-flex align-items-center'}>
                                            <h4>Advanced Vocational ICT and A-Level Mathematics
                                                <br/><small className={'text-muted'}> Runshaw College, Leyland — 2003-2005</small></h4>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className={'card-stats'}>
                                <CardBody>
                                    <Row>
                                        <Col md={4} className={'d-flex justify-content-center align-items-center'}>
                                            <div className="icon-big text-center icon-warning">
                                                <i className="fas fa-graduation-cap text-primary"></i>
                                            </div>
                                        </Col>
                                        <Col md={8}>
                                            <h4>Configuring and Troubleshooting a Windows Server 2008 Network Infrastructure (6421)
                                                <br/><small className={'text-muted'}> Microsoft Training — 2012</small></h4>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </section>
        );
    }

}