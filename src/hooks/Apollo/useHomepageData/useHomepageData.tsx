import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { pathOr } from 'ramda';
import Masthead from '../../../components/sections/Masthead/Masthead';
import Footer from '../../../components/sections/Footer/Footer';
import { BlockFragments, RawBlock, EvolveRawBlock, Block } from '../../../Blocks/Blocks';
import BlockRenderer from '../../../components/ModularBlocks/BlockRenderer/BlockRenderer';
import { EvolveButton, Button } from '../../../components/Inputs/Button/Button';
import Sponsors from '../../../components/sections/Sponsors/Sponsors';

const HOMEPAGE_QUERY = gql`
query {
  homePage {
		masthead {
      ... on MastheadRecord {
        title
        text
        bulbPhoto {
          url
        }
        button
        buttonText
      }
    }
    sponsors {
      title
      sponsors {
        name
        logoGrey {
          url
        }
        link
      }
      sponsorsInfoButton
      buttonText
      sponsorsInfo {
        url
      }
    }
    sections {
      __typename
      ...CtaBlock
      ...EventsBlock
    }
    footerTitle
    footerText
    footerImage {
      url
      alt
    }
    contactUsTitle
    contactInfo
  }
}

${BlockFragments}
`;

interface RawHomepage {
  masthead: RawMasthead[],
  sponsors: RawSponsors[],
  sections: RawBlock[],
  footerTitle: string,
  footerText: string,
  footerImage: Image,
  contactUsTitle: string,
  contactInfo: string,
}

export interface Homepage {
  masthead: MastheadData,
  sponsors: SponsorsData,
  blocks: Block[],
  footer: FooterData 
}

interface RawMasthead {
  title: string,
  text: string,
  bulbPhoto: {
    url: string
  },
  button: boolean,
  buttonText: string
}

export interface MastheadData {
  title: String,
  text: string,
  bulbPhotoUrl: string | undefined,
  button: Button
}

export interface RawSponsors {
  title: string,
  sponsors: Array<{
    name: string,
    logoGrey: {
      url: string
    },
    link: string
  }>,
  sponsorsInfoButton: string,
  buttonText: string,
  sponsorsInfo: {
    url: string
  }
}

export interface SponsorsData {
  title: string,
  sponsors: Array<{
    name: string,
    logoUrl: string,
    link: string
  }>,
  button: Button
}

export interface FooterData {
  title: string,
  text: string,
  image: Image,
  contact: {
    title: string,
    info: string
  }
}

export interface Image {
  url: string,
  alt: string,
}

const evolveRawQuery = (raw: RawHomepage) => ({
  blocks: raw.sections.map(EvolveRawBlock()),
  footer: {
    title: raw.footerTitle,
    text: raw.footerText,
    image: raw.footerImage,
    contactUs: {
      title: raw.contactUsTitle,
      info: raw.contactInfo,
    }
  } as FooterData,
})

const evolveMasthead = (raw: RawMasthead | null) => {
  if (!raw) {
    return null
  }

  return ({
  title: raw.title,
  text: raw.text,
  bulbPhotoUrl: raw.bulbPhoto? raw.bulbPhoto.url : undefined,
  button: raw.button? EvolveButton(raw.buttonText, 'primary') : null
})}

const evolveSponsors = (raw: RawSponsors | null) => {
  if (!raw) {
    return null
  }

  return ({
    title: raw.title,
    sponsors: raw.sponsors.map((sponsor: {
      name: string,
      logoGrey: {
        url: string
      },
      link: string
    }) => ({
      name: sponsor.name,
      logoUrl: sponsor.logoGrey? sponsor.logoGrey.url : '',
      link: sponsor.link
    })),
    button: EvolveButton(raw.buttonText, 'secondary')
})}

export interface FooterData {
  title: string,
  text: string,
  image: Image,
  contactUs: {
    title: string,
    info: string,
  }
}

const Homepage: React.FC = () => {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :({error.message + ' ' + error.graphQLErrors + ' ' + data}</p>;
  
  const homepage = evolveRawQuery(pathOr(
    {'sections': []},
    ['homePage'],
    data
  ) as any as RawHomepage);

  const mastheadData: MastheadData | null = evolveMasthead(pathOr(
    null,
    ['homePage','masthead',0],
    data
  ))

  const sponsorsData: SponsorsData | null = evolveSponsors(pathOr(
    null,
    ['homePage','sponsors',0],
    data
  ))

  console.log("Data: ", data);
  console.log("Evolved: ", homepage);

  const masthead = mastheadData && <Masthead data={mastheadData} />
  const sponsors = sponsorsData && <Sponsors data={sponsorsData} />

  return (
    <>
      {masthead}
      {sponsors}
      {homepage.blocks.map((block) => (<BlockRenderer block={block} />))}
      <Footer data={homepage.footer} />
    </>
  )
}

export default Homepage;