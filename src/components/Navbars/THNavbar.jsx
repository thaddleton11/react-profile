import React, {Component} from "react";

import {Button, Col, Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavItem, NavLink, Row, UncontrolledDropdown, UncontrolledTooltip} from "reactstrap"
import {Link} from "react-router-dom";
import * as Scroll from 'react-scroll';

let Slink = Scroll.Link;


export default class THNavbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapseOpen: false,
            collapseOut: false,
            color: 'navbar-transparent'
        };
    }


    render() {
        const {collapseOpen, collapseOut, onCollapseExited, onCollapseExiting, scrollToDownload, toggleCollapse} = this.state;

        return (
            <Navbar className={"fixed-top"} expand={'lg'}>
                <Container>

                    <div className="navbar-translate">
                        <NavbarBrand to="/" tag={Link} id="navbar-brand">
                            <span>Tom Haddleton<i className={'fab fa-circle-thin'} /></span>

                            <span className={'d-none d-sm-block'}>Web and Mobile Developer</span>
                        </NavbarBrand>
                        <button
                            aria-expanded={collapseOpen}
                            className="navbar-toggler navbar-toggler"
                            onClick={toggleCollapse}
                        >
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                    </div>
                    <Collapse
                        className={"justify-content-end " + collapseOut}
                        navbar
                        isOpen={collapseOpen}
                        onExiting={onCollapseExiting}
                        onExited={onCollapseExited}
                    >
                        <div className="navbar-collapse-header">
                            <Row>
                                <Col className="collapse-brand" xs="6">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        Tom Haddleton<i className={'fab fa-circle-thin'} />
                                    </a>
                                </Col>
                                <Col className="collapse-close text-right" xs="6">
                                    <button
                                        aria-expanded={collapseOpen}
                                        className="navbar-toggler"
                                        onClick={toggleCollapse}
                                    >
                                        <i className="tim-icons icon-simple-remove" />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav navbar>
                            <NavItem className="p-0">
                                <NavLink
                                    data-placement="bottom"
                                    href="github"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="GitHub Repo"
                                >
                                    <i className="fab fa-github" />
                                    <p className="d-lg-none d-xl-none">GitHub</p>
                                </NavLink>
                            </NavItem>

                            <NavItem className="p-0">
                                <NavLink
                                    data-placement="bottom"
                                    href="linkedin"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Visit my LinkedIn"
                                >
                                    <i className="fab fa-linkedin" />
                                    <p className="d-lg-none d-xl-none">LinkedIn</p>
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    data-toggle="dropdown"
                                    href="#pablo"
                                    nav
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="fa fa-cogs d-lg-none d-xl-none" />
                                    Menu
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-with-icons">
                                    <Slink to="about" spy={true} smooth={true} offset={-50}>
                                        <DropdownItem tag={'div'}>
                                            <i className="tim-icons icon-paper" />
                                            About

                                        </DropdownItem>
                                    </Slink>
                                    <Slink to="skills" spy={true} smooth={true} offset={-50}>
                                        <DropdownItem tag={'div'}>
                                            <i className="tim-icons icon-laptop" />
                                            Skills
                                        </DropdownItem>
                                    </Slink>
                                    <Slink to="examples" spy={true} smooth={true} offset={-50}>
                                        <DropdownItem tag={'div'}>
                                            <i className="tim-icons icon-pencil" />
                                            Examples
                                        </DropdownItem>
                                    </Slink>
                                    <Slink to="employment" spy={true} smooth={true} offset={-50}>
                                        <DropdownItem tag={'div'}>
                                            <i className="tim-icons icon-bank" />
                                            Employment
                                        </DropdownItem>
                                    </Slink>
                                    <Slink to="qualifications" spy={true} smooth={true} offset={-50}>
                                        <DropdownItem tag={'div'}>
                                            <i className="tim-icons icon-trophy" />
                                            Qualifications
                                        </DropdownItem>
                                    </Slink>
                                    <Slink to="api" spy={true} smooth={true} offset={-50}>
                                        <DropdownItem tag={'div'}>
                                            <i className="tim-icons icon-planet" />
                                            Near Earth Objects
                                        </DropdownItem>
                                    </Slink>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>

                </Container>
            </Navbar>
        );
    }

}