import React, { Component } from 'react';
import { connect } from 'react-redux';
import Capture from './assests/Capture.JPG';
import { simpleAction } from './actions/simpleAction'
import Toolbar from './components/Toolbar/Toolbar.jsx';
import SideDrawer from './components/SideDrawer/SideDrawer.jsx'
import Backdrop from './components/Backdrop/Backdrop.jsx';
import Footer from './containers/footer/Footer.js'
import { CSSTransition } from "react-transition-group";
import data from './assests/Pics/data';
import Home from "./assests/Pics/homes";
 
const mapStateToProps = state => ({
  ...state
 }); 

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 });

// simpleAction = (event) => {
//   this.props.simpleAction();
// };
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      appearHome: true,
      property: data.properties[0]
    }
  }

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome
    })
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }


  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () =>{
    this.setState((prevState) =>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

backdropClickHandler=()=>{
  this.setState({sideDrawerOpen:false});
};



  render() {
    const {appearHome, property} = this.state;
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }


    return (








// ----------------------------------------page intro
      
    <div className="App" id="c1">
      <header  className="heropanel">
        <CSSTransition 
        in={appearHome}
        appear={true}
        timeout={5000}
        classNames="fade">


      <div className="v-header container">
        <div className="appLogoContainer">
        <a className="entering" href="#c2">Press to enter
          <img src={Capture} className="App-logo" alt="logo" />
          </a>
          </div>
        {/* <div className="AppTitle"> 
          <Example/>     
        </div> */}
        {backdrop}
      </div>
         {/* <Home property={property} /> */}

        </CSSTransition>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/> 
  
    </header>
{/* -------------------------------------------page main */}
    <div className="page1" id="c2">
    <img src={Capture} className="App-logo2" alt="logo" />
        <div className="left">
          <a className="entering" href="#c3">
            <h1>Woah</h1>
          </a>
        </div>
        <div className="right">
          <a className="entering" href="#c4">
              <h1>Woah</h1>
          </a>
        </div>
    </div> 
{/* ------------------------------------main contact and calendir*/}
    <div className="mainBg" id="c3">
     <div className="mainShape">
   <div className="mainShapeTitle">
     <h3> Recent Events!(Api End point get parsed here.)</h3>
        <button hidden="true" onClick={() => this.toggleAppear()}>Appear: {`${appearHome}`}</button>
        <button className="nextButton" onClick={() => this.nextProperty()} disabled={property.index === data.properties.length-1}>&gt;</button>
         <button className="prevButton" onClick={() => this.prevProperty()} disabled={property.index === 0}>&lt;</button>
        <CSSTransition
        in={appearHome}
        appear={true}
        timeout={1000}
        classNames="fade">
        <Home property={property} />

        </CSSTransition>
   </div>
   {/* ----------------------------------------contact and scheduling */}
   <div className="mainShapeTitle2" id="c4">
     <h3> PAst events go in here</h3>
   </div>
   <div className="mainShapeTitle3">
     <h3>> Calendir endpoint goes in here<br></br>,<br></br>,<br></br>,<br></br>,<br></br>,<br></br></h3>
   </div>
   <div className="mainShapeTitle4">


{/*
<?php
// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed"; 
    }
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format"; 
    }
  }
    
  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
    // check if URL address syntax is valid (this regular expression also allows dashes in the URL)
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
      $websiteErr = "Invalid URL"; 
    }
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>*/}


     <h3>Book!(PHP is inserted here to set up an email alert to the manager and schedule the event in the database which then takes it and compiles it onto the calendir</h3>
    <div className="bookInput">
    <form method="post" action="*">{/*<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  */}
      <input className="bookName" placeholder="Name of Organization"></input>{/*   Name: <input type="text" name="name" value="<?php echo $name;?>">
  <span class="error">* <?php echo $nameErr;?></span>
  <br><br> */}
      <input className="bookDate" datatype="date" placeholder="MM/DD/YYYY"></input>{/*   E-mail: <input type="text" name="date" value="<?php echo $date;?>">
  <span class="error">* <?php echo $dateErr;?></span>
  <br><br> */}
      <input className="bookEmail" placeholder="example@example.coms"></input>{/*   E-mail: <input type="text" name="email" value="<?php echo $email;?>">
  <span class="error">* <?php echo $emailErr;?></span>
  <br><br> */}
      <textarea className="bookDescribes" placeholder="Please describe the event"></textarea>{/*   Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
  <br><br> */}
      <input type="submit"  value="Submit your request" />{/**/}
    </form>
    </div>
   </div>
   </div>
   </div>
   <Footer />
   </div>
  );
}
  
};


 

export default connect(mapStateToProps, mapDispatchToProps)(App); 