import {Component} from 'react';
import {ToastBody, ToastHeader} from "reactstrap";


export default class Toast extends Component{
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="p-3 my-2 rounded bg-primary position-fixed fixed-bottom">
                <Toast>
                    <ToastHeader className={'text-white'}>
                        {this.props.title}
                    </ToastHeader>
                    <ToastBody className={'text-white'}>
                        {this.props.body}
                    </ToastBody>
                </Toast>
            </div>
        )
    }
}