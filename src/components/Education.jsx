/**
 * Education - Academic and professional certifications.
 */
import SectionWrapper from './SectionWrapper'

const education = [
  {
    degree: "Bachelor's Degree",
    program: 'Business Administration and Management Information Systems',
    institution: 'College of Management',
    years: '2021 – 2024',
    highlights: [
      'OOP and OOD knowledge',
      'ICT systems and Linux experience',
      'Python, SQL, HTML, CSS, JavaScript experience',
    ],
  },
  {
    degree: 'DevOps Expert Course',
    program: 'Currently Enrolled',
    institution: null,
    years: null,
    highlights: [
      'Docker',
      'Kubernetes',
      'Helm',
      'GitHub Actions',
      'CI/CD',
      'ArgoCD',
      'Prometheus (upcoming)',
      'AWS',
      'Terraform',
      'Lambda',
      'Ansible',
    ],
  },
]

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Education
        </h2>
        <p className="text-slate-600 text-lg mb-12 max-w-2xl">
          Academic background and ongoing professional development.
        </p>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-slate-50 rounded-xl border border-slate-200 shadow-soft"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-1">
                {item.degree}
              </h3>
              <p className="text-primary-600 font-medium">{item.program}</p>
              {item.institution && (
                <p className="text-slate-600">{item.institution}</p>
              )}
              {item.years && (
                <p className="text-slate-500 text-sm mt-1">{item.years}</p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-700 text-sm font-medium"
                  >
                    {highlight}
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
