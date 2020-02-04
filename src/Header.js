import React from 'react';

function Header ({headerContent}){
    console.log(headerContent)
    return (
        <header>
            <h1>{headerContent}</h1>
        </header>
    );
}


export default Header;