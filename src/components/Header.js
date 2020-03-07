import React from "react";

import "./Header.css";

function Header(props) {

const {parts:{conversation:{participants:arrayOfPpl}}} = props
const {parts:{currentUser:{username:whosThis}}} = props
  //console.log(arrayOfPpl) //returns the array of participants
  //console.log(whosThis) //returns elaine
  return ( <header>{
  
  arrayOfPpl.filter(guests=> {
    
    if(guests.username !== whosThis) {
      
    }
    

  })
    
    
    }
    </header>
  );
}

export default Header;
