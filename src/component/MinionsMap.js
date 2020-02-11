import React, { Component } from "react";
import { connect } from "react-redux";

const mapDispatchToProps = {
    
}

const mapStateToProps = state => {
    
}

class MinionsMap extends Component {
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
const minionsMap = connect(mapStateToProps, mapDispatchToProps)(MinionsMap);
export default minionsMap;