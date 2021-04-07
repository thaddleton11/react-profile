import {Component} from 'react'
import {Spinner} from "reactstrap";


export default class LoadingOverlay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.show) {
            return (
                <div className={'loading-overlay d-flex justify-content-center'}>
                    <div className={'d-flex  align-items-stretch'}>
                        <h2 className={'text-white align-self-center'}>Loading...</h2>
                    </div>
                </div>
            )
        }


        return false;
    }

}