import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Plan extends React.Component {
  constructor(props) {
    super(props);

    if(localStorage.getItem('formData')) {
    this.state = JSON.parse(localStorage.getItem('formData')); //in this case the state is just for input values
    } else {
      this.state = {
      exit: '',
      wallet:'',
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
    }
  }

  this.handleInput1Change = this.handleInput1Change.bind(this);
  this.handleInput2Change = this.handleInput2Change.bind(this);
  this.handleInput3Change = this.handleInput3Change.bind(this);
  this.handleInput4Change = this.handleInput4Change.bind(this);
  this.handleInput5Change = this.handleInput5Change.bind(this);
  this.handleInput6Change = this.handleInput6Change.bind(this);
  this.handleInput7Change = this.handleInput7Change.bind(this);
  this.handleInput8Change = this.handleInput8Change.bind(this);
  this.handleInput9Change = this.handleInput9Change.bind(this);
  this.handleInput10Change = this.handleInput10Change.bind(this);
  this.handleInput11Change = this.handleInput11Change.bind(this);
  this.handleInput12Change = this.handleInput12Change.bind(this);
  this.handleInput13Change = this.handleInput13Change.bind(this);
  this.handleInput14Change = this.handleInput14Change.bind(this);
  this.handleInput15Change = this.handleInput15Change.bind(this);
  this.handleInput16Change = this.handleInput16Change.bind(this);
  this.handleInput17Change = this.handleInput17Change.bind(this);
  this.handleInput18Change = this.handleInput18Change.bind(this);
  this.handleInput19Change = this.handleInput19Change.bind(this);
  this.handleInput20Change = this.handleInput20Change.bind(this);
  this.handleInput21Change = this.handleInput21Change.bind(this);
  this.handleInput22Change = this.handleInput22Change.bind(this);
  this.handleInput23Change = this.handleInput23Change.bind(this);

  }
  handleInput1Change(event) {
    this.setState({ exit: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput2Change(event) {
    this.setState({ wallet: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput3Change(event) {
    this.setState({ neighbor: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput4Change(event) {
    this.setState({ child_code: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput5Change(event) {
    this.setState({ location_one: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput6Change(event) {
    this.setState({ location_two: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput7Change(event) {
    this.setState({ room: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput8Change(event) {
    this.setState({ extra_money: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput9Change(event) {
    this.setState({ extra_docs: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput10Change(event) {
    this.setState({ backup_one: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput11Change(event) {
    this.setState({ backup_two: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput12Change(event) {
    this.setState({ extra_clothes: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput13Change(event) {
    this.setState({ review: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput14Change(event) {
    this.setState({ also: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput15Change(event) {
    this.setState({ partner_using: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput16Change(event) {
    this.setState({ also_two: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput17Change(event) {
    this.setState({ protect_one: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput18Change(event) {
    this.setState({ protect_two: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }
  handleInput19Change(event) {
    this.setState({ state_police: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }handleInput20Change(event) {
    this.setState({ county_police: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }handleInput21Change(event) {
    this.setState({ county_sheriff: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }handleInput22Change(event) {
    this.setState({ shelter_one: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }handleInput23Change(event) {
    this.setState({ shelter_two: event.target.value }, () => {
      localStorage.setItem('formData', JSON.stringify(this.state));
    });
  }




  render() {
    return (
      <div>
      <h1>Personalized Safety Plan</h1>

                  <p> The following steps can help plan for and increase your safety and prepare for the possibility of potential violence. Although you do not have control over your partner's violence, you do have a choice about how to respond to him/her and how
                      to best get yourself and your children to safety.</p>
                      <form>
<div className="plan">
                          <p> Step 1: SAFETY DURING A VIOLENT INCIDENT. Women cannot always avoid violent incidents. In order to increase safety, battered women may use a variety of strategies.</p>
                          <p>I can use some or all of the following strategies: </p>

        <label>
          If I decide to leave, I will:
          <input
            name="exit"
            type="text"
            value={this.state.exit}
            onChange={this.handleInput1Change} />
            (Practice how to get out safely. What doors, windows, elevators, stairwells or fire escapes would you use?)
        </label>
        <br />
        <label>
          I can keep my purse and car keys ready and put them:
          <input
            name="wallet"
            type="textarea"
            value={this.state.wallet}
            onChange={this.handleInput2Change} />
            (place) in order to leave quickly.
        </label>
        <label>
          I can tell:
          <input
            name="neighbor"
            type="text"
            value={this.state.neighbor}
            onChange={this.handleInput3Change} />
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
            onChange={this.handleInput4Change} />
            as my code for my children or my friends so they can call for help.
        </label>
        <label>
          If I have to leave my home, I will go:
          <input
            name="location_one"
            type="text"
            value={this.state.location_one}
            onChange={this.handleInput5Change} />
            (Decide this even if you don't think there will be a next time).
        </label>
        <label>
          If I cannot go to the location above, then I can go to
          <input
            name="location_two"
            type="text"
            value={this.state.location_two}
            onChange={this.handleInput6Change} />
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
            onChange={this.handleInput7Change} />
            (Try to avoid arguments in the bathroom, garage, kitchen, near weapons or in rooms without access to an outside door).
        </label>
        <label>I will use my judgment and intuition. If the situation is very serious, I can give my partner what he/she wants to calm him/her down. I have to protect myself until I/we are out of danger. </label>
</div>
<br></br>
<div className="plan">
      <p>Step 2: SAFETY WHEN PREPARING TO LEAVE. Battered women frequently leave the residence they share with the battering partner. Leaving must be done with a careful plan in order to increase safety. Batterers often strike back when
                            they believe that a battered woman is leaving the relationship. </p>
      <p>I can use some or all the following safety strategies: </p>


        <label>
          I will leave money and an extra set of keys with
          <input
            name="extra_money"
            type="text"
            value={this.state.extra_money}
            onChange={this.handleInput8Change} />
          so that I can leave quickly.
        </label>
        <br />
        <label>
          I will keep copies of important papers and documents or an extra set of keys at
          <input
            name="extra_docs"
            type="text"
            value={this.state.extra_docs}
            onChange={this.handleInput9Change} />
        </label>

        <p>Other things I can do to increase my independence include: </p>
      <label>I can keep change for phone calls on me at all times. I understand that if I use my telephone credit card, the following month the telephone bill will tell my batterer those numbers that I called after I left. To keep my telephone
                                communications confidential, I must either use coins or I might get a friend to permit me to use their telephone credit card for a limited time when I first leave. </label>
        <label>
          I will check with
          <input
            name="backup_one"
            type="text"
            value={this.state.backup_one}
            onChange={this.handleInput10Change} />
        and
        </label>
        <label>
          to see who would be able to let me stay with them or lend me some money in an emergency.
          <input
            name="backup_two"
            type="text"
            value={this.state.backup_two}
            onChange={this.handleInput11Change} />

        </label>
        <label>
          I can leave extra clothes with
          <input
            name="extra_clothes"
            type="text"
            value={this.state.extra_clothes}
            onChange={this.handleInput12Change} />
            .
        </label>
        <label>
          I can also teach some of these strategies to some/all of my children
        </label>.
        <label>
        I will sit down and review my safety plan every
          <input
            name="review"
            type="text"
            value={this.state.review}
            onChange={this.handleInput13Change} />
            in order to plan the safest way to leave the residence.
        </label>

        <label>I will rehearse my escape plan and, as appropriate, practice it with my children.</label>
      </div>
      <br></br>
        <div className="plan">
        <p>Step 3: SAFETY AND DRUG OR ALCOHOL USE. Most people in this culture use alcohol. Many use mood-altering drugs. Much of this use is legal and some is not. The legal outcomes of using illegal drugs can be very hard on a battered woman, may hurt
            her relationship with her children and put her at a disadvantage in other legal actions with her battering partner. Therefore, women should carefully consider the potential cost of the use of illegal drugs. But beyond this, the use of any
            alcohol or other drug can reduce a woman's awareness and ability to act quickly to protect herself from her battering partner. Furthermore, the use of alcohol or other drugs by the batterer may give him/her an excuse to use violence. Therefore,
            in the context of drug or alcohol use, a woman needs to make specific safety plans. </p>

            <p>If drug or alcohol use has occurred in my relationship with the battering partner, I can enhance my safety by some or all of the following:
            </p>
            <label>If I am going to use, I can do so in a safe place and with people who understand the risk of violence and are committed to my safety. </label>
            <label>
          I can also
              <input
                name="also"
                type="text"
                value={this.state.also}
                onChange={this.handleInput14Change} />
                  .
            </label>
        <label>
          If my partner is using, I can
          <input
            name="partner_using"
            type="text"
            value={this.state.partner_using}
            onChange={this.handleInput15Change} />
            .
        </label>
        <label>
        I might also
          <input
            name="also_two"
            type="text"
            value={this.state.also_two}
            onChange={this.handleInput16Change} />
            .
        </label>
        <label>
        To safeguard my children, I might
          <input
            name="protect_one"
            type="text"
            value={this.state.protect_one}
            onChange={this.handleInput17Change} />

        </label>
        <label>
      and
          <input
            name="protect_two"
            type="text"
            value={this.state.protect_two}
            onChange={this.handleInput18Change} />
        </label>
      </div>
<br></br>
    <div className="plan">
        <p>Items with asterisks on the following list are the most important to take. If there is time, the other items might be taken, or stored outside the home. These items might be placed in one location, so that if we have to leave in a hurry, I can
                    grab them quickly.
                     When I leave, I should have:</p>

                    <ul>
                        <li>* Identification for myself</li>
                        <li>*Children's birth certificate</li>
                        <li>*My birth certificate</li>
                        <li>*Social security cards</li>
                        <li>*School and vaccination records</li>
                        <li>*Money</li>
                        <li>*Checkbook, ATM (Automatic Tellers Machine) card, Credit cards</li>
                        <li>*Keys - house/car/office</li>
                        <li>*Driver's license and registration</li>
                        <li>*Medication</li>
                        <li>Welfare identification, work permits, Green Card, Passport, divorce papers</li>
                        <li>Medical records - for all family members</li>
                        <li>Lease/rental agreement, house deed, mortgage payment book</li>
                        <li>Bank books, Insurance papers</li>
                        <li>Small saleable objects</li>
                        <li>Address book, pictures, jewelry</li>
                        <li>Children's favorite toys and/or blankets</li>
                        <li>Items of special sentimental value</li>
                    </ul>
                  </div>
                  <br></br>
                  <div className="plan">
                    <ul>
                      <li>
                    <label>
                  State police
                      <input
                        name="state_police"
                        type="text"
                        value={this.state.state_police}
                        onChange={this.handleInput19Change} />

                    </label>
                    </li>
                    <li>
                    <label>
                     County police
                        <input
                          name="county_police"
                          type="text"
                          value={this.state.county_police}
                          onChange={this.handleInput20Change} />

                      </label>
                      </li>
                      <li>
                      <label>
                       County Sheriff
                          <input
                            name="county_sheriff"
                            type="text"
                            value={this.state.county_sheriff}
                            onChange={this.handleInput21Change} />

                        </label>
                        </li>
                        <li>
                         <label>
                        Shelter
                            <input
                              name="shelter_one"
                              type="text"
                              value={this.state.shelter_one}
                              onChange={this.handleInput22Change} />
                          </label>
                        </li>
                          <li>
                          <label>
                          Shelter
                              <input
                                name="shelter_two"
                                type="text"
                                value={this.state.shelter_two}
                                onChange={this.handleInput23Change} />

                            </label>
                          </li>
                          </ul>

                          </div>


      </form>
  <Link to="/dashboard" className="btn btn-lg btn-success" type='submit' role="button">Save</Link>

    </div>
    );
  }
}
