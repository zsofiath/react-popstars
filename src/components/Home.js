import React, { useEffect } from "react";
import { connect } from "react-redux";
import { artistsListAll, artistsListSearch } from "../store/actions";
import { Link } from "react-router-dom";

function Home(props) {
  
  useEffect(() => {
    props.dispatch(artistsListAll());
  }, []);


  function getListItem(item) {
    return (
      <Link to={`artist/${item.id}`} key={item.id} className="artist_item">
        <div
          className="cover"
          style={{ background: `url(${require('../../build/images/'+item.cover)})` }}
        >
          <div>{item.name}</div>
        </div>
      </Link>
    );
  }

  function searchArtist(event) {
    props.dispatch(artistsListSearch(event.target.value));
  }

  const showArtistAll = (data) =>
    data?.artistList?.map((item) => {
      return getListItem(item);
    });


  return (
    <>
        <div className="search_container">
          <h2>Search your artist</h2>
          <input
            type="text"
            onChange={(event) => {
              searchArtist(event);
            }}
          />
        </div>

        <div className="artist_container">
          {showArtistAll(props.artists)}
        </div>
      </>
  )
}

function mapStateToProps(state) {
  return {
    artists: state.artists,
  };
}

export default connect(mapStateToProps)(Home);
