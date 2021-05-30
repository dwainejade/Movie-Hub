import { Chip } from "@material-ui/core";
import axios from "axios"
import { useEffect } from "react";

function Genres({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage
}) {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter(g => g.id !== genre.id))
        setPage(1)
    }
    const handleRemove = (genre) => {
        setGenres([genre, ...genres])
        setSelectedGenres(selectedGenres.filter(g => g.id !== genre.id))
    }

    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-us`
        )

        setGenres(data.genres)
    }

    console.log(genres);

    useEffect(() => {
        fetchGenres();

        return () => {
            setGenres({});
        } 
        // eslint-disable-next-line
    }, []);

    return (
        <div style={{ padding: "6px 0" }}>
            { selectedGenres && selectedGenres.map(genre => (
                <Chip
                    label={genre.name}
                    key={genre.id}
                    style={{ margin: "2px" }}
                    color='primary'
                    size='small'
                    clickable 
                    onDelete={() => handleRemove(genre)}
                    onClick={() => handleRemove(genre)}
                    />
            ))}
            { genres && genres.map(genre => (
                <Chip
                    label={genre.name}
                    key={genre.id}
                    style={{ margin: "2px" }}
                    size='small'
                    clickable
                    onClick={() => handleAdd(genre)}
                />
            ))}
        </div>
    )
}

export default Genres
