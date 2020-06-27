import React from 'react';
import { SponsorsData } from '../../../hooks/Apollo/useHomepageData/useHomepageData';

interface Props {
    data: SponsorsData
}

const Sponsors: React.FC<Props> = ({ data }) => (
    <div className="w-full max-w-content mx-">
        <h2 className="">{data.title}</h2>
        <div className="">
            {data.sponsors.map(sponsor => (
                <a href={sponsor.link} key={sponsor.name}>   
                    <img src={sponsor.logoUrl} alt={`${sponsor.name} logo`} width="80" height="80" />
                    <p>{sponsor.name}</p>
                </a>
            ))}
        </div>
        <button className="btn">{data.button && data.button.text}</button>
    </div>
)

export default Sponsors;