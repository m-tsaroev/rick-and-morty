import './Spinner.scss'
import loadingImage from '@/assets/images/loading-image.svg'

const Spinner = () => {
  return <div className='spinner'>
    <img className='spinner-image' src={loadingImage} alt='Loading...' />
  </div>
}

export { Spinner }
