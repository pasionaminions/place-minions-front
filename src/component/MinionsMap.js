import React, { Component } from "react";
import { connect } from "react-redux";
import { getPoints, getColors } from "../thunks";

const mapDispatchToProps = {
    getColors, getPoints
}

const mapStateToProps = state => {
    return{
        Color: state.color,
        Points: state.Points
    }
}

class MinionsMap extends Component {

    componentDidMount() {
        getPoints();
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        
        let array = [];
        for (let i = 0; i < 100; i++) {
            let fila = [];
            for (let j = 0; j < 100; j++) {
                fila[j] = j;
            }
            array.push(fila);
        }

        return (
            <>  
                <div style={{display:"flex", justifyContent: "center"}}>
                    <div style={{width:600, margin:13}}>
                        {array.map(x=>{
                            return <div style={{display:"flex"}}>
                                {x.map(y=>{
                                    return <div style={{width:6, height:6, border: "0.1px solid"}}></div>
                                })}  
                            </div>   
                        })}
                    </div>
                    <div style={{width:200, height:600, margin: 13, border: "0.1px solid"}}>

                    </div>
                </div>
                
            </>
        );
    }
}

const minionsMap = connect(mapStateToProps, mapDispatchToProps)(MinionsMap);
export default minionsMap;
