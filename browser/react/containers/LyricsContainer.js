import React, { Component } from 'react';
import axios from 'axios';

import store from '../../redux/store';
import Lyrics from '../components/Lyrics';
import { setLyrics } from '../../redux/action-creators/lyrics';


export default class extends Component {
  constructor() {
    super();
    this.state = Object.assign({
      artistQuery: "",
      songQuery: ""
      }
      , store.getState());

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());

    });
  }
  componentWillUnmount() {
    store.unsubscribe();
  }
  handleArtistInput(input) {
    this.setState({artistQuery: input });
  }
  handleSongInput(input) {
    this.setState({songQuery: input });
  }
  handleSubmit(e) {
    e.preventDefault();
    
    if (this.state.artistQuery && this.state.songQuery) {
      console.log('something', this.state);
      axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
      .then(res => {
        console.log('res: ', res);
        return res.data.lyric})
      .then(text => {
        console.log('text:', text);
        store.dispatch(setLyrics(text));
      });
    }
    console.log(this.state);
  }

  render() {
    return (
            <Lyrics
              text={this.state.text}
              setArtist={this.handleArtistInput}
              setSong={this.handleSongInput}
              artistQuery={this.state.artistQuery}
              songQuery={this.state.songQuery}
              handleSubmit={this.handleSubmit} />
            );
  }
}
