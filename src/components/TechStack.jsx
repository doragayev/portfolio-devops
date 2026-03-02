/**
 * TechStack - Categorized technology badges/cards.
 */
import SectionWrapper from './SectionWrapper'

const categories = [
  {
    title: 'Containers & Orchestration',
    technologies: ['Docker', 'Kubernetes (hands-on learning)', 'Helm (basic)', 'OpenShift (operations support)', 'ArgoCD (GitOps practice)'],
  },
  {
    title: 'Version Control & CI/CD',
    technologies: ['Git', 'GitHub Actions', 'CI/CD Pipelines'],
  },
  {
    title: 'Infrastructure & Operations',
    technologies: ['Linux', 'Windows Server', 'VMware', 'Production Monitoring & Incident Response'],
  },
  {
    title: 'Cloud & Automation',
    technologies: ['AWS (Foundation), Terraform (Learning), Ansible (Learning), AWS Lambda(basic)'],
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
          Technologies used in production operations and personal DevOps projects
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
