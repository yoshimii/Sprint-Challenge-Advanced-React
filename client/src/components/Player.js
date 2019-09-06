import React from 'react';
import Axios from 'axios';
import Player1 from './Player1';

class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        Axios.get(' http://localhost:5000/api/players').then((res) => {
            this.setState({players: res.data })
        }).catch( err => console.log(err))
    }

    render() {
        return(
           <section className='players'>
               <Player1 data={this.state.players} />
           </section>

        )
    };
}


export default Player;