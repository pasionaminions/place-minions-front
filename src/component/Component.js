import React, { Component } from "react";
import { connect } from "react-redux";

const mapDispatchToProps = {
    
}

const mapStateToProps = state => {
    
}

class Genio extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        return (
            <>  
                {/* code */}
            </>
        );
    }
}
const genio = connect(mapStateToProps, mapDispatchToProps)(Genio);
export default genio;