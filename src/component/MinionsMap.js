import React, { Component } from "react";
import { connect } from "react-redux";
import { getPoints, getColors, drawPoint } from "../thunks";

const mapDispatchToProps = {
    getColors, getPoints, drawPoint
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
    this.state={loaded:false, x:0, y:0, color:0};
}

componentDidMount() {
    if (this.props.Colors === undefined || this.props.Colors.length === 0) 
        this.props.getColors().then(() => this.loadPage());
    else 
        this.loadPage();
}

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    loadPage = () => {
        this.props.getPoints().then(() => this.setState({loaded:true}))
    }

    send = () => {
        let obj = this.state;
        obj.loaded = undefined;
        this.props.drawPoint(obj).then(() => this.loadPage());
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
                        <input name="x" value={this.state.x} onChange={this.handleChange}></input>
                        <input name="y" value={this.state.y} onChange={this.handleChange}></input>
                        <input name="color" value={this.state.color} onChange={this.handleChange}></input>
                        <button onClick={this.send} >SEND</button>
                    </div>
                </div>
                
            </>
        );
    }
}

const minionsMap = connect(mapStateToProps, mapDispatchToProps)(MinionsMap);
export default minionsMap;
