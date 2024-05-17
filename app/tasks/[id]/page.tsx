import { notFound } from 'next/navigation'
import Image from 'next/image'

import { tasksCards } from '@/constants'

export async function generateStaticParams() {
  const tasksCardsTranslated = tasksCards.en || tasksCards.fr

  return tasksCardsTranslated.map((index) => ({
    id: index.toString(),
  }))
}

const TasksPage = ({ params }: { params: { id: string } }) => {
  const tasksCardsTranslated = tasksCards.en || tasksCards.fr
  const { id } = params

  if (!tasksCardsTranslated[parseInt(id)]) return notFound()

  const { imgFile } = tasksCardsTranslated[parseInt(id)] || {}

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

export default TasksPage
