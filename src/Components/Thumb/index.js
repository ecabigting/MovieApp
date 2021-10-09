// styles
import { Image } from './Thumb.styles'

const Thumb = ({ image, imageId, clickable }) => (
    <div>
        <Image src={image} alt='movie-thumb'>

        </Image>
    </div>
);

export default Thumb