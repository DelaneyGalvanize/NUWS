import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


// export default class Plan extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       exit: '',
//       // password: ''
//     };
//
//     this.handleChangeExit = this.handleChangeExit.bind(this);
//     // this.handleChangePassword = this.handleChangePassword.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChangeExit(event) {
//     this.setState({
//       exit: event.target.value
//     });
//   }
//
//   handleSubmit(event) {
//     axios.post('/api/questions', {
//       exit: this.state.exit,
//       // password: this.state.password
//     })
//     .then((response) => {
//       console.log('it worked!');
//     })
//     .catch((error) => {
//       console.error(error);
//     })
//     // event.preventDefault();
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Plan Page Yo</h1>
//         <div className='plan'></div>
//                           <Link to="/dashboard" className="btn btn-lg btn-success" href="#" role="button">Save</Link>
//                         </p> */}
//                         <button type="submit" className="btn btn-default">Log In</button>
//       </div>
//     );
//   };
// }

export default class Plan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exit: '',
      wallet: '',
      neighbor: '',
      child_code:'',
      location_one:'',
      location_two:'',
      room:'',
      extra_money:'',
      extra_docs:'',
      backup_one:'',
      backup_two:'',
      extra_clothes:'',
      review:'',
      also:'',
      partner_using:'',
      also_two:'',
      protect_one:'',
      protect_two:'',
      state_police:'',
      county_police:'',
      county_sheriff:'',
      shelter_one:'',
      shelter_two:''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
      <h1>Personalized Safety Plan</h1>
              {/* <div className='step'> */}
                  <p> The following steps can help plan for and increase your safety and prepare for the possibility of potential violence. Although you do not have control over your partner's violence, you do have a choice about how to respond to him/her and how
                      to best get yourself and your children to safety.</p>
              {/* </div> */}
                          <p> Step 1: SAFETY DURING A VIOLENT INCIDENT. Women cannot always avoid violent incidents. In order to increase safety, battered women may use a variety of strategies.</p>
                          <p>I can use some or all of the following strategies: </p>
      <form>
        <label>
          If I decide to leave, I will:
          <input
            name="exit"
            type="text"
            value={this.state.exit}
            onChange={this.handleInputChange} />
            (Practice how to get out safely. What doors, windows, elevators, stairwells or fire escapes would you use?)
        </label>
        {/* <p> (Practice how to get out safely. What doors, windows, elevators, stairwells or fire escapes would you use?) </p> */}
        <br />
        <label>
          I can keep my purse and car keys ready and put them:
          <input
            name="wallet"
            type="text"
            value={this.state.wallet}
            onChange={this.handleInputChange} />
            (place) in order to leave quickly.
        </label>
        <label>
          I can tell:
          <input
            name="neighbor"
            type="text"
            value={this.state.neighbor}
            onChange={this.handleInputChange} />
            about the violence and request they call the police if they hear suspicious noises coming from my house.
        </label>
        <label>
        I can teach my children how to use the telephone to contact the police and the fire department.
        </label>
        <label>
          I will use
          <input
            name="child_code"
            type="text"
            value={this.state.child_code}
            onChange={this.handleInputChange} />
            as my code for my children or my friends so they can call for help.
        </label>
        <label>
          If I have to leave my home, I will go:
          <input
            name="location_one"
            type="text"
            value={this.state.location_one}
            onChange={this.handleInputChange} />
            (Decide this even if you don't think there will be a next time).
        </label>
        <label>
          If I cannot go to the location above, then I can go to
          <input
            name="location_two"
            type="text"
            value={this.state.location_two}
            onChange={this.handleInputChange} />
        </label>
        <label>
          I can also teach some of these strategies to some/all of my children
        </label>.
        <label>
        When I expect we are going to have an argument, I will try to move to a space that is lowest risk, such as
          <input
            name="room"
            type="text"
            value={this.state.room}
            onChange={this.handleInputChange} />
            (Try to avoid arguments in the bathroom, garage, kitchen, near weapons or in rooms without access to an outside door).
        </label>
        <label>I will use my judgment and intuition. If the situation is very serious, I can give my partner what he/she wants to calm him/her down. I have to protect myself until I/we are out of danger. </label>
      </form>
    </div>
    );
  }
}
