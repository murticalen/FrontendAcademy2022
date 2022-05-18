import React from 'react'

interface PrivacyPolicyProps {
    partnersCount: number
}

// This function gets called at build time
export async function getStaticProps(): Promise<{props: PrivacyPolicyProps}> {

    const partners = Math.round(Math.random() * 100000)

    return {
      props: {
        partnersCount: partners,
      },
    }
  }
  

function PrivacyPolicy(props: PrivacyPolicyProps) {
    return (
        <main>We are a benevolent company. We do not do evil. We only sell your data to {props.partnersCount} partners.</main>
    )
}

export default PrivacyPolicy