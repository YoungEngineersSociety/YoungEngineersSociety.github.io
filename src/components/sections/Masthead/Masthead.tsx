import React from 'react';
import { MastheadData } from '../../../hooks/Apollo/useHomepageData/useHomepageData';

interface Props {
    data: MastheadData
}

const Masthead: React.FC<Props> = ({ data }) => {
    const {
        title,
        text,
        button
    } = data;

    return(
        <section className="flex justify-center" style={{height: '120vh'}}>
            <div className="flex flex-col justify-center w-full h-screen mx-10 max-w-content">
                <div>
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{__html: text}} />
                    {button && <button>button on</button>}
                </div>
            </div>
            {/* <img src={data.bulbPhotoUrl} alt='' className="absolute bottom-0 h-full pt-48" /> */}
        </section>
    )}

export default Masthead;