import loadingGif from '../assets/loading.gif'

export default function LoadingScreen(){
    return (
        <div>
            <img
                className='loadingGif'
                src={loadingGif}
                alt='Loading screen gif'/>
        </div>
    )
}
