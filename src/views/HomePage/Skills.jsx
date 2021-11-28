import React, {Component} from "react";
import {Card, CardBody, CardHeader, CardTitle, Col, Container, Row, Table} from "reactstrap";
import {Line} from "react-chartjs-2";


export default class Skills extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <section className={'section section-lg'} id={'skills'}>
                <div className={'content-center'}>
                    {/*<Container>
                        <Row>
                            <Col className="text-left" sm="6">
                                <hr className="line-info" />
                                <h2 className={'text-white'}>Skills</h2>
                            </Col>
                        </Row>
                        <Table>
                            <tbody>
                            <tr>
                                <td>Web Development</td>
                                <td><span className={'text-white'}>Fluent in OOP PHP 5.6/7.4, MySQL 5.6, HTML5, JavaScript, jQuery, CSS3.</span></td>
                            </tr>
                            <tr>
                                <td>Frameworks/Libraries</td>
                                <td><span className={'text-white'}>Proficient in Slim 2/3/4, NodeJS/Express, Code Igniter 2, Twig templating. Knowledgeable of Laravel 5, Eloquent, ReactJS. Familiar with Doctrine 2, Blade, Socket IO, PusherJS, SwiftMail, mPDF.</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Mobile Applications</td>
                                <td><span className={'text-white'}>Good knowledge of Java for Android, Swift 5/Objective C for iOS, PhoneGap/Cordova and the Android and Apple App Stores</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Server Software</td>
                                <td>
                                    <span className={'text-white'}>Clear understanding of Apache, phpMyAdmin, Samba, web hosting on Debian based operating systems. Experience of cPanel and WHM</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Version Control</td>
                                <td><span className={'text-white'}>Skilled with Git (command line), GitHub and Bit Bucket</span></td>
                            </tr>
                            <tr>
                                <td>Development Software</td>
                                <td><span className={'text-white'}>PHPStorm IDE, Android Studio, XCode, GIMP and SourceTree</span></td>
                            </tr>
                            <tr>
                                <td>Online Services</td>
                                <td><span className={'text-white'}>Good experience with Mandrill, SagePay, SEO, Google Firebase and other web APIs, Google Analytics, Groups and Mail administration, Teamwork project management, domain hosting</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Operating Systems</td>
                                <td><span className={'text-white'}>Familiar with Microsoft Windows, Debian based Linux systems, OSX</span></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Container>*/}
                    <Container>
                        <Row>
                            <Col className="text-left" sm="6">
                                <hr className="line-info" />
                                <h2 className={'text-white'}>Skills</h2>
                            </Col>
                        </Row>
                        <Row className={'justify-content-center'}>
                            <Col lg={3} md={4}>
                                <div className={'info'}>
                                    <div className="icon icon-primary">
                                        <i className="fa fa-globe" />
                                    </div>
                                    <h4 className={'info-title'}>Web Development</h4>
                                    <hr className={'line-primary'} />
                                    <p>Fluent in OOP PHP 5.6/7.4, MySQL 5.6, HTML5, JavaScript, jQuery, CSS3.</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4}>
                                <div className={'info'}>
                                    <div className="icon icon-primary">
                                        <i className="fa fa-book" />
                                    </div>
                                    <h4 className={'info-title'}>Frameworks / Libraries</h4>
                                    <hr className={'line-primary'} />
                                    <p>Proficient in Slim 2/3/4, NodeJS/Express, Code Igniter 2, Twig templating. Knowledgeable of Laravel 5, Eloquent, ReactJS. Familiar with Doctrine 2, Blade, Socket IO, PusherJS, SwiftMail, mPDF.</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4}>
                                <div className={'info'}>
                                    <div className="icon icon-primary">
                                        <i className="fa fa-mobile" />
                                    </div>
                                    <h4 className={'info-title'}>Mobile Applications</h4>
                                    <hr className={'line-primary'} />
                                    <p>Good knowledge of Java for Android, Swift 5/Objective C for iOS, PhoneGap/Cordova and the Android and Apple App Stores</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4}>
                                <div className={'info'}>
                                    <div className="icon icon-primary">
                                        <i className="fa fa-server" />
                                    </div>
                                    <h4 className={'info-title'}>Server Software</h4>
                                    <hr className={'line-primary'} />
                                    <p>Clear understanding of Apache, phpMyAdmin, Samba, web hosting on Debian based operating systems. Experience of load balancers, virtual machines, cPanel and WHM</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4}>
                                <div className={'info'}>
                                    <div className="icon icon-primary">
                                        <i className="fa fa-code-branch" />
                                    </div>
                                    <h4 className={'info-title'}>Version Control</h4>
                                    <hr className={'line-primary'} />
                                    <p>Skilled with Git (command line), GitHub and Bit Bucket</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4}>
                                <div className={'info'}>
                                    <div className="icon icon-primary">
                                        <i className="fa fa-window-restore  " />
                                    </div>
                                    <h4 className={'info-title'}>Development Software</h4>
                                    <hr className={'line-primary'} />
                                    <p>PHPStorm IDE, Android Studio, XCode, GIMP, Postman and SourceTree</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4}>
                                <div className={'info'}>
                                    <div className="icon icon-primary">
                                        <i className="tim-icons icon-settings" />
                                    </div>
                                    <h4 className={'info-title'}>Online Services</h4>
                                    <hr className={'line-primary'} />
                                    <p>Good experience with Mandrill, SagePay, SEO, Google Firebase and other web APIs, Google Analytics, Groups and Mail administration, Teamwork project management, domain hosting</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4}>
                                <div className={'info'}>
                                    <div className="icon icon-primary">
                                        <i className="fa fa-mouse-pointer" />
                                    </div>
                                    <h4 className={'info-title'}>Operating Systems</h4>
                                    <hr className={'line-primary'} />
                                    <p>Very familiar with Microsoft Windows, Debian based Linux systems, OSX</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

        );
    }

}