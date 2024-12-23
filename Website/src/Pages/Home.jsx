import '../App.css';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Products from '../Components/FeatureProducts/FeatureProducts';

import Virtual from '../Components/Virtual/Virtual';
import Carousal from '../Components/Carousal/Carousal'
import Detect from '../Components/Detect/Detect';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />  
            
            <Carousal/>
            <Detect/>

            <Virtual />
            <Products />
            {/* <Testimonials /> */}
            <Footer />
        </div>
    );
}

export default App;
