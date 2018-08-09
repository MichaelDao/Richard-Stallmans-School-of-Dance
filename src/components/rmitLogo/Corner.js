import React from 'react';

import './style.css';

var rmitLogo = require('../../assets/RMIT_University_Logo.svg.png');

export default () => (
    <a href="https://www.rmit.edu.au/" className="rmit-corner" aria-label="Proudly represented by RMIT">
        <img src={rmitLogo} width="170" height="100%"/>
    </a>
);