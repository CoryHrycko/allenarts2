import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

class AppContainer extends Component {
    render() {
        return (
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        );
    }
};
