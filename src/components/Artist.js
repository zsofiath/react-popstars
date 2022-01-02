import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { artistDetail, clearArtistDetail} from "../store/actions";

class Artist extends Component {
  componentDidMount() {
    this.props.dispatch(artistDetail(this.props.match.params.id));
  }

  componentWillUnmount(){
    this.props.dispatch(clearArtistDetail())
  }

  artistTemplate(data) {
      return data.artistData ? 
      <div className="artist_view" >
          <div
          className="artist_background"
          style={{ background: `linear-gradient(white, black), url(${require('../../build/images/'+data.artistData[0].cover)})` }}
        >
          <button onClick={()=>{this.props.history.goBack();}}>Back Home</button>
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

  render() {
    console.log(this.props.artists);
    return <div>{this.artistTemplate(this.props.artists)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    artists: state.artists,
  };
}
export default connect(mapStateToProps)(Artist);
