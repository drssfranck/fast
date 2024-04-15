
import CarouselFast from "../composants/CarouselFast";
import About from "../composants/About";
import Services from "../composants/Services";
import Temoignage from "../composants/Temoignage";
import Questions from "../composants/Questions";

const Home = () =>{
    return(
        <div className="fast-travel">
            <CarouselFast/>
            
            <About/>
            
            <Services/>
            
            <Temoignage/>
            <hr className="my-5" />
            <Questions/>
        </div>
    )
}

export default Home;