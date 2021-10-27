import React, {FC, useState} from 'react';
import s from './ToggleButton.module.css'

const ToggleButton: FC<{onClick: (toggle: boolean)=> void}> = ({onClick}) => {
    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle(!toggle);

        if ( typeof onClick === 'function' ) {
            onClick(!toggle);
        }
    }
    return (
        <div onClick={triggerToggle} className={`${s.wrgToggle} ${toggle ? s.wrgToggleChecked : ''}`}>
            <div className={s.wrgToggleContainer}>
                <div className={s.wrgToggleCheck} />
                <div className={s.wrgToggleUncheck} />
            </div>
            <div className={s.wrgToggleCircle} />
            <input className={s.wrgToggleInput} type="checkbox" aria-label="Toggle Button"/>
        </div>
    );
};

export default ToggleButton;