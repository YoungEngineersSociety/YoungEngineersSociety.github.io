import React from 'react';
import { Block } from '../../../Blocks/Blocks';
import { CtaBlock } from '../../../Blocks/CtaBlock';
import { EventsBlock } from '../../../Blocks/EventsBlock';
import CallToAction from '../../sections/CallToAction/CallToAction';
import EventGuide from '../../sections/Events/EventGuide';

interface Props {
    block: Block
}

const BlockRenderer: React.FC<Props> = ({block}) => {
    
    if(!block) {
        return null;
    }
    
    switch(block.type) {
        case 'cta':
            return <CallToAction data={block as CtaBlock} />;
        case 'events':
            return <EventGuide data={block as EventsBlock} />;
        default:
            return null;
    }
}

export default BlockRenderer;