/* eslint-disable react/prop-types */
import starPic from '../assets/star.png';

export default function Card(props){
    return (
        <div className='Card'>
            {props.openSpots === 0 && <div className='cardBadge'>Sold Out</div>}
            <div className='CardImage'>
                <img src={props.img} alt="profile picture"/>
            </div>
            <div className='bio'>
                <img src={starPic} alt="star" className='star'/>
                <span className='rating'>{props.rating}</span>
                <span className='country'>({props.reviewCount}) - {props.country}</span><br />
                <span className='blurb'>{props.title}</span><br />
                <span className='rate'>From ${props.price}</span><span className='perPerson'> / person</span>
            </div>
        </div>
    )
}