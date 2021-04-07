import {Component} from 'react';
import {Col, Container, Row} from "reactstrap";


export default class Employment extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <section className={'section section-lg'} id={'employment'}>

                <Container className={'employment'}>
                    <hr className={'line-success'} />
                    <h2 className={'text-white'}>
                        Employment
                    </h2>
                    <Row>
                        <Col md={6}>
                            <h3 className={'profile-title'}>Developer — Glasgows Limited, Leyland</h3>
                            <h5 className={'text-on-back'}>July 2013 — Current</h5>
                            <p className={'profile-description'}>
                                <ul className={'fa-ul'}>
                                    <li><span className={'fa-li'}><i className={'far fa-hand-point-right'}></i></span>Maintaining and developing an in-house, bespoke booking and interactive delegate software, based on PHPs Slim 2, 3 and 4 frameworks.</li>
                                    <li><span className={'fa-li'}><i className={'far fa-hand-point-right'}></i></span>Creating the Android and iOS based native mobile web applications.
                                    </li>
                                    <li><span className={'fa-li'}><i className={'far fa-hand-point-right'}></i></span>Producing websites, mobile apps and event technology for events using NodeJS/Express and jQuery.
                                    </li>
                                    <li><span className={'fa-li'}><i className={'far fa-hand-point-right'}></i></span>Self-managing and delivering projects effectively.
                                    </li>
                                    <li><span className={'fa-li'}><i className={'far fa-hand-point-right'}></i></span>Working with the Digital Manager and other senior staff in producing new features for both the booking software and mobile applications.
                                    </li>
                                    <li><span className={'fa-li'}><i className={'far fa-hand-point-right'}></i></span>Supporting and reviewing junior developers’ projects.
                                    </li>
                                    <li><span className={'fa-li'}><i className={'far fa-hand-point-right'}></i></span>Responsible for several legacy systems, these include Code Ignitor 2, Laravel, Smarty, AngularJS, SugarCRM and PyroCMS based projects.
                                    </li>
                                    <li><span className={'fa-li'}><i className={'far fa-hand-point-right'}></i></span>Other responsibilities include domain hosting, SSL certificates, renewing paid for IT services or software, Google Groups for email, website Apache configurations, technical and non technical documentation, monitoring or taking database and code backups.
                                    </li>
                                </ul>
                            </p>

                        </Col>
                        <Col className={'d-flex align-items-center'}>
                            <img className={'img-fluid'} src={require('assets/img/desk-sketch.png').default} alt={'Desk image'} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className={'d-flex align-items-center'}>
                            <img className={'img-responsive'} src={require('assets/img/js-sketch.png').default} alt={'JS desk'} />
                        </Col>
                        <Col md={6}>
                            <h2 className={'profile-title'}>Project Associate — Knowledge Business Centre, Lancaster University</h2>
                            <h5 className={'text-on-back'}>October 2010 — July 2013</h5>
                            <p className={'profile-description'}>
                                <ul className={'fa-ul'}>
                                    <li><span className={'fa-li'}><i className={'far fa-hand-point-right'}></i></span>Produced end to end software solution for a wide range of private sector companies.
                                    </li>
                                    <li><span className={'fa-li'}><i className={'far fa-hand-point-right'}></i></span>These have included various PHP based web systems, e-commerce, Google Maps integration and mobile applications.
                                    </li>
                                    <li><span className={'fa-li'}><i className={'far fa-hand-point-right'}></i></span>Created consultancy appraisals providing recommendation for updating networking and workstation equipment.
                                    </li>
                                    <li><span className={'fa-li'}><i className={'far fa-hand-point-right'}></i></span>Also for software development, listing programming languages and approaches.
                                    </li>
                                    <li><span className={'fa-li'}><i className={'far fa-hand-point-right'}></i></span>The role covered the initial project meeting, listing requirements, design, development and testing through to the final handover to the client, providing support post release. All of which was managed by myself, supported by a Project Manager.
                                    </li>

                                </ul>
                            </p>

                        </Col>
                    </Row>
                </Container>

            </section>
        )
    }


}