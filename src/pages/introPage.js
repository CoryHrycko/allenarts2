import "react" from React;
import { CSSTransition } from "react-transition-group";

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