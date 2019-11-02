import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getUsersById, login} from "../actions/userActions";

class SitePage extends Component {

        componentDidMount() {
            this.props.getUsersById(this.props.match.params.id);
            //console.log(this.props.user.id);

    }

    render() {
        console.log(this.props.match.params.id);
        return (
            <div Style="">
                <Link className="glyphicon glyphicon-plus" to={`/addSite`}>
                   Add new Site
                </Link>

            </div>
        );
    }
}

SitePage.propTypes = {
    getUsersById: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
    user: state.user.user

});

export default connect(
    mapStateToProps,
    {getUsersById})(SitePage);
