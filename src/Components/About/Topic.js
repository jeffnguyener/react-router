import React from 'react';

const Topic = (match) => {
    return (
        <h2>{match.params.topic}</h2>
    )
}

export default Topic;