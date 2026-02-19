/**
 * WorkExperience - Timeline/card-based work history.
 */
import SectionWrapper from './SectionWrapper'

const jobs = [
  {
    title: 'NOC Engineer',
    company: 'Matrix (Client: Confidential Government Organization)',
    location: 'Tel-Aviv',
    years: '2022 – Today',
    responsibilities: [
      'Monitored mission-critical systems using Grafana, Kibana, Splunk, and Nagios',
      'Investigated and resolved incidents across Linux (RedHat), Windows, VMware vSphere, and OpenShift',
      'Used ServiceNow, Jira, and Confluence for incident and process management',
      'Supported cloud and virtualization environments',
      'Collaborated with vendors and internal teams',
      'Worked with ArgoCD, SQL, and automation workflows',
    ],
  },
  {
    title: 'Operations and Sales Manager',
    company: 'Preiss Packaging Products',
    location: 'Ashdod',
    years: '2017 – 2022',
    responsibilities: [
      'Promoted from Field Sales Agent',
      'Managed teams, logistics workflows, and delivery routes',
      'Maintained supplier and customer relations',
      'Developed leadership and operational management skills',
    ],
  },
]

export default function WorkExperience() {
  return (
    <SectionWrapper id="experience" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Work Experience
        </h2>
        <p className="text-slate-600 text-lg mb-12 max-w-2xl">
          Professional journey and roles.
        </p>

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-slate-50 rounded-xl border border-slate-200 shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {job.title}
                  </h3>
                  <p className="text-primary-600 font-medium">{job.company}</p>
                  <p className="text-slate-500 text-sm">{job.location}</p>
                </div>
                <span className="text-slate-600 font-medium whitespace-nowrap">
                  {job.years}
                </span>
              </div>
              <ul className="space-y-2">
                {job.responsibilities.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-slate-600"
                  >
                    <span className="text-primary-500 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
