import React from 'react';
import './homepage.styles.scss';
import {Directory} from '../Components/Directory/Directory';

export const HomePage=()=>
{
    return(
    <div className='homepage'>
        <Directory/>
    </div>
    );
}