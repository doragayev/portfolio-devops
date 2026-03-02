/**
 * WorkExperience - Timeline/card-based work history.
 */
import SectionWrapper from './SectionWrapper'

const jobs = [
  {
    title: 'NOC Engineer (Production Operations)',
    company: 'Matrix (Client: Government Organization)',
    location: 'Tel-Aviv',
    years: '2022 – Today',
    responsibilities: [
        'Monitored and maintained mission-critical production systems using Grafana, Kibana, Splunk, and Nagios',
        'Investigated and resolved production incidents across Linux , Windows, VMware vSphere, and OpenShift environments',
        'Managed incidents and operational processes using ServiceNow, Jira, and Confluence',
        'Supported virtualization and hybrid infrastructure environments',
        'Collaborated with vendors and internal engineering teams',
        'Worked with ArgoCD workflows, SQL queries, and operational automation processes',
  ],
},
  {
    title: 'Operations and Sales Manager',
    company: 'Preiss Packaging Products',
    location: 'Ashdod',
    years: '2017 – 2022',
    responsibilities: [
        'Promoted from Field Sales Agent to Operations and Sales Manager',
        'Managed operational workflows, logistics processes, and delivery planning',
        'Led teams and coordinated daily operations to ensure service efficiency',
        'Maintained supplier and customer relationships while optimizing operational processes',
        'Developed leadership, problem-solving, and cross-team coordination skills',
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
