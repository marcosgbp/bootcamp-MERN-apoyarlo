import React, {Component} from "react";

class PersonCard extends Component{
    render() {
        let {nombre, apellido, edad, hairColor} = this.props;
        return(
            <div className="container">
                <h2>{nombre}, {apellido}</h2>
                <p>Age {edad}</p>
                <p>Hair Color, {hairColor}</p>
            </div>
        )
    }
}

export default PersonCard; 