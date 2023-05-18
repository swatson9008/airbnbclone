import photogrid from '../assets/photo-grid.png';

export default function Hero(){
    return(
        <div className='HeroGrid'>
            <img src={photogrid} alt="photogrids" className='HeroGridIMG'/>
        </div>
    )
}