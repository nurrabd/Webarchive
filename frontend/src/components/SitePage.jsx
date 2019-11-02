import React, {Component} from 'react';

class SitePage extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id);
    }

    render() {
        console.log(this.props.match.params.id);
        return (
            <div Style="">
                du är registerad

            </div>
        );
    }
}

export default SitePage;
