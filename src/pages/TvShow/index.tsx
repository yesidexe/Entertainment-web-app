import Casting from "../../components/Casting";
import Layout from "../../components/Layout"
import MediaDetails from "../../components/MediaDetails";
import { useCredits } from "../../hook/useCredits";
import { useDetails } from "../../hook/useDetails";
import { imagePath } from "../../utils";

import styles from './TvShow.module.css'

function TvShow() {
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

    const [details_status, details_data] = useDetails('tv', index)
    const [credits_status, credits_data] = useCredits('tv', index)

    return (
        <Layout>
            {
                details_status === 'success' &&
                <div className={styles.tvShowContainer} >
                    {
                        details_data?.poster_path &&
                        <img width={'100%'} height={'100%'} src={imagePath(details_data.backdrop_path)} className={styles.backdrop} />
                    }
                    < div className={styles.tvShowWrapper} >
                        <MediaDetails data={details_data} director={undefined} />
                        {
                            credits_status === 'success' &&
                            <Casting data={credits_data} />
                        }
                    </div >
                </div >
            }
        </Layout>
    );
}

export default TvShow;