//dependencias, react, etc
//componentes
//estilos
import { useRoutes, BrowserRouter } from "react-router-dom"
import { AppProvider } from "../../context"
/*import Home from "../Home"
import Movies from "../Movies"
import Tv from "../Tv"
import Favorites from "../Favorites"
import SearchResults from "../SearchResults"
import Genre from "../Genre"
import NotFound from "../NotFound"
import Movie from "../Movie"
import TvShow from "../TvShow"*/
import { lazy } from "react"
import Layout from "../../components/Layout"

const Home = lazy(() => import("../Home"));
const Movies = lazy(() => import("../Movies"));
const Tv = lazy(() => import("../Tv"));
const Favorites = lazy(() => import("../Favorites"));
const SearchResults = lazy(() => import("../SearchResults"));
const Genre = lazy(() => import("../Genre"));
const NotFound = lazy(() => import("../NotFound"));
const Movie = lazy(() => import("../Movie"));
const TvShow = lazy(() => import("../TvShow"));

const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: "/", element: <Layout />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/movie', element: <Movies /> },
                { path: '/movie/:id', element: <Movie /> },
                { path: '/tv', element: <Tv /> },
                { path: '/tv/:id', element: <TvShow /> },
                { path: '/favorites', element: <Favorites /> },
                { path: '/movie/genre/:id', element: <Genre /> },
                { path: '/tv/genre/:id', element: <Genre /> },
                { path: '/search-results', element: <SearchResults /> },
                { path: '/*', element: <NotFound /> }
            ]
        }
    ])
    return routes
}

function App() {

    return (
        <AppProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </AppProvider>
    )
}

export default App
