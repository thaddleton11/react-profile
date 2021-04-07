import {Component} from 'react';
import axios from 'axios';
import {Alert, Col, Container, FormGroup, Input, Label, Row, Spinner, Toast, ToastBody, ToastHeader} from "reactstrap";
import moment from "moment";
import LoadingOverlay from "../../components/LoadingOverlay";

export default class API extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: null,
            neObjects: null
        };

        this.fetchNASA = this.fetchNASA.bind(this);
        this.resetDate = this.resetDate.bind(this);
        this.handleDate = this.handleDate.bind(this);

        this.resetDate();
        this.fetchNASA();
    }


    resetDate() {
        this.state.date = moment().format('YYYY-MM-DD');
        /*this.setState({
            date: moment().format('YYYY-MM-DD')
        })*/
    }

    fetchNASA() {
        const self = this;

        /*      self.setState({
                  neObjects: null
              })*/

        self.setState({
            loading: true
        })

        setTimeout((self) => {
            axios.get(
                'https://api.nasa.gov/neo/rest/v1/feed',
                {
                    params: {
                        api_key: 'nbg1GjDci7mzSNSbM5kP2eTMm258FVXSCH7fQRQX',
                        feedtype: 'json',
                        version: '1.0',
                        start_date: this.state.date,
                        end_date: this.state.date
                    }
                }
            )
                .then(function (response) {
                    console.log(response);
                    console.log(response.status);

                    if (response.status == "200") {
                        let data = response.data.near_earth_objects;
                        let objs = data[Object.keys(data)[0]]
                        // this.state.neObjects = objs.slice(0,3);
                        self.setState({
                            neObjects: objs.slice(0, 3),
                            date_error: false
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
                .then(function () {
                    self.setState({
                        loading: false

                    })
                })
        }, 800, self)


    }

    handleDate(event) {
        let date = event.target.value;

        console.log(date);

        let parsed = moment(date);
        let now = moment();

        if (!parsed.isValid() || parsed > now) {
            console.log('date error')
            this.setState({
                date_error: true
            })
        } else {
            this.setState({
                date: parsed.format('yyyy-MM-DD')
            });
            this.fetchNASA()
        }

    }


    nearEarthObject(props) {

        let min = props.estimated_diameter.meters.estimated_diameter_min;
        min = min.valueOf();


        return (
            <Col>
                <div className={'card card-coin card-plain'}>
                    <div className={'card-body'}>
                        <h3 className={'text-center'}>{props.name}</h3>
                        <p><span className={'text-white'}>Estimated Diameter (meters)</span><br />
                            Min: {min.toFixed(2)} m<br />
                            Max: {props.estimated_diameter.meters.estimated_diameter_max.toFixed(2)} m
                        </p>
                        <p>
                            <span className={'text-white'}>Closest Approach</span><br />
                            Date: {moment(props.close_approach_data[0].close_approach_date, "YYYY-MM-DD").format("DD/MM/YYYY")}<br />
                            Miss distance: {parseInt(props.close_approach_data[0].miss_distance.miles)} miles<br />
                            Orbiting body: {props.close_approach_data[0].orbiting_body}
                        </p>
                        <h4 className={'title'}>
                            Hazardous
                        </h4>
                        <Col className={'text-center'}>{props.is_potentially_hazardous_asteroid
                            ?
                            <i className={'fa fa-check fa-3x text-center'} />
                            :
                            <i className={'fa fa-times fa-3x text-danger'} />
                        }
                        </Col>
                    </div>
                </div>
            </Col>
        )
    }


    render() {
        return (
            <section className={'section section-lg'} id={'api'}>
                <Container>
                    <hr className={'line-success'} />
                    <h2 className={'text-white'}>
                        Near earth objects
                    </h2>
                    <p className={'mb-4'}>See the nearest Asteroids passing earth today via NASAs Near Earth Object web service. Use the date picker to set your own date.</p>
                    <Row>
                        {this.state.neObjects &&
                        this.state.neObjects.map(e => (
                            this.nearEarthObject(e)
                        ))
                        }


                        {/*{this.state.neObjects ?
                            this.state.neObjects.map(e => (
                                this.nearEarthObject(e)
                            ))
                            :
                            <div className="d-flex justify-content-center m-4">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        }*/}

                        {this.state.loading &&
                        <LoadingOverlay show />
                        }
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label>Enter your own date</Label>
                                <Input
                                    type={'date'}
                                    value={this.state.date}
                                    onChange={this.handleDate}
                                    onClick={() => this.setState({date_error: false})}
                                    id={'earth_date'}
                                />
                            </FormGroup>
                            {this.state.date_error &&
                            <Alert color={'warning'}>
                                The date must be today or in the past
                            </Alert>
                            }

                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }

}