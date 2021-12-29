import React, { Component } from "react";
import { connect } from "react-redux";
import { artistsListAll, artistsListSearch } from "../store/actions";
import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(artistsListAll());
  }

  showArtistAll = (data) =>
    data?.artistList?.map((item) => {
      return this.getListItem(item);
    });

  getListItem(item) {
    return (
      <Link to={`/artist/${item.id}`} key={item.id} className="artist_item">
        <div
          className="cover"
          style={{ background: `url(/images/${item.cover})` }}
        >
          <div>{item.name}</div>
        </div>
      </Link>
    );
  }

  searchArtist(event) {
    this.props.dispatch(artistsListSearch(event.target.value));
  }

  render() {
    return (
      <>
        <div className="search_container">
          <h2>Search your artist</h2>
          <input
            type="text"
            onChange={(event) => {
              this.searchArtist(event);
            }}
          />
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
