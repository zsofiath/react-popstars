import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { artistDetail } from "../store/actions";

class Artist extends Component {

componentDidMount(){
    this.props.dispatch(artistDetail(this.props.match.params.id))
}

    render() {
        console.log(this.props.artists);
        return (
            <div>
                Artist
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        artists: state.artists
    }
}
export default connect(mapStateToProps)(Artist)