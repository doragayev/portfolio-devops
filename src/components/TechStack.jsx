/**
 * TechStack - Categorized technology badges/cards.
 */
import SectionWrapper from './SectionWrapper'

const categories = [
  {
    title: 'Version Control & CI/CD',
    technologies: ['Git', 'GitHub Actions', 'CI/CD', 'ArgoCD'],
  },
  {
    title: 'Containers & Orchestration',
    technologies: ['Docker', 'Kubernetes', 'Helm', 'OpenShift'],
  },
  {
    title: 'Infrastructure & Cloud',
    technologies: ['VMware', 'Linux', 'Windows', 'AWS', 'AWS Lambda', 'Terraform', 'Ansible'],
  },
]

export default function TechStack() {
  return (
    <SectionWrapper id="tech-stack">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Tech Stack
        </h2>
        <p className="text-slate-600 text-lg mb-12 max-w-2xl">
          Tools and technologies I work with daily.
        </p>

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-soft text-slate-700 font-medium hover:border-primary-300 hover:shadow-card transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
