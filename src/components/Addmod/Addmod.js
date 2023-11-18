import React, { useState } from 'react';
import './Addmod.css'

const Addmod = () => {
    const [modal,setModal] =useState(false);
        const toggleModel =()=>{
            setModal(!modal)
            
        }
        if(modal){
           document.body.classList.add('active-modal') 
        }else{
            document.body.classList.remove('active-modal')
        }
         
    return (
        <>
        <button onClick={toggleModel} className='btn-modal' >ajouter</button>
        {modal && (
        <div className="modal">
            <div className="modal-content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem expedita sint suscipit commodi placeat! Laboriosam, dolorem. Excepturi tenetur dolore, repellat, saepe rem assumenda reprehenderit omnis accusantium fugiat id vitae.
                Quibusdam mollitia nam accusantium corporis numquam delectus laudantium aliquam rem facere iste fugiat aliquid quod aspernatur fuga illo in, perspiciatis veritatis animi. At tempora dolor quia facilis minima distinctio omnis!
                Asperiores eligendi tenetur consequuntur beatae amet aperiam tempora reiciendis laborum. Eveniet quibusdam in tempora. Sint similique et fugit natus quasi inventore blanditiis culpa, odit, iure voluptatum omnis illum veritatis quam!</p>
            </div>
            <button onClick={toggleModel} className='model-close' >close</button>
        </div>
)}


        </>
        
    );
};

export default Addmod;



