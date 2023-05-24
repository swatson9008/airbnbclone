/* eslint-disable react/prop-types */
import starPic from '../assets/star.png';

export default function Card(props){
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.country === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className='Card'>
            {badgeText && <div className='cardBadge'>{badgeText}</div>}
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