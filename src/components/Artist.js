import React, { useEffect } from "react";
import { connect } from "react-redux";
import { artistDetail, clearArtistDetail} from "../store/actions";

function Artist(props) {

  useEffect(() => {
    props.dispatch(artistDetail(props.match.params.id));
    return () => {
      props.dispatch(clearArtistDetail())
    }
  }, []);

  function artistTemplate(data) {
    return data.artistData ? 
    <div className="artist_view" >
        <div
        className="artist_background"
        style={{ background: `linear-gradient(white, black), url(${require('../../build/images/'+data.artistData[0].cover)})` }}
      >
        <button onClick={()=>{props.history.goBack();}}>Back Home</button>
        <div className="name">{data.artistData[0].name}</div>
      </div>
      <div className="artist_description">
        <p>{data.artistData[0].bio}</p>
        <div className="tags">
          <div>
            <strong>Style</strong>: {data.artistData[0].style}
          </div>
        </div>
      </div>
      <div className="artist_album_list">
        {data.artistData[0].albums?.map((item) => (
          <div key={item.cover} className="albums">
            <div className="cover"
            style={{
                background: `url(${require('../../build/images/albums/'+item.cover)})`
            }}></div>
          </div>
        ))}
      </div>
    </div>
    : null;
}

  return (<div>{artistTemplate(props.artists)}</div> )
}

function mapStateToProps(state) {
  return {
    artists: state.artists,
  };
}
export default connect(mapStateToProps)(Artist);
