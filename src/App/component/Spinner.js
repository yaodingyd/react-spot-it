import React, { Component, PropTypes } from 'react';
import { Modal, Glyphicon} from 'react-bootstrap';

class Spinner extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} backdrop="static">
                    <div className="modal-body">
                        Result is being generated. Please wait...
                        <div className="text-center"><Glyphicon glyph="refresh" className="refresh"/></div>
                    </div>
                </Modal>
            </div>
        );
    }
}

Spinner.propTypes = {
    show: PropTypes.bool
}

export default Spinner;