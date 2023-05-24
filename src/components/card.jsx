/* eslint-disable react/prop-types */
import starPic from '../assets/star.png';

export default function Card(props){
    let badgeText;
    if (props.hero.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.hero.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className='Card'>
            {badgeText && <div className='cardBadge'>{badgeText}</div>}
            <div className='CardImage'>
                <img src={props.hero.coverImg} alt="profile picture"/>
            </div>
            <div className='bio'>
                <img src={starPic} alt="star" className='star'/>
                <span className='rating'>{props.hero.stats.rating}</span>
                <span className='country'>({props.hero.stats.reviewCount}) - {props.hero.location}</span><br />
                <span className='blurb'>{props.hero.title}</span><br />
                <span className='rate'>From ${props.hero.price}</span><span className='perPerson'> / person</span>
            </div>
        </div>
    )
}