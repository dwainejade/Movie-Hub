import axios from "axios"
import { useEffect, useState } from "react"
import SingleContent from "../../components/SingleContent/SingleContent"
import CustomPagination from '../../components/Pagination/CustomPagination'
import './Trending.css'



const Trending = () => {
    const [content, setContent] = useState([])
    const [page, setPage] = useState(1)

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        )
        setContent(data.results)
    }

    useEffect(() => {
        fetchTrending()
        // eslint-disable-next-line
    }, [page])


    return (
        <div>
            <span className="page-title">Trending</span>
            <div className="trending" style={{margin:'10px 0'}}>
                {
                    content && content.map((c) =>(
                        <SingleContent key={c.id} 
                        id={c.id} 
                        poster={c.poster_path} 
                        title={c.title || c.name} 
                        overview={c.overview} 
                        date={c.release_date || c.first_air_date} 
                        media_type={c.media_type}
                        vote_average={c.vote_average}
                        />
                    ))
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Trending
