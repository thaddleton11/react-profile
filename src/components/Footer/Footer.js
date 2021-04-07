/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md="2">
                        <img src={require('assets/img/orange-logo-squ-trans.png').default} className={'img-fluid'} />
                    </Col>
                    <Col></Col>
                    <Col md="3">
                        <Nav>
                            <NavItem>
                                <NavLink to="/" tag={Link}>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/landing-page" tag={Link}>
                                    Examples
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col md="3">
                        <Nav>
                            <NavItem>
                                <NavLink href="https://creative-tim.com/contact-us?ref=blkdsr-footer">
                                    Example 1
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://creative-tim.com/about-us?ref=blkdsr-footer">
                                    Example 2
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://creative-tim.com/blog?ref=blkdsr-footer">
                                    Example 3
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://opensource.org/licenses/MIT">
                                    Example 4
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col md="3">
                        <h3 className="title">See more of me:</h3>
                        <div className="btn-wrapper profile">
                            <Button
                                className="btn-icon btn-neutral btn-round btn-simple"
                                color="default"
                                href="https://twitter.com/creativetim"
                                id="tooltip622135962"
                                target="_blank"
                            >
                                <i className="fab fa-github" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip622135962">
                                GitHub
                            </UncontrolledTooltip>
                            <Button
                                className="btn-icon btn-neutral btn-round btn-simple"
                                color="default"
                                href="https://www.facebook.com/creativetim"
                                id="tooltip230450801"
                                target="_blank"
                            >
                                <i className="fab fa-linkedin" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip230450801">
                                LinkedIn
                            </UncontrolledTooltip>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
