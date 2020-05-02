import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

class DeleteGroups extends Component {

    constructor(props) {
        super(props)

        this.state = {
            groupList: [],
            toDelete: new Map()
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/groups`).then(res => {
            console.log("success");
            this.setState({ groupList: res.data });
        });
    }

    handleCheckboxChange = event => {

        const group = {
            id: event.target.id,
            name: event.target.value
        }

        if (event.target.checked) {
            this.state.toDelete.set(group.id, group.id);
        } else {
            this.state.toDelete.delete(group.id);
        }

    }

    handleDelete = () => {

        for (let [key, value] of this.state.toDelete) {
            axios
                .delete(`http://localhost:5000/groups/${value}`)
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
                                <th scope="col">GroupName</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.groupList.map(group => <tr key={group.id}><td width='10'><input type="checkbox" className="form-check-input " id={group.id} value={group.name} onChange={this.handleCheckboxChange} /></td><td width='150'>{group.id}</td><td width='150'>{group.name}</td></tr>)}
                        </tbody>
                    </Table>
                    <button className="btn btn-outline-danger btn-lg" onClick={this.handleDelete}>Delete</button>
                </form>
            </div>
        )
    }
}

export default DeleteGroups
