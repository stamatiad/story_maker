import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    names_list: [
      'Bob',
      'Mary',
      'Anne'
    ],
    charName: 'Bob',
    locations_list: [
      'Athens',
      'Brussels',
      'India'
    ],
    location: 'Lagkadas',
    epochs_list: [
      'middle ages',
      'modern times',
    ],
    epoch: 'thingiverse',
    story: ''
  }
  constructor(props) {
    super(props);
  }

  generateCharacterName = () => {
    var rnd_idx = Math.floor(Math.random() * this.state.names_list.length) ;
    var charName = this.state.names_list[rnd_idx];
    this.setState({charName: charName});
    console.log('Rnd indx is ' + rnd_idx);
    console.log('Genereting character name: ' + charName);
    console.log(charName);
  }
  
  generateLocation = () => {
    var rnd_idx = Math.floor(Math.random() * this.state.locations_list.length) ;
    var location = this.state.locations_list[rnd_idx];
    this.setState({location: location});
    console.log('Rnd indx is ' + rnd_idx);
    console.log('Genereting location: ' + location);
    console.log(location);
  }

  generateEpoch = () => {
    var rnd_idx = Math.floor(Math.random() * this.state.epochs_list.length) ;
    var epoch = this.state.epochs_list[rnd_idx];
    this.setState({epoch: epoch});
    console.log('Rnd indx is ' + rnd_idx);
    console.log('Genereting epoch: ' + epoch);
    console.log(epoch);
  }

  charNameChange = (e) => {
    this.setState({charName: e.target.value});
    console.log('Character name changed manually to ' + e.target.value);
  }
  locationChange = (e) => {
    this.setState({location: e.target.value});
    console.log('Location changed manually to ' + e.target.value);
  }
  epochChange = (e) => {
    this.setState({epoch: e.target.value});
    console.log('Epoch changed manually to ' + e.target.value);
  }

  generateStory = () => {
    //Generates a simple story by mixing the fields!
    var story_text = 'Once uppon a time in ' + this.state.epoch + ', our fellow ' + this.state.charName + ' took off to reach the far away ' + this.state.location + '!'
    //var story_text = 'Once uppon a time in ${this.state.epoch}, our fellow ${this.state.charName} took off to reach the far away ${this.state.location}!'
    this.setState({story: story_text});
  }


  render() {
    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">StoryMaker</h3>
            <nav className="nav nav-masthead justify-content-center">
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">About</a>
            </nav>
          </div>
        </header>

        <main role="main" className="inner cover">
          <h1 className="cover-heading">Let's make a story:</h1>
          <p className="lead">This is an interactive story maker. Make your selections wisely and let the story thread unwind!</p>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm">
                <div className="alert alert-light" role="alert">
                  <h5 className="alert-heading">Hero</h5>
                  <hr/>
                  <div className="btn-group-vertical">
                    <input value={this.state.charName} onChange={this.charNameChange} type="text" className="form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button onClick={this.generateCharacterName} type="button" className="btn btn-outline-primary btn-long">Generate</button>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="alert alert-light" role="alert">
                  <h5 className="alert-heading">Location</h5>
                  <hr/>
                  <div className="btn-group-vertical">
                    <input value={this.state.location} onChange={this.locationChange} type="text" className="form-control" placeholder="Location" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button onClick={this.generateLocation} type="button" className="btn btn-outline-primary btn-long">Generate</button>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="alert alert-light" role="alert">
                  <h5 className="alert-heading">Epoch</h5>
                  <hr/>
                  <div className="btn-group-vertical">
                    <input value={this.state.epoch} onChange={this.epochChange} type="text" className="form-control" placeholder="Epoch" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button onClick={this.generateEpoch} type="button" className="btn btn-outline-primary btn-long">Generate</button>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="card bg-light">
                  <div className="card-header">
                    <button onClick={this.generateStory} type="button" className="btn btn-primary btn-lg btn-block">Make a Story!</button>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote text-center">
                      <p className="storybox">{this.state.story}</p>
                      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Blah De Blah</cite></footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="mastfoot mt-auto">
          <div className="inner">
            <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
