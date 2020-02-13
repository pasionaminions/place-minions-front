import React, { Component } from "react";
import { connect } from "react-redux";
import { getPoints, getColors } from "../thunks";

const mapDispatchToProps = {
    getColors, getPoints
}

const mapStateToProps = state => {
    return {
        Colors: state.Colors,
        Points: state.Points
    }
}

class MinionsMap extends Component {

constructor(params) {
    super(params);
    this.state={loaded:false};
}

componentDidMount() {
    let prom;
    if (this.props.Colors === undefined || this.props.Colors.length === 0) 
        prom = this.props.getColors().then(() => this.props.getPoints());
    else 
        prom = this.props.getPoints();
    prom.then((_) => this.setState({loaded:true}));
}

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        if  (!this.state.loaded) return <div>Loading...</div>;
        return (
            <>  
                <div style={{display:"flex", justifyContent: "center"}}>
                    <div style={{width:600, margin:13}}>
                        {this.props.Points.map((x, indx)=>{
                            return <div key={indx} style={{display:"flex"}}>
                                {x.map((y,indy)=>{
                                    return <div key={indx+"-"+indy}style={{width:6, height:6, border: "0.1px solid", backgroundColor: this.props.Colors[y]}}></div>
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
