import React, {Component} from 'react';
import PropTypes from "prop-types"
import {connect} from "react-redux";
import {getSitesById, updateSite} from "../actions/userActions";



class UppdateSiteComponent extends Component {

    componentDidMount() {
         this.props.getSitesById(this.props.user.id);
        //
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
            userId: "",
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
            userId:this.props.user.userId,
            name: this.state.name,
            color: this.state.color,
            description: this.state.description,
            URL: this.state.URL

        };

        this.props.updateSite(newSite, this.props.history, this.props.user.userId);

    }


    render() {
        return (
            <div className="container" Style="margin-top: 100px; background-color:#f8f8f8; border:outset">
                <h4 Style="font-family:serif; font-size:35px; text-align: center">Add new site </h4>
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

UppdateSiteComponent.propTypes = {
    getSitesById: PropTypes.func.isRequired,
    updateSite: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
    site: state.site,
    user: state.user.user

});

export default connect(
    mapStateToProps,
    {getSitesById, updateSite})(UppdateSiteComponent);
