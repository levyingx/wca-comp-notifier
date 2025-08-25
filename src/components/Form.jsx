import { useState } from 'react'

// Name, email, city (+), country (+), event (later feature)[+]

export default function Form() {
    return (
        <form className='flex flex-col justify-center items-center w-full h-full bg-neutral-100'>
            <label htmlFor="name">Name</label>
            <input type="text" 
                id='name' 
                name='name'
                placeholder='Levy' 
                required 
            />

            <label htmlFor="email">Email</label>
            <input type="text" 
                id='email' 
                name='email'
                placeholder='email@example.com' 
                required 
            />

            <label htmlFor="country">Country</label>
            <input type="text" 
                id='country' 
                name='country'
                placeholder='Brazil' 
                required 
            />

            <label htmlFor="city">City</label>
            <input type="text" 
                id='city' 
                name='city'
                placeholder='Natal' 
                required 
            />
        </form>
    )
}