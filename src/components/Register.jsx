import React, {Component} from 'react';
import PropTypes from "prop-types"
import {connect} from "react-redux";
import {getUsersById, registerUsers} from "../actions/userActions";



class Register extends Component {

    componentDidMount() {
        this.props.getUsersById();
    }

    constructor() {
        super();

        this.state = {

            name: '',
            password: '',

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(event) {
        event.preventDefault();
        const newuser = {
            name: this.state.name,
            password: this.state.password,
            email:  this.state.email

        };

        this.props.registerUsers(newuser, this.props.history);

    }


    render() {


     console.log(this.props.user.id)

        return (
            <div className="container" Style="margin-top: 100px; background-color:#f8f8f8; border:outset">
                <div className="row">

                    <div className="col">
                        <form onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="username"> username</label>
                                    <input type="text" id="username" className="form-control"
                                           Style="height:50px ; border: outset"
                                           placeholder="Full Name"
                                           name="name"
                                           required
                                           value={this.state.name}
                                           onChange={this.onChange}

                                    />
                                    <p/>
                                    <label htmlFor="password"> password</label>
                                    <input type="password" id="password" className="form-control"
                                           Style="height:50px; border: outset"
                                           placeholder="password"
                                           name="password"
                                           required
                                           value={this.state.password}
                                           onChange={this.onChange}

                                    />
                                    <p/>
                                    <label htmlFor="email"> email</label>
                                    <input type="email" id="email" className="form-control"
                                           Style="height:50px; border: outset"
                                           placeholder="Email"
                                           name="email"
                                           required
                                           value={this.state.email}
                                           onChange={this.onChange}

                                    />
                                </div>
                            </div>
                            <p/>
                            <div className="row">
                                <div className="col">
                                    <p/>
                                    <button type="submit" Style="width:100%; height:50px"
                                            className="btn-primary"> Continue
                                    </button>
                                    <p/>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>





                    </div>


        );
    }
}

Register.propTypes = {
    getUsersById: PropTypes.func.isRequired,
    registerUsers: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
    user: state.user.user

});

export default connect(
    mapStateToProps,
    {getUsersById, registerUsers})(Register);
