import React, {Component} from "react";
import {Container} from "reactstrap";


export default class THHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-header header-filter">
                <div className="squares square1" />
                <div className="squares square2" />
                <div className="squares square3" />
                <div className="squares square4" />
                <div className="squares square5" />
                <div className="squares square6" />
                <div className="squares square7" />
                <Container>
                    <div className="content-center brand">
                        <h1 className="h1-seo">Tom Haddleton</h1>
                        <h3 className="">
                            Full Stack Web Developer<br/>
                            Android And iOS Web Applications
                        </h3>
                    </div>
                </Container>
            </div>
        );

    }

}