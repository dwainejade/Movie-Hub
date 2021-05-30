import { useState, useEffect } from "react"
import axios from "axios"
import SingleContent from "../../components/SingleContent/SingleContent"
import CustomPagination from '../../components/Pagination/CustomPagination'
import Genres from '../../components/Genres'
import useGenre from '../../Hooks/useGenre'


const Movies = () => {
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [numOfPages, setNumOfPages] = useState()
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([])
    const genreforURL = useGenre(selectedGenres)

    const fetchMovies = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
        setContent(data.results)
        setNumOfPages(data.total_pages)
    }

    useEffect(() => {
        fetchMovies()
        // eslint-disable-next-line 
    }, [page, genreforURL])
    return (
        <div>
            <span className="page-title">Movies</span>
            <Genres 
                type='movie'
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres = {setGenres}
                setPage={setPage}
            />
            <div className="trending">
                {
                    content && content.map((c) => (
                        <SingleContent key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title}
                            overview={c.overview}
                            date={c.release_date}
                            media_type='Movie'
                            vote_average={c.vote_average}
                        />
                    ))
                }
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />

            )}
        </div>
    )
}

export default Movies