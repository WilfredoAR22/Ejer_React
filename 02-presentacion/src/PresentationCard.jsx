import imagenAvatar from './assets/img1.jpg';
import './PresentationCard.css';

let name = 'Wilfredo';

function PresentationCard(){
    return(
        <div className="presentation-card">
            <img src={imagenAvatar} alt="Avatar" className='avatar' />
            <h1>
                Hola, soy { name } y estoy aprendiendo React
            </h1>
        </div>
    );
}

export default PresentationCard;