import { notFound } from 'next/navigation'
import Image from 'next/image'

import Modal from '@/components/Modal'
import { newFeatureCards } from '@/constants'

const NewTasksModalPage = ({ params }: { params: { id: string } }) => {
  const newFeatureCardsTranslated = newFeatureCards.en || newFeatureCards.fr
  const { id } = params

  if (!newFeatureCardsTranslated[parseInt(id)]) return notFound()

  const { imgFile } = newFeatureCardsTranslated[parseInt(id)] || {}

  return (
    <Modal>
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src={`/img/${imgFile}`}
          alt="project tasks image"
          width={1800}
          height={1800}
        />
      </div>
    </Modal>
  )
}

export default NewTasksModalPage
