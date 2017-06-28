import React from 'react';
import { Link } from 'react-router-dom';


export default class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <h1>Plan Page Yo</h1>
        <div className='plan'></div>
        <h1>Personalized Safety Plan</h1>
        <div className='step'>
            <p> The following steps can help plan for and increase your safety and prepare for the possibility of potential violence. Although you do not have control over your partner's violence, you do have a choice about how to respond to him/her and how
                to best get yourself and your children to safety.</p>
        </div>
      </div>
    );
  };
}
