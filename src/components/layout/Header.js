import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>this is my header</h1>
        </header>

        )
}

const headerStyle = {
    background: '#333',
    color:'#fff',
    textAlign:'center'
}
export default Header;