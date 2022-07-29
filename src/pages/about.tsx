import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import { useRouter } from 'next/router'
import PageTemplate from 'templates/Pages'

type Props = {
  slug: any
}

export default function AboutPage() {
  const router = useRouter()

  if (router.isFallback) return null

  return <PageTemplate />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }: Props) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}
