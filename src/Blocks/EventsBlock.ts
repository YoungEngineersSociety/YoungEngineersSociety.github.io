import { RawBlock, BlockData } from "./Blocks";

export const EventsFragment = `
    fragment EventsBlock on EventSectionRecord {
        title
    }
`

export interface RawEventsBlock extends RawBlock {
    title: string,
}

export interface EventsBlock extends BlockData {
    type: 'events'
    title: string,
}

export const EvolveEventsBlock = (rawBlock: RawEventsBlock): EventsBlock => ({
    type: 'events',
    title: rawBlock.title
})