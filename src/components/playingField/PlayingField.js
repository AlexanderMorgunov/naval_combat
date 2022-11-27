import {Component} from 'react';
import './PlayingField.scss';
import Square from '../square/Square';

class PlayingField extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

componentDidMount() {
    this.setState(this.props.phase)
}

componentDidUpdate(prevProps) {
    if(this.props !== prevProps) {
        this.setState(this.props.phase);   
    }
}

  elements = () => {
    return (
        <>
        <Square phase={this.state} id={1}/>
        <Square phase={this.state} id={2}/>
        <Square phase={this.state} id={3}/>
        <Square phase={this.state} id={4}/>
        <Square phase={this.state} id={5}/>
        <Square phase={this.state} id={6}/>
        <Square phase={this.state} id={7}/>
        <Square phase={this.state} id={8}/>
        <Square phase={this.state} id={9}/>
        <Square phase={this.state} id={10}/>
        <Square phase={this.state} id={11}/>
        <Square phase={this.state} id={12}/>
        <Square phase={this.state} id={13}/>
        <Square phase={this.state} id={14}/>
        <Square phase={this.state} id={15}/>
        <Square phase={this.state} id={16}/>
        <Square phase={this.state} id={17}/>
        <Square phase={this.state} id={18}/>
        <Square phase={this.state} id={19}/>
        <Square phase={this.state} id={20}/>
        <Square phase={this.state} id={21}/>
        <Square phase={this.state} id={22}/>
        <Square phase={this.state} id={23}/>
        <Square phase={this.state} id={24}/>
        <Square phase={this.state} id={25}/>
        </>
    )
  };


  getContent = (state) => {
    switch(state) {
        case 'preparing':
            return (
                null
            )
        case '1stPlayerMoveShip':
            return(
                 <div className="field">
                     <div className="field_player">
                     <div className="field_player_num">First player</div>
                     {this.elements()}
                     </div>
                     {/* <div className="field_player">
                     <div className="field_player_num">Second player</div>
                     {this.elements()}
                     </div> */}
                 </div>
            )
        case '2stPlayerMoveShip':
            return(
                <div className="field">
                    <div className="field_player">
                    <div className="field_player_num">Second player</div>
                    {this.elements()}
                    </div>
                </div>
           )
        case '1stPlayerStep':
            return(
                <div className="field">
                    <div className="field_player">
                    <div className="field_player_num">First player</div>
                    {this.elements()}
                    </div>
                    {/* <div className="field_player">
                    <div className="field_player_num">Second player</div>
                    {this.elements()}
                    </div> */}
                </div>
           )
        case '2stPlayerStep':
            return(
                <div className="field">
                    <div className="field_player">
                    <div className="field_player_num">Second player</div>
                    {this.elements()}
                    </div>
                    {/* <div className="field_player">
                    <div className="field_player_num">Second player</div>
                    {this.elements()}
                    </div> */}
                </div>
           )
        case 'announcementWinner':
            return(
                <div className="field">
                    <div className="field_player">
                    <div className="field_player_num">First player</div>
                    {this.elements()}
                    </div>
                    <div className="field_player">
                    <div className="field_player_num">Second player</div>
                    {this.elements()}
                    </div>
                </div>
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

export default PlayingField;


