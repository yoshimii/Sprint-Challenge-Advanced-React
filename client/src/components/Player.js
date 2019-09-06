import React from 'react';
import Axios from 'axios';

class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        Axios.get(' http://localhost:5000/api/players').then((res) => {
            console.log(res.data);
        }).catch( err => console.log(err))
    }

    render() {
        return(
           <div>Hello.</div>
        )
    };
}


export default Player;