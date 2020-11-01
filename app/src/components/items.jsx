import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Item from './item';

class Items extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="list-group">
                {
                    this.props.items.map(item => {
                        return (
                            <Item
                                key={item.id}
                                id={item.id}
                                description={item.description}
                                handleEdit={this.props.handleEdit}
                                handleDelete={this.props.handleDelete} />
                        )
                    })
                }
            </ul>
        )
    }
}

export default Items