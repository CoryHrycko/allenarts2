import { Parallax } from 'react-scroll-parallax';
 
const ParallaxImage = () => (
    <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
        <Image src={"https://images.unsplash.com/photo-1538402074774-8e624f3f7e5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0293f0d23f26cf12f31eba13a264bc6&auto=format&fit=crop&w=2775&q=80"} />
    </Parallax>
);

return ParallaxImage;