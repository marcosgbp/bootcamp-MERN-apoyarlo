import React, {Component} from "react";
import './PersonCard.css';
class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state={
            edad: parseInt(props.edad)
        }
    }
    aumentarEdad=()=>{
        this.setState({edad:this.state.edad+1})
    } 
    render() {
        let {nombre, apellido, edad, hairColor} = this.props;
        return(
            <div className="card">
                <h2>{nombre}, {apellido}</h2>
                <p>Age {this.state.edad}</p>
                <p>Hair Color, {hairColor}</p>
                <button onClick={this.aumentarEdad}>Birthday Button for {nombre} {apellido}</button>
            </div>
        )
    }
}

export default PersonCard; 