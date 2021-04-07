import {Component} from 'react';
import {Button} from "reactstrap";


export default class Box extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="profile-page">
                <h1 className="profile-title text-white text-left">{this.props.title}</h1>
                <h5 className="text-on-back">{this.props.number}</h5>
                <p className="profile-description">{this.props.desc}</p>
                <div className="btn-wrapper profile pt-3">
                    <Button href={this.props.href} className={'btn-round'} color={'primary'} >{this.props.btnname}</Button>
                </div>
            </div>
        )
    }
}