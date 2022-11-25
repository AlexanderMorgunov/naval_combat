import { Component } from "react";
import './Square.scss';

class Square extends Component {
constructor(props) {
    super(props);
    this.state = {
        value: null,
        };
    }

    render() {
        return (
            <div className="square"></div>
        )
    }

}

export default Square;