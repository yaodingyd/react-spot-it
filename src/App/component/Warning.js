import React, { Component, PropTypes } from 'react';
import { Modal} from 'react-bootstrap';

class Warning extends Component {
    render() {
        let close = () => {
            this.props.callbackOwner();
        };

        return (
            <div>
                <Modal show={this.props.show}  onHide={close}>
                    <div className="modal-body">
                        {this.props.message}
                    </div>
                </Modal>
            </div>
        );
    }
}

Warning.propTypes = {
    show: PropTypes.bool,
    message: PropTypes.string,
    callbackOwner: PropTypes.func
}

export default Warning;