import React from 'react';
import Card from './Card';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = ({property}) => {

    return(
        <div className="page">
            <section>
                <h1>Instagram Hook in Goes here. So your instagram will autoupdate your site.</h1>
            </section>
            
            <TransitionGroup className="card-container">
                <CSSTransition
                    key={property._id}
                    timeout={4500}
                    classNames="slide"
                >
                    <Card property={property} />
                </CSSTransition>
            </TransitionGroup>

        </div>   
    )
}

export default Home;