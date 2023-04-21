import React from 'react'
import FigmaLandDark from '../../drawable/FigmaLandDark.svg';
import FigmaLandLight from '../../drawable/FigmaLandLight.svg';

function Logo({isDark}) {
    return (
        <img src={isDark ? FigmaLandDark : FigmaLandLight} alt='ga'/>
    )
}

export default Logo
