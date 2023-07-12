import Layout from "../../components/Layout";
import MovieDetails from "../../components/MovieDetails";


function Movie() {
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

    return (
        <Layout>
            <MovieDetails type={'movie'} index={index} />
        </Layout>
    );
}

export default Movie;