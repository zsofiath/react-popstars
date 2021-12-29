import React, { Component } from "react";
import { connect } from "react-redux";
import { artistsListAll } from "../store/actions";
import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(artistsListAll());
  }

  showArtistAll = (data) => data?.artistList?.map((item) => {
          return (
            <Link
              to={`/artist/${item.id}`}
              key={item.id}
              className="artist_item"
            >
              <div
                className="cover"
                style={{ background: `url(/images/${item.cover})` }}
              >
                <div>{item.name}</div>
              </div>
            </Link>
          );
        });

  render() {
    return (
      <>
        <div className="search_container">
          <h2>Search your artist</h2>
          <input type="text" />
        </div>

        <div className="artist_container">
          {this.showArtistAll(this.props.artists)}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    artists: state.artists,
  };
}

export default connect(mapStateToProps)(Home);
