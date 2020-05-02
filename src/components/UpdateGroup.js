import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

class UpdateGroup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: this.props.match.params.name,
            users: new Map(),
            userList: [],
        }
    }

    request = async () => {
        await axios.get(`http://localhost:5000/users`).then(res => {
            console.log("success");
            this.setState({ userList: res.data });
        });

        await axios.get(`http://localhost:5000/groups/${this.state.id}`).then(res => {
            console.log("success");

            for (let i = 0; i < res.data.users.length; i = i + 1) {
                document.getElementById(res.data.users[i].id).checked = true;
                this.state.users.set(res.data.users[i].id, res.data.users[i]);
            }
        });
    }

    componentDidMount() {
        this.request()
    }

    handleCheckboxChange = event => {

        const user = {
            id: event.target.id,
            name: event.target.value
        }

        if (event.target.checked) {
            this.state.users.set(user.id, user);
        } else {
            this.state.users.delete(user.id);
        }

    }

    onSubmit = (e) => {

        e.preventDefault()
        const userList = []

        for (let [key, value] of this.state.users) {
            userList.push(value);
        }

        const data = {
            id: this.state.id,
            name: this.state.name,
            users: userList
        }

        axios
            .put(`http://localhost:5000/groups/${data.id}`, data)
            .then(res => alert("Group Successfully Updated"))
            .catch(err => alert("Error"));
    }
    onNameChange = e => {
        this.setState({
            name: e.target.value
        });
    };

    onIdChange = e => {
        this.setState({
            id: e.target.value
        });
    };


    render() {
        return (
            <div className='col-9'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className="control-label col-sm-2">GroupName</label>
                        <div className="col-sm-5 container">
                            <input type="text" className="form-control" id="full_name_id" name="full_name" value={this.state.name} onChange={this.onNameChange} />
                        </div>
                    </div>

                    <div className="form-group" >
                        <label className="control-label col-sm-2">ID</label>
                        <div className="col-sm-5 container">
                            <input type="text" className="form-control" id="id_id" name="id" value={this.state.id} onChange={this.onIdChange} readOnly />
                        </div>
                    </div>
                    <Table bordered hover size="sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.userList.map(user => <tr key={user.id}><td width='10'><input type="checkbox" className="form-check-input " id={user.id} value={user.name} onChange={this.handleCheckboxChange} /></td><td width='150'>{user.id}</td><td width='150'>{user.name}</td></tr>)}
                        </tbody>
                    </Table>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
        )
    }
}

export default UpdateGroup
