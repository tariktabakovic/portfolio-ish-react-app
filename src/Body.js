import React from 'react';

function Body(props){
    console.log(props.content);
    return (
        <div>
        <p>
            {props.content}
        </p>
      </div>
    );
}


export default Body;