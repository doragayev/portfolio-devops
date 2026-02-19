/**
 * Projects - Dynamic GitHub repository showcase.
 * Fetches repos from GitHub API with fallback to placeholder data.
 */
import { useEffect, useState } from 'react'
import SectionWrapper from './SectionWrapper'

const GITHUB_USER = 'doragayev'
const FALLBACK_PROJECTS = [
  { name: 'cpage-self', description: 'Personal portfolio landing page', html_url: 'https://github.com/doragayev/cpage-self', language: 'JavaScript' },
  { name: 'Portfolio', description: 'Professional portfolio website', html_url: 'https://github.com/doragayev', language: null },
]

function ProjectCard({ name, description, html_url, language }) {
  return (
    <a
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white rounded-xl border border-slate-200 shadow-soft hover:shadow-card-hover hover:border-primary-200 transition-all group"
    >
      <h3 className="text-lg font-semibold text-slate-800 group-hover:text-primary-600 transition-colors mb-2">
        {name}
      </h3>
      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
        {description || 'No description available'}
      </p>
      <div className="flex items-center justify-between">
        {language && (
          <span className="text-xs px-2 py-1 bg-slate-100 rounded text-slate-600">
            {language}
          </span>
        )}
        <span className="text-primary-600 text-sm font-medium group-hover:underline">
          View on GitHub →
        </span>
      </div>
    </a>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then((data) => {
        setProjects(
          data.map((repo) => ({
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            language: repo.language,
          }))
        )
      })
      .catch(() => {
        setError(true)
        setProjects(FALLBACK_PROJECTS)
      })
      .finally(() => setLoading(false))
  }, [])

  const displayProjects = projects.length > 0 ? projects : FALLBACK_PROJECTS

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Projects
        </h2>
        <p className="text-slate-600 text-lg mb-12 max-w-2xl">
          Open source and personal projects from{' '}
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline font-medium"
          >
            GitHub
          </a>
          .
        </p>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-40 bg-slate-100 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        )}

        {error && (
          <p className="mt-4 text-sm text-slate-500">
            Showing cached/fallback projects. Visit GitHub for the full list.
          </p>
        )}
      </div>
    </SectionWrapper>
  )
}
