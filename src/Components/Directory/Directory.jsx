import React from 'react';
import { MenuItem } from '../MenuItem/MenuItem';
import './Directory.scss';
export class Directory extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
            categories:[{
                    title:'shoes',
                    id:'1'

                },
                {
                    title:'shirts',
                    id:'2'
                },
                {
                    title:'Pants',
                    id:'3'
                },
                {
                    title:'Women',
                    id:'4',
                    size:'large'
                },
                {
                    title:'Mens',
                    id:'5',
                    //size is to be added to give an element 'menuItem' a styling class
                    size:'large'
                }
            ]}
    }
    render()
    {
        return(
            <div className='directory-menu'>
                {
                    this.state.categories.map((category)=>(<MenuItem key={category.id} Title={category.title} size={category.size}/>)
                    )}
            </div>
        );
    }
    
}