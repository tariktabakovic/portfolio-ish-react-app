import React from 'react';

class Nav extends React.Component{
    constructor(props){
        // Register Nav as one of the React Components on the page.
        super(props);
        this.state= {
            isOpen: false
        }
    }
    render (){
        return (
                this.state.isOpen ?
            <ul>
                <button onClick = {this._toggleMenu}>Close Toggle</button>
                {
                this.props.linkNames.map((item, index)=>{
                    return <li>{item}</li>
                })
                }
                {/* <li>{linkNames[0]}</li>
                <li>{linkNames[1]}</li>
                <li>{linkNames[2]}</li> */}
            </ul>
            : 
            <a onClick = {this._toggleMenu}>Hamburgaa</a>
        );
    };
    
    _toggleMenu = ()=>{
        this.setState({
            isOpen: !this.state.isOpen
        }, () => {
            console.log('menu toggled!!');
        });
    }
}


export default Nav;