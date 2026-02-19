/**
 * Contact - Contact section with social links and email placeholder.
 */
import SectionWrapper from './SectionWrapper'

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-slate-600 text-lg mb-12 max-w-2xl">
          Open to new opportunities and collaboration. Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/dor-agayev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-soft hover:shadow-card hover:border-primary-200 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
              <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">LinkedIn</p>
              <p className="text-sm text-slate-500">linkedin.com/in/dor-agayev</p>
            </div>
            <span className="ml-auto text-primary-600">→</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/doragayev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-soft hover:shadow-card hover:border-primary-200 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
              <svg className="w-6 h-6 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">GitHub</p>
              <p className="text-sm text-slate-500">github.com/doragayev</p>
            </div>
            <span className="ml-auto text-primary-600">→</span>
          </a>

          {/* Email */}
          <a
            href="mailto:doragayev9@gmail.com"
            className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-soft hover:shadow-card hover:border-primary-200 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Email</p>
              <p className="text-sm text-slate-500">doragayev9@gmail.com</p>
            </div>
            <span className="ml-auto text-primary-600">→</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+972548027361"
            className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-soft hover:shadow-card hover:border-primary-200 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Phone</p>
              <p className="text-sm text-slate-500">054-8027361</p>
            </div>
            <span className="ml-auto text-primary-600">→</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
