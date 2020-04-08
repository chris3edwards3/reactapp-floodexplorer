import React from 'react';
import './Title.css';

function Title() {
    // let testLink="data:image/png;base64,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"


    return (
        <div id="Title">
            <h2>Flood Explorer</h2>
            <h4>explore different flood map layers.</h4>
            {/*<img src={testLink} />*/}
        </div>
    )
}

export default Title;