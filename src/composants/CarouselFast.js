import './carousel.css';
import {Carousel} from 'react-bootstrap';
var carouselitem = [
    {
        id:0,
        image :require('../media/flycarousel.jpg'),
        title : 'Vente des Billets d\'avions',
        description : 'Réservez vos vols en toute simplicité avec des tarifs compétitifs et un service clientèle exceptionnel.',
        link : '/flyticket'
    },{
        id:1,
        image :require('../media/immigration1.jpg'),
        title : 'Obtenez votre visa ',
        description : 'Simplifiez vos formalités administratives pour obtenir votre visa avec notre service d\'assistance professionnelle, rapide et efficace.',
        link : '/assistancevisa'
    },
    
    {
        id:4,
        image :require('../media/colis.jpg'),
        title : 'Envoyez vos colis  ',
        description : 'Envoyez vos colis partout dans le monde avec Fast And Sure Travel',
        link : '#'
    },
    {
        id:5,
        image :require('../media/usinechine.jpg'),
        title : 'Effectuez vos achats dépuis la chine',
        description : 'Effectuez vos achats dépuis la chineEffectuez vos achats dépuis la chineEffectuez vos achats dépuis la chineEffectuez vos achats dépuis la chineEffectuez vos achats dépuis la chine',
        link : '#'
    }
]

const CarouselFast = () =>{
    return(
        <div>        
            <div className='carousel-fast hero-block'>
            <Carousel>
            {
                        carouselitem.map(mbe=>{
                            return(
                                <Carousel.Item key={mbe.id}>
                                    <img className='w-100 item-fast'
                                    src={mbe.image}
                                    alt={"Fast " + mbe.id}
                                    />
                                    <Carousel.Caption className='carousel-captionfast w-50'>
                                        <h3>
                                            {mbe.title}
                                        </h3>
                                        <p>
                                            {mbe.description}
                                        </p>
                                        <a className='btn btn-primary' href={mbe.link}>Plus de detail</a>

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