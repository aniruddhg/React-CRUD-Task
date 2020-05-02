import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

class DeleteUsers extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userList: [],
            toDelete: new Map()
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/users`).then(res => {
            console.log("success");
            this.setState({ userList: res.data });
        });
    }

    handleCheckboxChange = event => {

        const user = {
            id: event.target.id,
            name: event.target.value
        }

        if (event.target.checked) {
            this.state.toDelete.set(user.id, user.id);
        } else {
            this.state.toDelete.delete(user.id);
        }

    }

    handleDelete = () => {

        for (let [key, value] of this.state.toDelete) {
            axios
                .delete(`http://localhost:5000/users/${value}`)
                .catch(err => alert("Error Occurred Please Try Again"));
        }
    }

    render() {
        return (
            <div className='col-9'>
                <form>
                    <Table bordered hover size="sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Id</th>
                                <th scope="col">UserName</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.userList.map(user => <tr key={user.id}><td width='10'><input type="checkbox" className="form-check-input " id={user.id} value={user.name} onChange={this.handleCheckboxChange} /></td><td width='150'>{user.id}</td><td width='150'>{user.name}</td></tr>)}
                        </tbody>
                    </Table>
                    <button className="btn btn-outline-danger btn-lg" onClick={this.handleDelete}>Delete</button>
                </form>
            </div>
        )
    }
}

export default DeleteUsers
