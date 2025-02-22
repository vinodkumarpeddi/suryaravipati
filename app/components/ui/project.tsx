import { ProjectType } from '@/app/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import Button from './button'

type ProjectProps = {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  const { name, image, description, tech, link, code } = project
  return (
    <div className="rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col min-h-full flex-grow shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={image}
        alt={name}
        className="object-cover object-top lg:h-72 h-56 rounded-t-lg hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6 flex-col flex flex-grow">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-4 mb-6">
          <h2 className="text-2xl font-semibold text-white drop-shadow-lg">{name}</h2>
          <ul className="flex items-center gap-2">
            {tech.map((t, i) => {
              return (
                <li key={i}>
                  <Image
                    src={t.src}
                    alt={t.alt}
                    className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <p className="text-gray-300 font-medium mb-4 leading-relaxed">{description}</p>
        <div
          className={`grid ${
            link ? 'grid-cols-2' : 'grid-cols-1'
          } gap-3 mt-auto`}
        >
          {link && (
            <Button
              href={link}
              className="w-full !py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Website <FaExternalLinkAlt />
            </Button>
          )}

          <Button
            href={code}
            className="w-full !py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            Live Demo <FaGithub />
          </Button>
        </div>
      </div>
    </div>
  )
}
