import { useState } from 'react';

export const PlusMinusInput = ({ label }: any) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => setCount(count => count + 1);
    const decrementCount = () => {
        if (count > 0) {
            setCount(count => count - 1);
        }
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <p>{label}</p>
            <div className='flex gap-2'>
                <button className='mt-0.5 size-6' onClick={decrementCount}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8z"/></svg>
                </button>
                <p>{count}</p>
                <button className='mt-0.5 size-6' onClick={incrementCount}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8z"/></svg>
                </button>
            </div>
        </div>
    )
}