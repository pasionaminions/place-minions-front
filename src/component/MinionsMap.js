import React, { Component } from "react";
import { connect } from "react-redux";
import { getPoints, getColors, drawPoint } from "../thunks";
import { Button, Input } from 'reactstrap';


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

    send = (x) => {
        let obj = this.state;
        obj.color = x;
        obj.loaded = undefined;
        this.props.drawPoint(obj).then(() => this.loadPage());
    }

    render() {
        if  (!this.state.loaded) return <div>Loading...</div>;
        return (
            <>  
                <div style={{display:"flex", justifyContent: "center"}}>
                    <div style={{width:700, margin:13}}>
                        {this.props.Points.map((x, indx)=>{
                            return <div key={indx} style={{display:"flex"}}>
                                {x.map((y,indy)=>{
                                    return <div key={indx+"-"+indy}style={{width:7, height:7, border: "1px solid", backgroundColor: this.props.Colors[y]}}></div>
                                })}  
                            </div>   
                        })}
                    </div>
                    <div style={{width:200, display:"flex", flexWrap:"wrap", height:600, margin: 13, border: "1px solid"}}>
                        <Input style={{margin:10, width:180}} type="number" name="x" value={this.state.x} onChange={this.handleChange}></Input>
                        <Input style={{margin:10, width:180}} type="number" name="y" value={this.state.y} onChange={this.handleChange}></Input>
                        {this.props.Colors.map((x,i)=>{
                            return <Button name={x} key={i} style={{margin:10, marginTop:4, width:180, backgroundColor:x}} onClick={()=>{this.send(i)}}></Button>
                        })}
                    </div>
                </div>
                
            </>
        );
    }
}

const minionsMap = connect(mapStateToProps, mapDispatchToProps)(MinionsMap);
export default minionsMap;
