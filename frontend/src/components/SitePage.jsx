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
            //console.log(this.props.user.id);

    }
    onDeleteClick() {
        const id = "";
        this.props.deleteSite(id, this.props.history, 1);
        window.location.reload();

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
                    Site URL:  {list.URL}


                    <hr/>
                    <Button
                        variant="outline-danger"
                        size="lg"
                        block
                        onClick={this.onDeleteClick.bind(this)}
                        type="submit">

                        Delete
                    </Button>

                </div>
            )
        });
    }


    render() {

        return (
            <div>
            <Link className="glyphicon glyphicon-plus"  to={`/addSite`}>
                Add new Site
            </Link>

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
