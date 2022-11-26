import {Component} from 'react';
import './PlayingField.scss';
import Square from '../square/Square';

class PlayingField extends Component {

  phase = this.props.phase;

  elements = () => {
    return (
        <>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        <Square phase={this.props.phase}/>
        </>
    )
  };

  content;
  componentDidUpdate() {
    this.content = this.getContent(this.props.phase)
}

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
                    <div className="field_player_num">First player</div>
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
        {this.content}
        </>
    )
}
}

export default PlayingField;

//     render() {
//         return (
//             <>
//                 <div className="field">
//                     <div className="field_player">
//                     <div className="field_player_num">First player</div>
//                     {this.getContent(this.phase)}
//                     </div>
//                     <div className="field_player">
//                     <div className="field_player_num">Second player</div>
//                     {this.elements()}
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }



