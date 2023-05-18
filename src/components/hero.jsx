import photogrid from '../assets/photo-grid.png';

export default function Hero(){
    return(
        <div className='Hero'>
            <img src={photogrid} alt="photogrids" className='HeroGridIMG'/>
            <div className='Experiences'>
                <h1>Online Experiences</h1>
                <span>Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.</span>
            </div>
        </div>
    )
}