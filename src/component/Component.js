import React, { Component } from "react";
import { connect } from "react-redux";

const mapDispatchToProps = {
    
}

const mapStateToProps = state => {
    
}

class Component extends Component {
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
const component = connect(mapStateToProps, mapDispatchToProps)(Component);
export default component;