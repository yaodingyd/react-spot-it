import React, {Component, PropTypes} from 'react';
import {Button, Glyphicon, Image} from 'react-bootstrap';

class List extends Component {

    render(){
        return (
            <ul className="input-list container">
                {this.props.items.map(
                    item => (
                        <li key={item.id}>
                            <Image src={item.imageSrc} thumbnail className="input-image"/>
                            <Button bsSize="xsmall" onClick={item.handleRemove.bind(null, item.id)}>
                                <Glyphicon glyph="glyphicon glyphicon-remove"/>
                            </Button>
                        </li>
                    )
                )}
            </ul>
        );
    }

}

List.propTypes = {
    items: PropTypes.array.isRequired
}

export default List;