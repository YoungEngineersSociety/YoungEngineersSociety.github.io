import React from 'react';
import { FooterData } from '../../../hooks/Apollo/useHomepageData/useHomepageData';
import YESLogo from '../../icons/YESLogo';

interface Props {
    data: FooterData,
}

const Footer: React.FC<Props> = ({ data }) => (
    <div>
         <div className="flex flex-col items-center mt-24">
            <div className="max-w-content mx-40">
                <h2 className="text-6xl leading-tight mb-8">{data.title}</h2>
                <div className="flex flex-row items-end">
                    <div className="w-2/5 mb-24">
                        <p className="text-2xl leading-loose">{data.text}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center bg-gray-200">
            <div className="flex flex-row items-end w-full max-w-content mx-40 pt-16">
                <div className="flex-auto w-1/3 text-4xl pb-8">
                    <h2 className="text-2xl">{data.contactUs.title}</h2>
                    <p className="text-base leading-loose mb-20">{data.contactUs.info}</p>
                    <YESLogo height={150} />
                </div>
                <div className="flex-auto h-full w-2/3 relative">
                    <img src={data.image.url} alt={data.image.alt} className="w-full absolute bottom-0" />
                </div>
            </div>
        </div>
        <div className="bg-gray-300">

        </div>
    </div>
)

export default Footer;