import Header from './Header';
import Hero from './Hero';
import About from './About';
import Events from './Events';
import Places from './Places';
import Map from './Map';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Events />
            <Places />
            <Map />
            <Contact id="contact"/>
            <Footer />
        </>
    );
}

export default LandingPage;