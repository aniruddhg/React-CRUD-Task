import React, { Component } from 'react'
import axios from 'axios'
class AddUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: "",
            name: ""
        }
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
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            id: this.state.id,
            name: this.state.name

        };
        axios
            .post(`http://localhost:5000/users`, data)
            .then(res => alert("User Successfully created"))
            .catch(err => alert("Error Occurred Try again"));
    };



    render() {
        return (
            <div className='col-9'>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Full Name</label>
                        <div className="col-sm-5 container">
                            <input type="text" className="form-control" id="full_name_id" name="full_name" placeholder="Anonymous" onChange={this.onNameChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2">ID</label>
                        <div className="col-sm-5 container">
                            <input type="text" className="form-control" id="id_id" name="id" placeholder="xxxxxxxxxxx" onChange={this.onIdChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-15 col-sm-offset-5">
                            <button type="submit" className="btn btn-outline-primary">Create User</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddUser
