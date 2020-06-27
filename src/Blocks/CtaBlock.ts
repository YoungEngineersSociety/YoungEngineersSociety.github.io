import { RawBlock, BlockData } from "./Blocks";

export const CtaFragment = `
    fragment CtaBlock on CallToActionRecord {
        text
        image {
            url
            alt
        }
        linkText
    }
`

export interface RawCtaBlock extends RawBlock {
    text: string,
    image: {
        url: string,
        alt: string
    },
    linkText: string
}

export interface CtaBlock extends BlockData {
    type: 'cta',
    text: string,
    image: {
        url: string,
        alt: string
    },
    linkText: string
}

export const EvolveCtaBlock = (rawBlock: RawCtaBlock): CtaBlock => ({
    type: 'cta',
    text: rawBlock.text,
    image: {
        url: rawBlock.image.url,
        alt: rawBlock.image.alt
    },
    linkText: rawBlock.linkText
})