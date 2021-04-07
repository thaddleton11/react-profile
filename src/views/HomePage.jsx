import React, {Component} from "react";
import THNavbar from "../components/Navbars/THNavbar";
import THHeader from "../components/PageHeader/THHeader";
import Footer from "../components/Footer/Footer";
import About from "./HomePage/About";
import Skills from "./HomePage/Skills";
import {Col, Row, Toast, ToastBody, ToastHeader} from "reactstrap";
import Examples from "./HomePage/Examples";
import Employment from "./HomePage/Employment";
import Qualifications from "./HomePage/Qualifications";
import API from "./HomePage/API";



export default class HomePage extends Component {

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
                <THHeader />
                <div className={'main'}>
                    <About />
                    <img
                        alt="..."
                        className="path"
                        src={require("assets/img/path3.png").default}
                    />
                    <Skills />
                    <Examples />
                    <Employment />
                    <Qualifications />
                    <API />
                </div>
            </div>
            <Footer />
            </>
            )
    }



}