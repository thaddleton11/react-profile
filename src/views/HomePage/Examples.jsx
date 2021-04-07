import {Component} from 'react'
import {Button, Col, Container, Row} from "reactstrap";


export default class Examples extends Component{

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <section className={'section'} id={'examples'}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="8" md="12" className={'text-center'}>
                            <h2 className="title text-white">Example Projects</h2>
                            <h4 className="description">
                                Visit my GitHub and see some examples of my projects and code
                            </h4>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <div className={'blur-hover'}>
                            <a href={'https://github.com/thaddleton11'} target={'_blank'}>
                                <img
                                    alt={'See examples'}
                                    className={'blur-item examples-img'}
                                    src={require("assets/img/technology.jpg").default}
                                />
                                <span className="blur-hidden h2 text-black"><strong>Visit GitHub </strong></span>
                            </a>
                    </div>

                </Container>

            </section>
        )
    }

}