import useIncrement from '../hooks/useIncrement';
import React from 'react';

export const ShowIncrement = () => {
    const { count, increment, decrement } = useIncrement({ initialValue: 4 });

    return (
        <div className='flex flex-col gap-3'>
            <h2 className='text-center'>Compteur: {count}</h2>
            <div className='flex gap-2'>
                <button className=' bg-green-500 py-2 px-4 rounded-md' onClick={increment}>Increment</button>
                <button className={`py-2 px-4 rounded-md ${count === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500'}`} onClick={decrement} disabled={count === 0}>Décrement</button>
            </div>
        </div>
        
    );
};
