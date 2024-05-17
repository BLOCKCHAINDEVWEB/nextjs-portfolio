'use client'

import { motion } from 'framer-motion'

import { newFeaturesContent, newFeatures, newFeatureCards } from '@/constants'
import TypingText from '@/components/TypingText'
import TitleText from '@/components/TitleText'
import TasksCard from '@/components/TasksCard'
import NewFeatures from '@/components/NewFeatures'
import { variants, staggerContainer, fadeIn, textVariant } from '@/utils/motion'

export default function WhatsNew({ lang }: { lang: string }) {
  const { typingText, title } =
    lang === 'en' ? newFeaturesContent.en : newFeaturesContent.fr
  const newFeaturesTranslated = lang === 'en' ? newFeatures.en : newFeatures.fr
  const newFeatureCardsTranslated =
    lang === 'en' ? newFeatureCards.en : newFeatureCards.fr

  return (
    <section className="relative z-10 px-6 py-12 sm:p-16 xs:p-8">
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title={typingText} />
          <TitleText title={<>{title}</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeaturesTranslated.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>

        {newFeatureCardsTranslated.map(
          (project, index) =>
            index === 0 && (
              <TasksCard key={`news-${index}`} index={index} {...project} />
            )
        )}
      </motion.div>

      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <div className="flex flex-wrap justify-between mt-20 -mx-2">
          {newFeatureCardsTranslated.map(
            (project, index) =>
              index !== 0 && (
                <TasksCard key={`news-${index}`} index={index} {...project} />
              )
          )}
        </div>
      </motion.div>
    </section>
  )
}
