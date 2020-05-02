import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import Table from 'react-bootstrap/Table';
class AllUsers extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userList: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/users`).then(res => {
            console.log("success");
            this.setState({ userList: res.data });
        });
    }


    render() {
        return (
            <div className='col-9'>
                <Table bordered hover size="sm">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Update User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userList.map(user => <tr key={user.id}><td width='150'>{user.id}</td><td width='150'>{user.name}</td><td width='150'><Link to={`/updateuser/${user.id}/${user.name}`}><button id={user.id} className="btn btn-outline-primary btn-sm">Update</button></Link></td></tr>)}
                    </tbody>
                </Table>
            </div >
        )
    }
}

export default AllUsers
