import { CtaFragment, EvolveCtaBlock, RawCtaBlock } from './CtaBlock';
import { EventsFragment, EvolveEventsBlock, RawEventsBlock } from './EventsBlock';

type BlockType = 'cta' | 'events' | 'sponsors' | 'ctaVertical' | null;

export interface RawBlock {
    __typename: 'CallToActionRecord' | 'CtaVerticalRecord' | 'SponsorsSectionRecord' | 'EventSectionRecord';
}

export type Block = BlockData | null;

export interface BlockData {
    type: BlockType;
}

export const BlockFragments = `
    ${CtaFragment}
    ${EventsFragment}
`

export const EvolveRawBlock = () => (block: RawBlock): Block | null => {
    switch (block.__typename) {
        case 'CallToActionRecord':
          return EvolveCtaBlock(block as RawCtaBlock);
        case 'EventSectionRecord':
          return EvolveEventsBlock(block as RawEventsBlock)
        default:
          return null;
      }
}