import { img_300, unavailable } from '../../Config/config'
import Badge from '@material-ui/core/Badge';
import './SingleContent.css'
import ContentModal from '../ContentModal/ContentModal';

const SingleContent = ({
    id,
    poster,
    title,
    overview,
    date,
    media_type,
    vote_average
}) => {
    return (
        <ContentModal media_type={media_type} id={id} >
            <Badge badgeContent={vote_average} color={vote_average > 6 ? 'secondary' : 'primary'}></Badge>
            <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className="title">{title}</b>
            <span className="subtitle">
                {media_type === 'tv' ? 'TV Show' : 'Movie'}
                <span className="subtitle">
                    {date}
                </span>
            </span>
        </ContentModal>
    )
}

export default SingleContent
