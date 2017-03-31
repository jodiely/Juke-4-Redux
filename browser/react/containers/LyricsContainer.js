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
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
      console.log('---------------');
      console.log(this.state);

    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  handleArtistInput(input) {
    this.setState({artistQuery: input });
  }
  handleSongInput(input) {
    this.setState({songQuery: input });
  }
  handleSubmit(e) {
    e.preventDefault();
    //console.log(this.state);
    if (this.state.artistQuery && this.state.songQuery) {
      axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
      .then(res => res.data.lyric)
      .then(text => {
        store.dispatch(setLyrics(text));
      });
    }
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
