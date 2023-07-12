import Layout from "../../components/Layout"
import TvDetails from "../../components/TvDetails";

function TvShow() {
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

    return (
        <Layout>
                <TvDetails type={'tv'} index={index}/>
        </Layout>
    );
}

export default TvShow;