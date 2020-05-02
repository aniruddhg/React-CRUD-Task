import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AllGroups extends Component {
    constructor(props) {
        super(props)

        this.state = {
            groupList: [],
            show: false,
            groupID: "",
            groupName: "",
            users: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/groups`).then(res => {
            console.log("success");
            this.setState({ groupList: res.data });
        });
    }


    handleDelete = async (e) => {
        e.preventDefault();

        await axios
            .delete(`http://localhost:5000/groups/${e.target.id}`)
            .then(res => alert("User Successfully delete"))
            .catch(err => alert(err.response));

        await axios.get(`http://localhost:5000/groups`).then(res => {
            console.log("success");
            this.setState({ groupList: res.data });
        });

    };

    handleClose = () => {
        this.setState({ show: false, users: [], groupName: "", groupID: "" });
    }

    handleShow = (e) => {

        axios.get(`http://localhost:5000/groups/${e.target.id}`).then(res => {
            console.log("success");
            this.setState({ show: true, users: res.data.users, groupName: res.data.name, groupID: res.data.id });
        });

    }

    render() {
        return (
            <div className='col-9'>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{`ID: ${this.state.groupID} Name:${this.state.groupName}`}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Table bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.map(user => <tr key={user.id}><td width='150'>{user.id}</td><td width='150'>{user.name}</td></tr>)}
                            </tbody>
                        </Table>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>

                </Modal>

                <Table bordered hover size="sm">
                    <thead>
                        <tr>
                            <th scope="col">GroupId</th>
                            <th scope="col">GroupName</th>
                            <th scope="col">See Users</th>
                            <th scope="col">Update Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.groupList.map(group =>
                            <tr key={group.id}>
                                <td width='150'>{group.id}</td>
                                <td width='150'>{group.name}</td>
                                <td width='150'><button onClick={this.handleShow} id={group.id} className="btn btn-outline-primary btn-sm">More Info</button></td>
                                <td width='150'><Link to={`/updategroup/${group.id}/${group.name}`}><button id={group.id} className="btn btn-outline-primary btn-sm">Update</button></Link></td>
                            </tr>)}
                    </tbody>
                </Table>
            </div >
        )
    }
}

export default AllGroups
