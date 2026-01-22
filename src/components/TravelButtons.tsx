import { useState } from 'react';

export const TravelButtons = ({ btns, sendSelected }: any) => {
    const [selected, setSelected] = useState(null);

    const toggle = ({ type }: any) => {
        if (selected !== type) {
            setSelected(type);
            sendSelected(type);
        } else {
            setSelected(null);
            sendSelected(null);
        }
    };

    return (
        <div>
            {
                btns.map(({type, select, deselect}: any, id: any) => (
                    <button key={id} className='size-15' onClick={() => toggle({type})}>
                        {
                            selected === type ? (
                                select
                            ) : (
                                deselect
                            )
                        }
                    </button>
                ))
            }
        </div>
    )
}