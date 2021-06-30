import axios from "axios"
import { useEffect, useState } from "react"
import Genres from "../../components/Genres"
import CustomPagination from "../../components/Pagination/CustomPagination"
import SingleContent from "../../components/SingleContent/SingleContent"
import useGenre from "../../Hooks/useGenre"

const Series = () => {
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [numOfPages, setNumOfPages] = useState()
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([])
    const genreforURL = useGenre(selectedGenres)

    const fetchSeries = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
        setContent(data.results)
        setNumOfPages(data.total_pages)
        console.log(data)
    }


    useEffect(() => {
        fetchSeries()
        // eslint-disable-next-line 
    }, [page, genreforURL])

    return (
        <div>
            <span className="page-title">TV Series</span>
            <Genres
                type='tv'
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="trending">
                {
                    content && content.map((c) => (
                        <div style={{margin:'10px 0'}}>
                            <SingleContent key={c.id}
                                id={c.id}
                                poster={c.poster_path}
                                title={c.name}
                                overview={c.overview}
                                date={c.first_air_date}
                                media_type='tv'
                                vote_average={c.vote_average}
                            />
                        </div>
                    ))
                }
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />

            )}
        </div>
    )
}

export default Series
