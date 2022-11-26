import './App.css';
import {Component} from 'react';
import PlayingField from './components/playingField/PlayingField';
import Header from './components/header/header';


class App extends Component {
  constructor() {
    super();
    this.state = {
      gamePhase: 'preparing',
    };
  }

  onHandleNewGame = () => {
    this.setState({gamePhase: '1stPlayerMoveShip'});
  }


  render() {
    return(
      <>
      <Header onHandleNewGame={this.onHandleNewGame} phase={this.state.gamePhase}/>
      <PlayingField phase={this.state.gamePhase}/>
      </>
      
    )
  }
}


export default App;
