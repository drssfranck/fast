
import CarouselFast from "../composants/CarouselFast";
import Services from "../composants/Services";
import Temoignage from "../composants/Temoignage";
import Questions from "../composants/Questions";
import Aboutus from "../composants/Aboutus";

const Home = () =>{
    return(
        <div className="fast-travel">
            <CarouselFast/>
            
            <Aboutus/>
            
            <Services/>
            
            
            <Questions/>
            <Temoignage/>
        </div>
    )
}

export default Home;