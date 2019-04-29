import React, { Component } from 'react';
import therock from './therock.jpg';
import lizard from './lizard.jpg';
import paper from './paper.png';
import scissors from './scissors.png';
import spock from './spock.jpg';
import './App.css';
import Dialog from './components/Dialog';
import OutsideAlerter from "./components/OutsideAlerter";

/////////functions///////////
var modal =document.getElementById('simpleModal');

var modalBtn=document.getElementById('modalBtn');

var closeBtn=document.getElementsByClassName('closeBtn')[0];

function openModal(){
  modal.style.display = 'block';
}
function closeModal(){
  modal.style.display = 'none';
}

function clickOutside(e){
  if(e.target ==  modal){

  
  modal.style.display = 'none';
  }
}
////////////////////////////////
function Rock(props) {
  return <div >
  <img src={therock} id='rock' />
  </div>;
}

function Paper(props) {
  return <div >
   <img src={paper} id='paper' />
  </div>;
}
function Scisor(props) {
  return <div >
   <img src={scissors} id='scisor' />
  </div>;
}
function Lizard(props) {
  return <div>
   <img src={lizard} id='lizard' />
  </div>;
}
function Spock(props) {
  return <div >
   <img src={spock} id='spock' />
  </div>;
}
function Blank(props) {
  return <div id='blank'></div>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn==="rock") {
    return <Rock />;
  }
  else if(isLoggedIn==="paper"){
    return <Paper />;
  }
  else if(isLoggedIn==="scisors"){
    return <Scisor />;
  }
  else if(isLoggedIn==="lizard"){
    return <Lizard />;
  }
  else if(isLoggedIn==="spock"){
    return <Spock />;
  }


    return <Blank />;
  
  
}
////////////end////////////////

class App extends Component {
  ///////////////////////
  constructor(props){
    super(props)
    this.state={
      input:'',
      aichoice:'',
      whowon:'',
      userscore:0,
      aiscore:0,
      isOpen:false
 
    };
   this.picknum = this.picknum.bind(this);
      this.pickwin = this.pickwin.bind(this);
     this.updateState=this.updateState.bind(this);
  }
 /////////////
 updateState() {
  this.setState({ isOpen: false });
}
 ////////////
  pickwin(){
    let user=this.state.input;
    let ai=this.state.aichoice;

    if(user==="rock" && ai==="scisors" || user==="rock" && ai==="lizard" ){
     //  console.log('user wins');
      document.getElementById("display2").style.background = "#6bff49";
  
      this.setState({ 
   
    whowon:"USER WINS",
        userscore:this.state.userscore+1
 
  
  });
      
       }
    else if(user==="paper" && ai==="rock" || user==="paper" && ai==="spock" ){
           // console.log('user wins');
      document.getElementById("display2").style.background = "#6bff49";
      this.setState({ 
   
    whowon:"USER WINS",
        userscore:this.state.userscore+1
 
  
  });
            }
    else if(user==="scisors" && ai==="paper" || user==="scisors" && ai==="lizard" ){
           // console.log('user wins');
      document.getElementById("display2").style.background = "#6bff49";
      this.setState({ 
   
    whowon:"USER WINS",
        userscore:this.state.userscore+1
 
  
  });
            }
    else if(user==="spock" && ai==="scisors" || user==="spock" && ai==="rock" ){
          
      document.getElementById("display2").style.background = "#6bff49";
      this.setState({ 
   
    whowon:"USER WINS",
        userscore:this.state.userscore+1
 
  
  });
            }
    else if(user==="lizard" && ai==="spock" || user==="lizard" && ai==="paper" ){
           
      document.getElementById("display2").style.background = "#6bff49";
      this.setState({ 
   
    whowon:"USER WINS",
        userscore:this.state.userscore+1
 
  
  });
            }
    
    
    
    else if(user==="scisors" && ai==="scisors" ||user==="rock" && ai==="rock" || user==="paper" && ai==="paper"  || user==="lizard" && ai==="lizard" || user==="spock" && ai==="spock"){
            //console.log('its a draw');
      document.getElementById("display2").style.background = "#fff832";
      this.setState({ 
   
    whowon:"ITS A DRAW"
 
  
  });
            }
    else{
      //console.log('ai wins');
      document.getElementById("display2").style.background = "#ff6831";
      this.setState({ 
   
    whowon:"AI WINS",
        aiscore:this.state.aiscore+1
 
  
  });
    }
    
    
    
  }   
 
  
  /////////////// 
  
  picknum (){
      
     let aipick=["rock","paper","scisors","lizard","spock"];   
      let temp =Math.floor(Math.random() * 5) + 0  ;
  this.setState({
    aichoice:aipick[temp]
  },function(){
   this.pickwin();
 }
               )


}
  
  
  
  
  ////////////
addToInput = val =>{
   // console.log('add function');

 this.setState({ 

    input:val


  },function(){
   this.picknum();
 }
               
              );


 } 

  ////////////////
  render(){
    return(
     
      <div id="mainblock" > 
        <div id='scoreuser'>User Score:{this.state.userscore}
          <div id='userpic'><Greeting isLoggedIn={this.state.input} /></div>
        
        </div>
      <div id="app">
    <div id='calc-wrapper'>
       <div id='display'>MY CHOICE:{this.state.input}</div>
    <div id='row'>
          <div className="button-wrapper" id="seven" onClick={() => this.addToInput("rock")}>Rock</div>
          <div className="button-wrapper" id="eight" onClick={() => this.addToInput("paper")}>Paper</div>
         <div className="button-wrapper" id="nine" onClick={() => this.addToInput("scisors")}>Sc</div>
       <div className="button-wrapper" id="nine" onClick={() => this.addToInput("lizard")}>lizard</div>
       <div className="button-wrapper" id="nine" onClick={() => this.addToInput("spock")}>spock</div>
      
          
          </div>
       <div id='display'>AI CHOICE:{this.state.aichoice}</div>
      <div id='display2'>RESULT:{this.state.whowon}</div>
     <div id='rule-button'>
     

   <button onClick={(e)=>this.setState({isOpen : true})} id="modalBtn" class="button">Open Rules</button>
  
   
   
   </div>
   
  <OutsideAlerter updateParent={ this.updateState.bind(this)}/>
  
      <Dialog isOpen={this.state.isOpen} onClose={(e)=>this.setState({isOpen : false})}>
       

      </Dialog>
      
     

      

       </div>
              
         </div>
         <div id='scoreai'> Ai Score:{this.state.aiscore}
        <div id='userpic'><Greeting isLoggedIn={this.state.aichoice} /></div>
        </div>
        
          
   
      
          
          
        </div>
        
    )
  }

}

export default App;
