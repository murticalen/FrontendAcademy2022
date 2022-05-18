import { GetServerSideProps } from 'next'

export default function About() {

    const v = Math.random()
    const isServer = typeof window === 'undefined'
    if (!isServer) {
        console.log(v)
    }

    return (
        <main>
            This in an about page for SofaScore academy. It is static without data.
        </main>
    )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {},
    };
};
