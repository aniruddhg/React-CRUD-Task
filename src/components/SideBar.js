import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function SideBar() {
    return (
        <React.Fragment>
            <div className="col-2">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <ul>
                        <Link to='/'><li className="nav-link" id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="false">Home</li></Link>
                        <Link to='/allusers'><li className="nav-link" id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="false">See All Users</li></Link>
                        <Link to='/adduser'><li className="nav-link" id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="false">Add New User</li></Link>
                        <Link to='/deleteusers'><li className="nav-link" id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="false">Delete Users</li></Link>
                        <Link to='/allgroups'><li className="nav-link" id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="false">All Groups</li></Link>
                        <Link to='/creategroup'><li className="nav-link" id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="false">Create Group</li></Link>
                        <Link to='/deletegroups'><li className="nav-link" id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="false">Delete Groups</li></Link>
                    </ul>
                </div>
            </div>
        </React.Fragment >
    )
}

export default SideBar

