import React from 'react';

export default (props) => {


  const text = props.text
  const setArtist = props.setArtist
  const artistQuery = props.artistQuery
  const setSong = props.setSong
  const songQuery = props.songQuery
  const handleSubmit = props.handleSubmit

  const artistChange = e => {
    setArtist(e.target.value);
  }
  const songChange = e => {
    setSong(e.target.value);
  }
  return (
          <div id="lyrics">
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="Artist"
                onChange={artistChange} value={artistQuery}/>
              <input type="text" placeholder="Song"
                onChange={songChange} value={songQuery}/>
            </div>
            <pre>{text || 'Search above!'}</pre>
            <button className="btn btn-default" type="submit">Search for lyrics</button>
          </form>
          </div>
          )
}

