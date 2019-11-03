import React, {Component} from 'react';
import PropTypes from "prop-types"
import {connect} from "react-redux";
import {getSitesById, updateSite, deleteSite} from "../actions/Actions";
import Button from "react-bootstrap/Button";



class UppdateSiteComponent extends Component {

    componentDidMount() {
         this.props.getSitesById(this.props.match.params.id);
        //
        console.log(this.props.user.userId);
    }
    componentWillReceiveProps(nextProps) {
        const {
            userId,
            name,
            color,
            description,
            URL

        } = nextProps.site;

        this.setState({
            userId,
            name,
            color,
            description,
            URL
        });
    }

    constructor() {
        super();

        this.state = {

            name: '',
            color: '',
            description: '',
            URL: ''

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(event) {
        event.preventDefault();
        const newSite = {

            name: this.state.name,
            color: this.state.color,
            description: this.state.description,
            URL: this.state.URL

        };

        this.props.updateSite(this.props.match.params.id, newSite, this.props.history, this.props.user.userId);

    }

    onDeleteClick() {

        console.log(this.props.match.params.id);

        this.props.deleteSite(this.props.match.params.id, this.props.history, this.props.user.userId);


    }


    render() {
        return (
            <div className="container" Style="margin-top: 100px; background-color:#f8f8f8; border:outset">
                <h4 Style="font-family:serif; font-size:35px; text-align: center">Update or delete site </h4>
                <div className="row">

                    <div className="col">
                        <form onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col">


                                    <p/>
                                    <label htmlFor="email"> Name</label>
                                    <input type="text" id="name" className="form-control"
                                           Style="height:50px; border: outset"
                                           placeholder="name"
                                           name="name"
                                           required
                                           value={this.state.name}
                                           onChange={this.onChange}
                                    />
                                    <p/>
                                    <label htmlFor="color"> color</label>
                                    <input type="text" id="color" className="form-control"
                                           Style="height:50px; border: outset"
                                           placeholder="color"
                                           name="color"
                                           required
                                           value={this.state.color}
                                           onChange={this.onChange}

                                    />
                                    <label htmlFor="description"> description</label>
                                    <input type="text" id="description" className="form-control"
                                           Style="height:50px; border: outset"
                                           placeholder="description"
                                           name="description"
                                           required
                                           value={this.state.description}
                                           onChange={this.onChange}

                                    />
                                    <label htmlFor="URL"> URL</label>
                                    <input type="text" id="URL" className="form-control"
                                           Style="height:50px; border: outset"
                                           placeholder="URL"
                                           name="URL"
                                           required
                                           value={this.state.URL}
                                           onChange={this.onChange}

                                    />
                                </div>
                            </div>
                            <p/>
                            <div className="row">
                                <div className="col">
                                    <p/>
                                    <button type="submit" Style="width:100%; height:50px"
                                            className="btn-primary" variant="outline-danger"> Continue
                                    </button>
                                    <p/>
                                </div>
                            </div>
                        </form>
                        <Button
                            variant="outline-danger"
                            size="lg"
                            block
                            Style="width:100%; height:50px"
                            onClick={this.onDeleteClick.bind(this)}
                            type="submit">

                            Delete
                        </Button>
                        <p/>
                    </div>
                </div>





            </div>


        );
    }
}

UppdateSiteComponent.propTypes = {
    getSitesById: PropTypes.func.isRequired,
    updateSite: PropTypes.func.isRequired,
    deleteSite:  PropTypes.func.isRequired

};

const mapStateToProps = state => ({
    site: state.site.site,
    user: state.user.user

});

export default connect(
    mapStateToProps,
    {getSitesById, updateSite, deleteSite})(UppdateSiteComponent);
