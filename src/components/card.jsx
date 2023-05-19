import profilePic from '../assets/katie-zaferes.png';
import starPic from '../assets/star.png';

export default function Card(){
    return (
        <div className='Card'>
            <div className='CardImage'>
                <img src={profilePic} alt="profile picture"/>
            </div>
            <div className='bio'>
                <img src={starPic} alt="star" className='star'/>
                <span className='rating'>5.0</span>
                <span className='country'>(6) - USA</span><br />
                <span className='blurb'>Life lessons with Katie Zaferes</span><br />
                <span className='rate'>From $136</span><span className='perPerson'> / person</span>
            </div>
        </div>
    )
}