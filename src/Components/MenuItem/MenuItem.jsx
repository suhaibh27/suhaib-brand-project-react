import React from 'react';
import './MenuItem.scss';

export const MenuItem=({Title, size})=>
{
    return(
        <div className={`${size} menu-item `}>
                <div className='content'>
                    <h1 className='title'>
                        {Title}
                    </h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
        </div>
    );
}