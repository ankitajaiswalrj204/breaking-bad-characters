

import React,{useState} from 'react';
import Profile from './Profile'

const Character=(props)=>{
    const{item}=props;
    const [show,setShow]=useState(false);
    const onSingleClick=()=>{
        setShow(!show);
    }
    
    return (
    <div >
        <div className="card w-100 " >
                <img src={item.img} alt="not found"/>
                    <div className="Biodata">
                        <div className="row" id="bio-heading">
                            <div className="col-md-7" >Biodata</div>
                            <div className="col-md-5">
                                <button onClick={onSingleClick} className="btn  click-btn"><i className="fas fa-caret-square-down"></i></button>
                            </div>

                        </div>
                        
                        {
                            show? <Profile item={item} className="Profile-item"/> :null
                        }
                    </div>
            
                
        </div>
    </div>
   
    )
}
export default Character;