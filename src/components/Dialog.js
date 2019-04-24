import React, { Component } from 'react';
import './dialog.css';
import rulespic from './rulespic.png';
import PropTypes from 'prop-types';
import OutsideAlerter from "./OutsideAlerter";


class Dialog extends Component{
  
   
      

    render(){
        let dialog = (
           
             
<div id="simpleModal" class="modal" ref={this.setWrapperRef} >

<div class="modal-content">
<OutsideAlerter>
    <div class="modal-header" >
            <span class="closeBtn" onClick={this.props.onClose}>&times;</span>
            <h2>Rules</h2>
    </div>
    <div class="modal-body"> 
   
   <img src={rulespic} id='rulespic' />
  


    </div>
    <div class="modal-footer">
        <h3>Rules</h3>
    </div>
    </OutsideAlerter>
</div>    

</div>
 


        );
        if(!this.props.isOpen){
            dialog =null;
        }
        return(
            <div >
              {dialog}  
            </div>
            

        );

        
    }

}

  

export default Dialog;