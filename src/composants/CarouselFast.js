import './carousel.css';
import {Carousel} from 'react-bootstrap';
var carouselitem = [
    {
        id:0,
        image :require('../media/flycarousel.jpg'),
        title : 'Vente de billets d’avion ',
        description : 'Grace à notre GDS IATA, nous vous proposons les meilleurs itinéraires aux meilleurs prix. ',
        link : '/flyticket'
    },{
        id:1,
        image :require('../media/immigration1.jpg'),
        title : 'Assistance VISA ',
        description : 'Nous simplifions le processus d’obtention de visa à l’étranger. Notre équipe vous guide à chaque étape de la procédure. ',
        link : '/assistancevisa'
    },
    
    {
        id:4,
        image :require('../media/colis.jpg'),
        title : 'Envoi des colis   ',
        description : 'Nous expédions vos colis en toute sécurité de la Chine vers le Cameroun grâce notre service fiable et rapide. ',
        link : '#'
    },
    {
        id:5,
        image :require('../media/usinechine.jpg'),
        title : 'Effectuez vos achats dépuis la chine',
        description : 'Effectuez vos achats dépuis la chine ',
        link : '#'
    }
]

const CarouselFast = () =>{
    return(
        <div>        
            <div className='carousel-fast hero-block'>
            <Carousel className='mbe-idriss'>
            {
                        carouselitem.map(mbe=>{
                            return(
                                <Carousel.Item key={mbe.id}>
                                    <img className='w-100 item-fast'
                                    src={mbe.image}
                                    alt={"Fast " + mbe.id}
                                    />
                                    <Carousel.Caption className='carousel-captionfast w-75  p-3'>
                                        <div className='line'></div>
                                        <h3 className='w-100'>
                                            {mbe.title}
                                        </h3>
                                        <p className='mh-50'>
                                            {mbe.description}
                                        </p>
                                        <button className='btn btn-2 btn-2a' href={mbe.link}>Plus de details</button>

                                    </Carousel.Caption>
                                 </Carousel.Item>
                            )
                        })
                    }
            </Carousel>
        </div>
        </div>


    )
}
export default CarouselFast;