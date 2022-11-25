import { Component } from "react";
import { Button } from 'react-bootstrap';
import './header.scss'

class Header extends Component {


      onHandleNewGame = this.props.onHandleNewGame;
      phase = this.props.phase;

      componentDidMount() {}

      content = (state) => {
        switch(state) {
            case 'preparing':
                return (
                    null
                )
            case '1stPlayerMoveShip':
                return(
                    <div className="">The first player places the ships</div>
                )
            case '2stPlayerMoveShip':
                return (
                    <div className="">The second player places the ships</div>
                )
            case '1stPlayerStep':
                return (
                    <div className="">The first player step</div>
                )
            case '2stPlayerStep':
                return (
                    <div className="">The second player step</div>
                )
            case 'announcementWinner':
                return(
                    <div className="">Winner is ...</div>
                )
            default:
                console.log(state);
                // throw new Error('invalid state');
        }
      }

      

      render(){
        return (
            <div className="header">
            <Button variant="warning" onClick={this.onHandleNewGame}>New Game</Button>
            {/* <Button variant="warning">New Game</Button> */}
            {this.content(this.phase) ? this.content(this.phase) : null}
            </div>
        )
      }
}

export default Header;
