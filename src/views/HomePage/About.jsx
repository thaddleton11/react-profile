import React, {Component} from "react";
import {Col, Container, Row, Table} from "reactstrap";


export default class About extends Component{

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <section className={'section section-lg'} id={'about'}>
                    <Container>
                        <hr className={'line-success'} />
                        <h2 className={'text-white'}>
                            A little about me
                        </h2>
                        <div className={'content-center'}>
                            <Row className={'row-grid justify-content-between align-items-center text-left '}>
                                <Col lg={'6'} md={'6'}>
                                    <p className={'text-white profile-text'}>
                                        Professional, motivated and skilled OOP PHP developer.
                                        Has considerable knowledge and experience of working on
                                        and creating bespoke web-based system and extending
                                        existing web projects. This continues into developing
                                        interactive native and web-based applications for Android
                                        and iOS devices.
                                    </p>
                                    <p className={'text-white profile-text'}>
                                        Able to manage Debian based Linux servers and web hosting
                                        on Apache2. Utilise NodeJS and Javascript packages to create
                                        useful and creative technologies. Seeking suitable developer
                                        role to apply my knowledge and find career within a new,
                                        exciting company.
                                    </p>
                                </Col>
                                <Col lg="6" md="6">
                                    <img
                                        alt="HTML Code"
                                        className="img-fluid"
                                        src={require('assets/img/code-sketch.png').default}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Container>
            </section>

        );
    }

}