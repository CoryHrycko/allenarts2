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
    <div className="App">
      <header  className="heropanel">
        <CSSTransition
        in={appearHome}
        appear={true}
        timeout={5000}
        classNames="fade">


      <div className="v-header container">
        <div className="appLogoContainer">
          <img src={Capture} className="App-logo" alt="logo" />
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
    <div className="mainBg">
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
   <div className="mainShapeTitle2">
     <h3> PAst events go in here</h3>
   </div>
   <div className="mainShapeTitle3">
     <h3>> Calendir endpoint goes in here<br></br>,<br></br>,<br></br>,<br></br>,<br></br>,<br></br></h3>
   </div>
   <div className="mainShapeTitle4">
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