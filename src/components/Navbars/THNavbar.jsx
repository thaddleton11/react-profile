import React, {Component} from "react";

import {
    Button,
    Col,
    UncontrolledCollapse,
    Collapse,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Row,
    UncontrolledDropdown,
    UncontrolledTooltip
} from "reactstrap"
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

        const toggleCollapse = () => {
            // document.documentElement.classList.toggle("nav-open");
            this.setState({
                collapseOpen: !this.state.collapseOpen
            });
        };
        const onCollapseExiting = () => {
            this.setState({
                collapseOut: true
            });
        };
        const onCollapseExited = () => {
            this.setState({
                collapseOut: false
            });
        };

        return (
            <Navbar className={"fixed-top"} expand={'lg'}>
                <Container>

                    <div className="navbar-translate">
                        <NavbarBrand to="/" tag={Link} id="navbar-brand">
                            <span>Tom Haddleton<i className={'fab fa-circle-thin'} /></span>

                            <span className={'d-none d-sm-block'}>Web and Mobile Developer</span>
                        </NavbarBrand>
                        <button
                            aria-expanded={this.state.collapseOpen}
                            onClick={toggleCollapse}
                            className="navbar-toggler"
                            id="navbarNavDropdown"
                            type="button"
                        >
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                    </div>
                    <UncontrolledCollapse navbar toggler="#navbarNavDropdown" className={"justify-content-end"}>
                        <Nav navbar>
                            <button
                                aria-expanded={this.state.collapseOpen}
                                onClick={toggleCollapse}
                                className="navbar-toggler text-white float-right"
                                id="navbarNavDropdown"
                                type="button"
                            >
                                <i className={'fa fa-times'} />
                            </button>
                            <NavItem className="p-0">
                                <NavLink
                                    data-placement="bottom"
                                    href="https://github.com/thaddleton11"
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
                                    href="https://www.linkedin.com/in/tom-haddleton-34a70579"
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
                                    aria-expanded={false}
                                    aria-haspopup={true}
                                >
                                    <i className="fa fa-cogs d-lg-none d-xl-none" />
                                    Menu
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-with-icons" aria-labelledby="navbarDropdownMenuLink">
                                    <DropdownItem
                                        href="#about"
                                        className={"navbar-toggler"}
                                        >
                                        Hello
                                    </DropdownItem>
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
                    </UncontrolledCollapse>


                </Container>
            </Navbar>
        );
    }

}