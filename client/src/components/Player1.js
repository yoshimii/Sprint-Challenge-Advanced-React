import React from 'react';
import useFunMode from '../hooks/FunMode';

function Player1(props) {
    const [ funMode, setFunMode ] = useFunMode();

    const [inputValues, handleClick, handleSubmit] = useFunMode(
        'greenBackgournd', 
        {}
    );

    return (
        <>
        {props.data.map(player => (
        <div key={player.id} className="player">
            <button onClick={setFunMode}>Have fun!</button>
         <div>
            <h3>{player.name}</h3>
            <p>{player.country}</p>
          </div>
        </div>
      ))}
        </>
    )
}

// class Player1 extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             player: props.data
//         }
//     }

//     render() {
//         return(
//             <div>
//                 <h1>Name: {this.props.name}</h1>
//                 <p>Country: { this.props.country}</p>
//             </div>
//         );
//     }

// }



export default Player1;