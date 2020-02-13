import React, { Component } from "react";
import { connect } from "react-redux";
import { getPoints, getColors, drawPoint } from "../thunks";
import { Button, Input } from 'reactstrap';
import '../App.css';

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

    selectPoint = (x,y, event) => {
        event.target.style.border = "solid 1px black";
        this.setState({
            x: x,
            y: y
        })
    }

    loadPage = () => {
        this.props.getPoints().then(() => this.setState({loaded:true}))
    }

    send = (x) => {
        let obj = this.state;
        obj.color = x;
        obj.loaded = undefined;
        this.props.drawPoint(obj).then(() => this.loadPage());
    }

    render() {
        if  (!this.state.loaded) 
            return <div style={{display:"flex", padding:300, justifyContent: "center"}}><h1>Loading...</h1></div>;
        return (
            <>  
                <div style={{display:"flex", justifyContent: "center", backgroundColor: "#e68422"}}>
                    <h1 style={{margin:10,color:"white", letterSpacing: 10, textShadow: "4px 4px 5px rgba(0,0,0,0.55)"}}>
                        PASIONA<br/>L<br/>A<br/>C<br/>E
                        </h1>
                    <div style={{width:600, margin:13, boxShadow: "9px 10px 5px 0px rgba(0,0,0,0.55)"}}>
                        {this.props.Points.map((x, indx)=>{
                            return <div key={indx} style={{display:"flex"}}>
                                {x.map((y,indy)=>{
                                    return <div key={indx+"-"+indy} id={indx+"-"+indy} className="Point" style={{width:6, height:6, backgroundColor: this.props.Colors[y]}} onClick={(event)=>{this.selectPoint(indy, indx, event)}}></div>
                                })}  
                            </div>   
                        })}
                    </div>
                    <div style={{width:200, display:"flex", flexWrap:"wrap", height:600, margin: 13, backgroundColor:"white", boxShadow: "9px 10px 5px 0px rgba(0,0,0,0.55)"}}>
                        <Input style={{margin:10, width:180}} type="number" name="x" value={this.state.x} onChange={this.handleChange}></Input>
                        <Input style={{margin:10, width:180}} type="number" name="y" value={this.state.y} onChange={this.handleChange}></Input>
                        {this.props.Colors.map((x,i)=>{
                            return <Button name={x} key={i} style={{margin:10, marginTop:2, width:180, backgroundColor:x}} onClick={()=>{this.send(i)}}></Button>
                        })}
                    </div>
                </div>
                
            </>
        );
    }
}

const minionsMap = connect(mapStateToProps, mapDispatchToProps)(MinionsMap);
export default minionsMap;
