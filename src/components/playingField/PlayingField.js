import {Component} from 'react';
import './PlayingField.scss';
import Square from '../square/Square';

class PlayingField extends Component {
constructor() {
    super();
    this.state = {
      value: null,
    };
  }

    render() {
        return (
            <>
                <div className="field">
                    <div className="field_player">
                    <div className="field_player_num">First player</div>
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    </div>
                    <div className="field_player">
                    <div className="field_player_num">Second player</div>
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    </div>
                </div>
            </>
        )
    }
}

export default PlayingField;
