'use client'
import { TimelineElement } from '@/app/lib/types'
import Image from 'next/image'
import { ArcherContainer, ArcherElement } from 'react-archer'
import { motion } from 'framer-motion'
import { Fragment } from 'react'
import { BsFillCaretLeftFill } from 'react-icons/bs'
import Link from 'next/link'

type TimelineProps = {
  data: TimelineElement[]
}

export default function Timeline({ data }: TimelineProps) {
  return (
    <ArcherContainer
      endMarker={false}
      strokeColor="#FACC15"
      strokeWidth={3}
    >
      <ul className="flex flex-col items-center lg:gap-0 gap-12">
        {data.map(
          ({ title, subtitle, description, dates, image, gpa, link }, i) => {
            const sub = (
              <h3 className={`text-gray-300 mb-2 ${link ? 'underline' : ''}`}>
                {subtitle}
                {gpa && `, ${gpa} GPA`}
              </h3>
            )
            const componentContent = (
              <Fragment>
                <h3 className="text-yellow-400 mb-4 font-medium">{dates}</h3>
                <h2 className="font-bold text-lg text-white">{title}</h2>
                {link ? (
                  <Link
                    href={link}
                    target="_blank"
                    className="text-blue-400 hover:text-blue-500 transition"
                  >
                    {sub}
                  </Link>
                ) : (
                  sub
                )}
                <p className="text-gray-400 leading-relaxed">{description}</p>
              </Fragment>
            )

            return (
              <li
                key={subtitle}
                className={`flex items-start w-full relative ${
                  i !== 0 ? 'lg:-mt-12' : ''
                }`}
              >
                <ArcherElement
                  id={i == 0 ? 'root' : `element ${i}`}
                  relations={
                    i == data.length - 1
                      ? []
                      : [
                          {
                            targetId: `element ${i + 1}`,
                            targetAnchor: 'top',
                            sourceAnchor: 'bottom',
                          },
                        ]
                  }
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="sm:h-20 sm:w-20 w-16 h-16 shadow-xl shadow-gray-900 absolute lg:left-1/2 transform lg:-translate-x-1/2 flex items-center justify-center p-2 border-2 border-yellow-400 rounded-full bg-gray-800"
                  >
                    <Image
                      src={image}
                      alt={subtitle}
                      className="object-cover rounded-full object-center"
                    />
                  </motion.div>
                </ArcherElement>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 == 0 ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  viewport={{ once: true }}
                  className={`p-6 relative bg-gray-800 rounded-lg shadow-lg border border-gray-700 lg:flex hidden flex-col lg:max-w-[360px] sm:max-w-[75%] sm:ml-32 ml-20 ${
                    i % 2 == 0 ? 'lg:ml-12' : 'lg:mr-12 lg:ml-auto'
                  } `}
                >
                  {componentContent}

                  <BsFillCaretLeftFill
                    className={`text-gray-800 absolute top-0 mt-4 transform h-10 w-10 ${
                      i % 2 !== 0
                        ? 'left-0 -translate-x-1/2'
                        : 'right-0 translate-x-1/2 rotate-180'
                    }`}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className={`p-6 relative bg-gray-800 rounded-lg shadow-lg border border-gray-700 lg:hidden flex flex-col lg:max-w-[360px] sm:max-w-[75%] sm:ml-32 ml-20 ${
                    i % 2 == 0 ? 'lg:ml-12' : 'lg:mr-12 lg:ml-auto'
                  } `}
                >
                  {componentContent}
                  <BsFillCaretLeftFill
                    className="text-gray-800 absolute top-0 mt-4 transform h-10 w-10 left-0 -translate-x-1/2"
                  />
                </motion.div>
              </li>
            )
          }
        )}
      </ul>
    </ArcherContainer>
  )
}
