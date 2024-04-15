import Accordion from 'react-bootstrap/Accordion';
import './questions.css';
function Questions() {
    return (
        <>
                 <div className='section-title'>
                    <h2 className='fast-titre'>Questions Frequement posé</h2> 
                </div>
            <p className='lead about-fast'>Découvrez les réponses à vos questions les plus fréquentes sur les visas : de la documentation requise aux délais de traitement, nous avons les réponses pour vous guider en toute confiance.</p>
            <div>
           
                <Accordion defaultActiveKey='0'>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>Quels sont les documents nécessaires pour obtenir un visa d'études ?</Accordion.Header>
                        <Accordion.Body>
                        Les documents requis varient en fonction du pays de destination, mais généralement, vous aurez besoin de votre passeport, d'une lettre d'admission de l'établissement d'enseignement, de preuves de fonds suffisants, et éventuellement d'autres documents spécifiques au pays.
                        </Accordion.Body>
                    </Accordion.Item>
    
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>Combien de temps faut-il pour obtenir un visa de travail pour le Canada ?</Accordion.Header>
                        <Accordion.Body>
                        Le délai de traitement des visas de travail pour le Canada peut varier en fonction du type de visa et de la demande spécifique. En règle générale, le processus peut prendre plusieurs semaines à quelques mois. Nous vous recommandons de commencer le processus dès que possible pour éviter les retards.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header> Puis-je faire une demande de visa de tourisme pour le Canada si je suis originaire d'un pays non membre de l'UE ?</Accordion.Header>
                        <Accordion.Body>
                        Oui, les ressortissants de nombreux pays non membres de l'UE peuvent faire une demande de visa de tourisme pour le Canada. Les exigences et le processus varient en fonction de votre pays d'origine. Nous vous recommandons de vérifier les exigences spécifiques auprès de l'ambassade ou du consulat du Canada dans votre pays.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='3'>
                        <Accordion.Header>Quels sont les avantages de faire appel à Fast And Sure Travel pour obtenir un visa d'affaires pour la Chine ?</Accordion.Header>
                        <Accordion.Body>
                        En choisissant Fast And Sure Travel, vous bénéficiez de notre expertise et de notre expérience dans le domaine des visas d'affaires pour la Chine. Notre équipe vous guidera à chaque étape du processus, vous fournissant des conseils personnalisés et une assistance professionnelle pour assurer une demande de visa réussie et sans tracas.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='4'>
                        <Accordion.Header>Fournissez-vous des services de suivi des demandes de visa ?</Accordion.Header>
                        <Accordion.Body>
                        Oui, nous offrons des services de suivi des demandes de visa pour toutes les demandes que nous traitons. Vous serez informé de l'état de votre demande à chaque étape du processus, et notre équipe sera disponible pour répondre à toutes vos questions et vous fournir des mises à jour régulières.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
        </div>
        </>
    );
}
export default Questions;