import React from "react";
import styled from "styled-components";
import "./ProgressBar.css"


const Track = styled.div`
max-width: 70%;
width: 1000px;
height: 20px;
background-color: #FFB5FC;
border-radius: 10px;
margin: 0px 10px 80px 10px;
`

const ProgressInTracker = styled.div`
width: ${props => props.percentage}%;
height: 100%;
background-color: #007BFF;
border-radius: 8px;
`

class ProgressBar extends React.Component {
    render() {
        return (
            <Track className="track">
                <ProgressInTracker percentage={this.props.percentage} />
            </Track>
        );
    }
}

export default ProgressBar;