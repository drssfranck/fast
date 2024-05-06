import './nosvisa.css';
import image from '../media/slide1.jpg';
var galleri = [
    {
    id : 'img-tab-2',
    img : require('../media/slide2.jpg'),
    alt:'Visa fiayo',
    clas: ''},
    {
    id : 'img-tab-3',
    img : require('../media/slide4.jpg'),
    alt:'Visa fiayo',
    clas: ''
    }
        ,
    {
    id : 'img-tab-4',
    img : require('../media/fred.jpg'),
    alt:'Visa fiayo',
    clas: ''
    },
            
    {
    id : 'img-tab-5',
    img : require('../media/user.jpeg'),
    alt:'Visa fiayo',
    clas: ''
    },
    {
        id : 'img-tab-6',
        img : require('../media/slide2.jpg'),
        alt:'Visa fiayo',
        clas: ''},
        {
        id : 'img-tab-7',
        img : require('../media/slide4.jpg'),
        alt:'Visa fiayo',
        clas: ''
        }
            ,
        {
                id : 'img-tab-8',
                img : require('../media/fred.jpg'),
                alt:'Visa fiayo',
                clas: ''
        },
                
        {
        id : 'img-tab-9',
        img : require('../media/user.jpeg'),
        alt:'Visa fiayo',
        clas: ''
        }
]


const Nosvisa = () =>{
    return(
        <div className='gallerie'>
                <input type='radio' checked='checked' name='select' id='img-tab-1'/>
                <label for='img-tab-1' style={{backgroundImage: 'url(../media/flycarousel.jpg)'}}></label>
                <img src={image} alt='horizontal' border="0"/>
                {
                    galleri.map(mbe=>{
                        return(
                            <>
                                <input type='radio' name='select' id={mbe.id} />
                                <label for={mbe.id} style={{backgroundImage:'url('+mbe.img+')'}}></label>
                                <img src={mbe.img} alt={mbe.alt} border='0'/>
                            </>
                        )
                    })
                    
                }
                    
        </div>
    )
}

export default Nosvisa;