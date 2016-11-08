import React, {Component, PropTypes} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

let id = new Date();

class ResultList extends Component {

    render(){
        return (
            <div className="container">
                <h2>{this.props.items.length > 1 ? 'Result set count is ' +  this.props.items.length:'' }</h2>
                <ListGroup className="output-section">
                    {this.props.items.map(
                        item => (
                            <ListGroupItem key={id++} className="result-array">
                                {item.map(
                                    (image, index) => (
                                        <img src={image} key={id++} width="100" height="100" alt="" className={index !== 4 ? "result-array-item ": "result-array-item fifth-item"}/>
                                    )
                                )}
                            </ListGroupItem>
                        )
                    )}
                </ListGroup>
            </div>
        );
    }

}

ResultList.propTypes = {
    items: PropTypes.array.isRequired
}

export default ResultList;