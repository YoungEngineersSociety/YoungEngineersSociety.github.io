import React from 'react';
import { CtaBlock } from '../../../Blocks/CtaBlock';

interface Props {
    data: CtaBlock,
}

const CallToAction: React.FC<Props> = ({ data }) => (
    <div className="flex flex-col items-center mb-48">
        <span className="w-0 h-40 mt-4 mb-32 border-l-4 border-orange" />
        <div className="flex flex-row items-end mx-40 leading-normal max-w-content bg-orange-light">
            <div className="flex-auto w-3/5 pr-8 text-4xl py-18 pl-18">
                {data.text}
                <button className="btn">
                    {data.linkText}
                </button>
            </div>
            <div className="relative flex-auto w-2/5 h-full">
                <img src={data.image.url} alt={data.image.alt} className="absolute bottom-0 w-full" />
            </div>
        </div>
    </div>
)

export default CallToAction;