import React from 'react';
import s from "./ProfileInfo.module.css"

const ProfileInfo= () =>{
    return (
        <div >
            <div>
                <img className={s.ric}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Rickandmortylogoru.png/1200px-Rickandmortylogoru.png"
                    alt=""/>
            </div>
            <div className={s.dexcriptionBlok}>
                ava+description
            </div>
       </div>
    )
}
export default ProfileInfo;