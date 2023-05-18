import airbnbLogo from '../assets/airbnb-logo.png';

export default function NavBar(){
    return (
        <div className='NavBar'>
            <img src={airbnbLogo} alt="airbnblogo" style={{ width: '100px', height: 'auto' }} />
        </div>
    )
}