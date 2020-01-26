import React, { Component } from 'react';
import api from '../../utils/api';
import Countdown from "react-countdown";
import moment from "moment";

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
    return <div> The Winner is Chosen: {winner}</div>
    } else {
      return <span>{days}:{hours}:{minutes}:{seconds}</span>;
    }
  }

  render() {
    return (
      <div>
        <div>
        You have entered the game!
        </div>
        <div>
          Timer: 
          <Countdown date={Date.now() + this.state.time + 86400000} renderer={this.renderer} />

        </div>
        {/* <div>
          The Winner is:
          
        </div> */}
      </div>
    )
  }
}
