import React, { Component } from 'react'

export default class StudentForm extends Component {
    state = {
        id: "",
        name: "",
        email: "",
        mobile: "",
        schoolName: "",
        standard: "",
        division: "",
        state: "",
        country: "",
    }

    handleInputChnage = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = e => {
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <input name="id" placeholder="ID" value={this.state.id} onChange={this.handleInputChnage} /><br />
                <input name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChnage} /><br />
                <input name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChnage} /><br />
                <input name="mobile" placeholder="Mobile" value={this.state.mobile} onChange={this.handleInputChnage} /><br />
                <input name="schoolName" placeholder="School Name" value={this.state.schoolName} onChange={this.handleInputChnage} /><br />
                <input name="standard" placeholder="Standard" value={this.state.standard} onChange={this.handleInputChnage} /><br />
                <input name="division" placeholder="Division" value={this.state.division} onChange={this.handleInputChnage} /><br />
                <input name="state" placeholder="State" value={this.state.state} onChange={this.handleInputChnage} /><br />
                <input name="country" placeholder="Country" value={this.state.country} onChange={this.handleInputChnage} /><br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}
