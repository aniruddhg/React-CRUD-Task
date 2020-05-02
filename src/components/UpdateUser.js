import React, { Component } from 'react'
import axios from 'axios'
class UpdateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: this.props.match.params.name
        }
    }
    onNameChange = e => {
        this.setState({
            name: e.target.value
        });
    };

    handleUpdate = e => {
        e.preventDefault();
        const data = {
            id: this.state.id,
            name: this.state.name

        };
        axios
            .put(`http://localhost:5000/users/${data.id}`, data)
            .then(res => alert("User Successfully Updated"))
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div className='col-9'>
                <form className="form-horizontal" onSubmit={this.handleUpdate}>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Full Name</label>
                        <div className="col-sm-5 container">
                            <input type="text" className="form-control" id="upd_full_name_id" name="full_name" value={this.state.name} onChange={this.onNameChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2">ID</label>
                        <div className="col-sm-5 container">
                            <input type="text" className="form-control" id="upd_id_id" name="id" placeholder={this.state.id} readOnly />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-15 col-sm-offset-5">
                            <button type="submit" className="btn btn-outline-primary">Update User</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default UpdateUser
