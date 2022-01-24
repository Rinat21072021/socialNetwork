import React from 'react';
import s from "./ProfileInfo.module.css"
import {Preloader} from "../../../common/Preloader/Preloader";

type ProfileInfoType={
    profile:any
}
const ProfileInfo= (props:ProfileInfoType) =>{
    if(!props.profile){
       return <Preloader/>

    }
    return (
        <div >
            <div>
                <img className={s.ric}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Rickandmortylogoru.png/1200px-Rickandmortylogoru.png"
                    alt=""/>
            </div>
            <div className={s.dexcriptionBlok}>
                <img src={props.profile.photos.large} alt=""/>
                ava+description
            </div>
       </div>
    )
}
export default ProfileInfo;