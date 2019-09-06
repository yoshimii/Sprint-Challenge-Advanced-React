import React from 'react';
import Axios from 'axios';
import Player1 from './Player1';

class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            players: [],
            rapinoe:[]
        };
    }

    componentDidMount() {
        Axios.get(' http://localhost:5000/api/players').then((res) => {
            this.setState({players: res.data, rapinoe: res.data[1].name })
        }).catch( err => console.log(err))
    }

    render() {
        return(
           <section className='players'>
                <p data-testid='rapinoe'>I love: {this.state.rapinoe}</p>
               <Player1 data={this.state.players}/>
           </section>

        )
    };
}


export default Player;