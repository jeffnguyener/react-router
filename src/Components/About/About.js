import React from 'react';
import { Link, Route } from 'react-router-dom';
import Topic from './Topic'

const About = (match) => {
    return (
        <div>
            <h1>About</h1>
            <Link to={`${match.path}/story`}>Story</Link>
            <Link to={`${match.path}/faq`}>FAQ</Link>
            <Route path={`${match.path}/:topic`} component={Topic} />
        </div>
    )
}

export default About;