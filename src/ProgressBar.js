import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Track = styled.div`
width: 100%;
height: 20px;
background-color: #222;
border-radius: 10px;
box-shadow: inset 0 0 5px #000;
`

const ProgressInTracker = styled.div`
width: ${props => props.percentage}%;
height: 100%;
background-color: #6bccf9;
border-radius: 8px;
`

class ProgressBar extends React.Component {
    render () {
        return (
            <Track>
            <ProgressInTracker percentage={this.props.percentage} />
            </Track>
        );
    }
}

export default ProgressBar;