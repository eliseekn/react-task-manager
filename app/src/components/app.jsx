import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Items from './items';

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            items: [],
            itemId: '',
            itemDescription: '',
            actionText: 'Add item'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(e) {
        this.setState({ itemDescription: e.target.value })

        if (e.target.value === '') {
            this.setState({
                itemId: '',
                itemDescription: '',
                actionText: 'Add item'
            })
        }
    }

    handleEdit(itemId, itemDescription) {
        this.setState({
            itemId: itemId,
            itemDescription: itemDescription,
            actionText: 'Update item'
        })
    }

    handleSubmit() {
        if (this.state.itemDescription === '') {
            return
        }

        if (this.state.actionText === 'Add item') {
            this.setState(state => ({
                items: state.items.concat({
                    id: state.items.length + 1,
                    description: state.itemDescription
                }),
                itemDescription: ''
            }))
        } else {
            const items = this.state.items.map(item => {
                if (item.id === this.state.itemId) {
                    item.description = this.state.itemDescription
                }
    
                return item
            })
    
            this.setState({
                items: items,
                itemId: '',
                itemDescription: '',
                actionText: 'Add item'
            })
        }
    }

    handleDelete(itemId) {
        this.setState(state => ({
            items: state.items.filter(item => item.id !== itemId)
        }))
    }

    componentDidMount() {
        this.setState({
            items: [
                {
                    "id": 1,
                    "description": "Learn how to build PWA with React.js and parcel bundler",
                },
        
                {
                    "id": 2,
                    "description": "Learn how to build Android app from PWA",
                }
            ]
        })
    }

    render() {
        return (
            <div className="container my-5 px-5">
                <h1 className="jumbotron text-center">Todo App</h1>

                <div className="form-row">
                    <div className="form-group col-md-10">
                        <input type="text" className="form-control" placeholder="Item description" value={this.state.itemDescription} onChange={this.handleChange} />
                    </div>
                    
                    <div className="form-group col-md-2">
                        <button className="btn btn-primary btn-block" onClick={this.handleSubmit}>{this.state.actionText}</button>
                    </div>
                </div>

                <Items
                    items={this.state.items}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete} />
            </div>
        )
    }
}

export default App