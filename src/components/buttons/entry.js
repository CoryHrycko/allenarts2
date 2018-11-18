import "react" from React;
// const Greeting = React.createClass({
//     render:()=>{
//         let classMale = "";
//         let classFemale = "";

//         if(this.props.gender === "male"){
//             classFemale = "displayNone";
//         }
//         else{
//             classMale = "displayNone";
//         }
//         return (
//             <div>
//                 <div>Greeting</div>

//                 <div className={classFemale}>Hello Mrs. Jones
//                     <div className="appLogoContainer">
//                         <button className="entering" onclick="entering()">Press to enter
//                             <img src={Capture} className="App-logo" alt="logo" />
//                         </button>
//                     </div>
//                 </div>
//                 <div className={classMale}>Hello Mr. Jones</div>
//             </div>
//         );
//     }
// });


constructor() {
    super();

    this.state={
        hideToolTip:false,
    };
};
handleChange(e) {
    this.setState({hideToolTip: true});
};