import React from 'react'
import Image from 'next/image'

const COUNTRY_PAGE_DETAILS: Record<string, string> = {
    'LV': 'https://i.imgur.com/4XuFQx6.png',
    'US': 'USA is the greatest country on earth. All other countries are little weirdos. GUNS! GUNS! GUNS!'
}

interface StaticPropsProps {
    params: {
        alpha2: string
    }
}

interface CountryProps {
    alpha2: string
    description: string
}

// This function gets called at build time
export async function getStaticPaths() {  
    // Get the paths we want to pre-render based on posts
    const paths = Object.keys(COUNTRY_PAGE_DETAILS).map((alpha2) => ({
      params: { alpha2 },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps(props: StaticPropsProps): Promise<{props: CountryProps}> {
    return {
        props: {
          alpha2: props.params.alpha2,
          description: COUNTRY_PAGE_DETAILS[props.params.alpha2]
        },
      }
}
  

export default function CountryPage(props: CountryProps) {
    const isImage = props.description.startsWith('http')

    if (isImage) {
        return (<main><img src={props.description} alt="There is no way I can describe this"/></main>)
    }

    return (<main>{props.description}</main>)
}