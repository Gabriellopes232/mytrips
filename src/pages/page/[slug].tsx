import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_PAGE_BY_SLUG, GET_PLACES } from 'graphql/queries'
import { useRouter } from 'next/dist/client/router'
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'generated/graphql'
import PlacesTemplate, { PlacesTemplateProps } from 'templates/Places'

export default function Page({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <PlacesTemplate place={place} />
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PAGE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true }

  return {
    props: {
      place
    }
  }
}
