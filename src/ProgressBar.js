import React from "react";
import styled from "styled-components";


const Track = styled.div`
width: 100%;
height: 20px;
background-color: #FFB5FC;
border-radius: 10px;
`

const ProgressInTracker = styled.div`
width: ${props => props.percentage}%;
height: 100%;
background-color: #007BFF;
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