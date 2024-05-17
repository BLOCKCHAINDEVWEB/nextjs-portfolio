import { notFound } from 'next/navigation'
import Image from 'next/image'

import { newFeatureCards } from '@/constants'

export async function generateStaticParams() {
  const newFeatureCardsTranslated = newFeatureCards.en || newFeatureCards.fr

  return newFeatureCardsTranslated.map((index) => ({
    id: index.toString(),
  }))
}

const NewsPage = ({ params }: { params: { id: string } }) => {
  const newFeatureCardsTranslated = newFeatureCards.en || newFeatureCards.fr
  const { id } = params

  if (!newFeatureCardsTranslated[parseInt(id)]) return notFound()

  const { imgFile } = newFeatureCardsTranslated[parseInt(id)] || {}

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Image
        src={`/img/${imgFile}`}
        alt="project tasks image"
        width={1000}
        height={1000}
      />
    </div>
  )
}

export default NewsPage
