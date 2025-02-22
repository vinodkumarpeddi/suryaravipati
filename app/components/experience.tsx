'use client'
import Header from './ui/header'
import { experiences } from '../lib/data'
import Timeline from './ui/timeline'
import { useSectionInView, useWindowSizeHook } from '../lib/hooks'

export default function Experience() {
  const width = useWindowSizeHook()

  const { ref } = useSectionInView('Education', width > 700 ? 0.5 : 0.3)
  return (
    <section
      ref={ref}
      id="education"
      className="scroll-mt-24"
    >
      <Header>Education</Header>
      <Timeline data={experiences} />
    </section>
  )
}
