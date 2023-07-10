import Layout from "../../components/Layout";
import { useDetails } from "../../hook/useDetails";


function Movie() {
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)    
    const [details_status, details_data] = useDetails('movie', index)
    
    return (        
        <Layout>
            <p style={{color: 'white'}}>{details_data?.title} {index}</p>
        </Layout>
    );
}

export default Movie;