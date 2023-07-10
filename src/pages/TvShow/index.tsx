import Layout from "../../components/Layout"
import MediaDetails from "../../components/MediaDetails";

function TvShow() {
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

    return (
        <Layout>
                <MediaDetails type={'tv'} index={index}/>
        </Layout>
    );
}

export default TvShow;