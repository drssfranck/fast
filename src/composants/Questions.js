import { FaHome, FaPaperPlane, FaPen } from 'react-icons/fa';
import './questions.css';
import { BsQuestionCircle } from 'react-icons/bs';
import { BiRocket } from 'react-icons/bi';
import { FaBook, FaUser } from 'react-icons/fa6';
function Questions() {
    return (
        <>
            <section className='question-section'>
                <h3 className='text-center mb-4 pb-2 text-primary fw-bold'>FAQ</h3>
                <BsQuestionCircle className='question-mark' /> 
                <p className='text-center mb-5'>
                    Découvrez les réponses à vos questions les plus fréquentes sur les visas : de la documentation requise aux délais de traitement, nous avons les réponses pour vous guider en toute confiance.
                </p>

                <div  className='row'>
                    <div className='col-md-6 col-lg-4 mb-4'>
                    <h6 className='mb-3 text-primary'> <FaPaperPlane className='text-primary pe-2 text-justify  text-center'/> Comment se déroule votre service d’assistance visa ? </h6>
                    <p>
                         
                        Notre service d’assistance visa est fonction de la <strong><u> procédure choisie par le client</u></strong>. Après confirmation de votre admissibilité, l’étape suivante découle du résultat de l’étude de votre dossier. 
                    </p>
                    </div>

                    <div className='col-md-6 col-lg-4 mb-4'>
                    <h6 className='mb-3 text-primary'><FaPen className='text-primary pe-2  text-center'/>
                         Quels pays couvrez-vous en matière d’assistance visa ?
                    </h6>
                    <p>
                        Nous offrons une assistance visa pour un large éventail de pays à l’exemple de : <strong><u>la France, le Canada, la Chine, la Russie, la Roumanie, la Turquie.</u></strong>   
                    </p>
                    </div>

                    <div className='col-md-6 col-lg-4 mb-4'>
                    <h6 className='mb-3 text-primary'> <FaUser className='text-primary pe-2  text-center' /> 
                    Quelles sont les exigences et les documents nécessaires pour la demande de visa ? 
                    </h6>
                    <p>
                         Les exigences et les documents requis varient en fonction du pays de destination et du type de visa demandé. Nous vous fournissons une liste complète des exigences spécifiques à votre demande et nous vous guidons sur la manière de rassembler et de soumettre les documents requis. 
                    </p>
                    </div>

                    <div className='col-md-6 col-lg-4 mb-4'>
                    <h6 className='mb-3 text-primary'><BiRocket className='text-primary pe-2  text-center'/><i className='fas fa-rocket text-primary pe-2  text-center'></i>
                        Quels sont les délais de traitement habituels pour les demandes de visa ? 
                    </h6>
                    <p>
                    Les délais de traitement varient en fonction de la destination choisie et du type de visa demandé.  Toutefois, nous vous informons des délais de traitement estimés pour votre demande spécifique, en tenant compte des facteurs actuels qui pourraient les influencer, tels que les politiques d’immigration, les périodes de pointe. 
                    </p>
                    </div>

                    <div className='col-md-6 col-lg-4 mb-4'>
                    <h6 className='mb-3 text-primary'><FaHome className='text-primary pe-2  text-center' />Proposez-vous une assistance en cas de refus de visa ? 
                    </h6>
                        Oui, nous offrons une assistance en cas <strong><u>de refus de visa.</u></strong>  Si votre demande de visa est refusée,
                         nous vous aidons à comprendre les raisons du refus et à évaluer les options disponibles,
                         telles que la possibilité de faire appel à la décision ou de soumettre une nouvelle demande avec des informations supplémentaires. 
                        
                    </div>

                    <div className='col-md-6 col-lg-4 mb-4'>
                    <h6 className='mb-3 text-primary'><FaBook className='text-primary pe-2  text-center'/>
                    Quels sont les frais associés à vos services d’assistance visa ? 
                        </h6>
                    <p>
                    Les frais associés à nos services d’assistance visa varient en fonction du pays de destination, du type de visa demandé et des services spécifiques dont vous avez besoin.  Nous vous fournissons une estimation claire et détaillée des frais lors de votre consultation initiale.                     </p>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Questions;