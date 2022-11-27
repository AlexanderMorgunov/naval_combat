import { Component } from "react";
import {RiShipLine} from 'react-icons/ri'
import './Square.scss';

class Square extends Component {
constructor(props) {
    super(props);
    this.state = {
        isShip: false,
        isLive: true,
        };
    }

phase = this.props.phase

componentDidMount() {
    this.setState(state => (state, this.props.phase))
}

componentDidUpdate(prevProps) {
    if(this.props !== prevProps) {
        this.setState(state => (state, this.props.phase))
    }
}

toggleShip = () => {
    this.setState(({isShip}) =>({isShip: !isShip}));
}

getContent = (phase) => {
    switch(phase) {
        case 'preparing':
            return (
                <div className="square" onClick={this.toggleShip}></div>
            )
        case '1stPlayerMoveShip':
            // return(
            //     <div className="square" onClick={this.toggleShip}>
            //     {this.state.isShip ? <RiShipLine/> : null}
            //     {/* {this.state.isShip ? <div className="div">123</div> : <div className="square"></div>} */}
            //     {/* {<RiShipLine/>} */}
            //     </div>
            // )
            const isShip = this.state.isShip;
            if(isShip) {
                return (
                    <div className="square" onClick={this.toggleShip}>
                        <RiShipLine/>
                    </div>
                )
            } else {
                return (
                    <div className="square" onClick={this.toggleShip}></div>
                )
            }
        case '2stPlayerMoveShip':
            return(
                null
           )
        case '1stPlayerStep':
            return(
                null
           )
        case '2stPlayerStep':
            return(
                null
           )
        case 'announcementWinner':
            return(
                null
           )
        default:
            throw new Error('invalid state');
    }
  }

    render() {
        return (
            <>
            {this.state.gamePhase ? this.getContent(this.state.gamePhase) : null}
            </>
        )
    }

}

export default Square;