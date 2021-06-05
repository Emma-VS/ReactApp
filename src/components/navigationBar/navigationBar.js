import React from 'react';
import './navigationBar.css';
import Logotype from '../../shared/images/logotype.svg';
import { useHistory } from 'react-router-dom';

export const NavigationBar = () => {
    const History = useHistory();

    return(
        <div className='NavBarContainer'>
            <img onClick={() => History.push('/')}
            className='logo' 
            src={Logotype} 
            alt="Error..."/>
            <span onClick={() => History.push('/signin')}
            className='signIn'>Sign in</span>
        </div>
    )
}