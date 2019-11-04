import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import _ from 'lodash';
import {getUsersById, deleteSite} from "../actions/Actions";
import Button from "react-bootstrap/Button";

class SitePage extends Component {
    componentDidMount() {
        this.props.getUsersById(this.props.match.params.id);
    }

    renderWorkEx() {
        return _.map(this.props.user.sites, list => {
            return (


                <div>
                    Site name:   {list.name}
                    <br/>
                    Site color:  {list.color}
                    <br/>
                    Site description:  {list.description}
                    <br/>
                    <Link className="glyphicon glyphicon-plus"  to={`${list.url}`}>
                      {list.url}
                    </Link>


                        <br/>
                        <p/>
                    <Link className="glyphicon glyphicon-plus"  to={`/EditSite/${list.siteId}`}>
                       Edit or delete
                    </Link>
                    <hr/>
                </div>
            )
        });
    }


    render() {


        return (
            <div>
                <Link className="fas fa-plus"     to={`/addSite`}>
                   <h6>Add new Site</h6>
                </Link>
                <hr/>

                <div Style="margin-top: 50px" />

                <div className="ui divided list">
                    { this.renderWorkEx()}
                </div>
            </div>

        );
    }
}

SitePage.propTypes = {
    getUsersById: PropTypes.func.isRequired,
    deleteSite: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
    user: state.user.user

});

export default connect(
    mapStateToProps,
    {getUsersById, deleteSite})(SitePage);
