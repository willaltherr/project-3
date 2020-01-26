import React, { Component } from 'react';
import api from '../../utils/api';
import Countdown from "react-countdown";
import moment from "moment";
import  "./joingame.css";

export default class joingame extends Component {
  state = {
      game: {},
      time: 0,
      users: [] 
    }

  componentDidMount() {
    api.getGame(this.props.match.params.id)
    .then(res => {
      //console.log(res);
      this.setState({
        game: res.data,
        time: (parseInt(moment(res.data.time).format("x"))) - (Date.now())
      });
      console.log(this.state.game);
      console.log("time", this.state.time);
      console.log(typeof Date.now());
    })
    .catch(err => {
      console.log(err);
    })

    api.getUsers()
    .then(user => {
      //console.log(user.data[Math.floor(Math.random()*user.data.length)]);
      this.setState({users: user.data.map(el => el.name)})
    })
    .catch(err => console.log(err));

      
  }

  

  renderer = ({days, hours, minutes, seconds, completed}) => {
    if(completed) {
      const winner = this.state.users[Math.floor(Math.random()*this.state.users.length)];
      console.log(winner);
    return <div className="winnerDiv"> <h3 className="chosen">Congratulations to: </h3> {winner}</div>
    } else {
      return <span>{days}:{hours}:{minutes}:{seconds}</span>;
    }
  }

  render() {
    return (
      <div className="bigdiv">
        <div className="joinPage">
        
        </div>
        <div className="joinPage">
          <h2>You have entered the game!</h2>
          <h3 className="timer">A winner will be chosen in:  </h3>
          <Countdown date={Date.now() + this.state.time + 86400000} renderer={this.renderer} />
            <h3 className="timer">Days | Hours | Minutes | Seconds</h3>
        </div>
        {/* <div>
          The Winner is:
          
        </div> */}
      </div>
    )
  }
}
