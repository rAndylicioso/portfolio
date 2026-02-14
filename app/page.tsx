import Image from 'next/image';
import VideoPlayer from './components/VideoPlayer';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero/Profile Section */}
      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image */}
            <Image 
              src="/portfolio/profile.jpg" 
              alt="Randy Andrei Andres"
              width={128} 
              height={128}
              className="w-32 h-32 rounded-lg flex-shrink-0 object-cover"
              />
            
            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-zinc-900 mb-2">
                Randy Andrei Andres
              </h1>
              <p className="text-zinc-600 mb-1">
                📍 Trece Martires City, Philippines
              </p>
              <p className="text-lg text-zinc-700 mb-4">
                AI \ Software Developer \ Prompt Engineer
              </p>
              
              {/* Achievement Badge */}
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="mailto:andresrandyandrei@gmail.com" 
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
                >
                  Send Email
                </a>
                <a 
                  href="/portfolio/resume.pdf" 
                  download
                  className="px-6 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition font-medium"
                >
                  📄 Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <section id="about" className="bg-white rounded-lg p-8 border border-zinc-200">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">About</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  I&apos;m a Full-Stack Developer who sees natural language as the next great programming language. As a Certified Prompt Engineer, I&apos;ve moved beyond just &quot;using&quot; AI. I focus on architecting the workflows that make it actually work for us.
                </p>
                <p>
                 My days are spent in the sweet spot between traditional code and AI orchestration. Whether I&apos;m using Cursor to reason through a complex backend or Antigravity to automate the &quot;boring stuff,&quot; my goal is simple: turn big ideas into production-ready software, fast. I&apos;m all about minimizing hallucinations and maximizing precision, ensuring that the AI-driven solutions I build are as reliable as they are innovative.
                </p> 
                <p>
                  Lately, I&apos;ve been diving deeper into the world of artificial intelligence, focusing on integrating AI tools and techniques into modern applications. My work now includes developing AI-powered solutions and leveraging generative AI to optimize development workflows.
                </p>
              </div>
            </section>

            {/* Tech Stack Section */}
            <section id="tech-stack" className="bg-white rounded-lg p-8 border border-zinc-200">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">Tech Stack</h2>
              
              {/* Frontend */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-zinc-700 mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-blue-50 text-blue-900 rounded-md text-sm border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Backend */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-zinc-700 mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'PHP', 'Laravel', 'PostgreSQL', 'MongoDB'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-blue-50 text-blue-900 rounded-md text-sm border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* DevOps & Cloud */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-zinc-700 mb-3">DevOps & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-blue-50 text-blue-900 rounded-md text-sm border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* AI Models & APIs */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-zinc-700 mb-3">AI Models & APIs</h3>
                <div className="flex flex-wrap gap-2">
                  {['ChatGPT / GPT-4', 'Claude (Anthropic)', 'Google Gemini', 'Llama', 'Stable Diffusion', 'DALL-E'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-blue-50 text-blue-900 rounded-md text-sm border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* AI Development Platforms */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-zinc-700 mb-3">AI Development Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {['OpenAI API', 'Anthropic API', 'Google AI Studio', 'Hugging Face', 'LangChain', 'LlamaIndex'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-blue-50 text-blue-900 rounded-md text-sm border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* AI-Powered Development Tools */}
              <div>
                <h3 className="text-sm font-semibold text-zinc-700 mb-3">AI-Powered Development Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['GitHub Copilot', 'Cursor AI', 'Tabnine', 'Replit AI', 'v0 by Vercel'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-blue-50 text-blue-900 rounded-md text-sm border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Recent Projects Section */}
            <section id="projects" className="bg-white rounded-lg p-8 border border-zinc-200">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">Recent Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Project Card */}
                {[
                  { 
                    name: 'Vehiscan RFID', 
                    desc: 'Web Based Vehicle Verification System', 
                    url: 'github.com/rAndylicioso/Vehiscan-RFID',
                    video: '/portfolio/videos/vehiscan-demo.mp4'
                  },
                ].map((project, idx) => (
                  <div key={idx} className="border border-zinc-200 rounded-lg overflow-hidden hover:shadow-lg transition group">
                    {/* Video Preview */}
                    <VideoPlayer src={project.video} />
                    
                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="font-bold text-zinc-900 mb-2">{project.name}</h3>
                      <p className="text-sm text-zinc-600 mb-3">{project.desc}</p>
                      <a 
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-blue-600 text-sm hover:underline inline-flex items-center gap-1"
                      >
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Certifications Section */}
            <section id="certifications" className="bg-white rounded-lg p-8 border border-zinc-200">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">Recent Certifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    name: 'Prompt Engineering', 
                    issuer: 'FreeAcademy',
                    logo: '/portfolio/logos/freeacademy.png',
                    url: 'https://freeacademy.ai/verify/CA-2026-PE-BP5JLW'
                  },
                  { 
                    name: 'Google Gemini Certified University Student', 
                    issuer: 'Google',
                    logo: '/portfolio/logos/google.png',
                    url: 'https://edu.google.accredible.com/a852ba0d-d6b3-462b-8264-3e44bab45119#acc.v4w5haG0'
                  },
                  { 
                    name: 'Google Gemini Certified Educator', 
                    issuer: 'Google',
                    logo: '/portfolio/logos/google.png',
                    url: 'https://edu.google.accredible.com/7a646af0-c374-4329-80e7-8016b99d601a#acc.JOAMXaxt'
                  },
                ].map((cert, idx) => (
                  <a 
                    key={idx} 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-zinc-200 rounded-lg p-6 hover:shadow-md transition cursor-pointer block"
                  >
                    {cert.logo ? (
                      <Image 
                        src={cert.logo} 
                        alt={`${cert.issuer} logo`}
                        width={48}
                        height={48}
                        className="rounded mb-3 object-contain"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-zinc-200 rounded mb-3"></div>
                    )}
                    <h3 className="font-bold text-zinc-900 mb-1">{cert.name}</h3>
                    <p className="text-sm text-zinc-600">{cert.issuer}</p>
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Experience Timeline */}
            <section id="experience" className="bg-white rounded-lg p-6 border border-zinc-200">
              <h2 className="text-xl font-bold text-zinc-900 mb-6">Experience</h2>
              <div className="space-y-6">
                {[
                  { title: 'Intern', company: 'Krislizz International Academy INC', year: '2026' },
                 //{ title: 'AI Ops Engineer', company: 'Tech Company', year: '2025' },
                 //{ title: 'Senior Full-Stack Developer', company: 'Another Company', year: '2024' },
                 //{ title: 'Software Engineering Lead', company: 'Startup', year: '2022' },
                 //{ title: 'Lead Application Developer', company: 'Corporation', year: '2021' },
                ].map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-zinc-300 pl-4">
                    <h3 className="font-semibold text-zinc-900 text-sm">{exp.title}</h3>
                    <p className="text-xs text-zinc-600">{exp.company}</p>
                    <p className="text-xs text-zinc-500">{exp.year}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Links */}
            <section className="bg-white rounded-lg p-6 border border-zinc-200">
              <h3 className="font-semibold text-zinc-900 mb-4">Contact</h3>
              <div className="space-y-3">
                {/* Email */}
                <div className="group -mx-3 px-3 py-3 rounded-lg border border-transparent hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-zinc-600 group-hover:text-blue-600 mt-0.5 flex-shrink-0 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-zinc-500 group-hover:text-blue-700 mb-0.5 transition-colors duration-300">Email</p>
                      <a href="mailto:andresrandyandrei@gmail.com" className="text-sm text-zinc-900 group-hover:text-blue-600 break-all font-medium transition-colors duration-300">
                        andresrandyandrei@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="group -mx-3 px-3 py-3 rounded-lg border border-transparent hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-zinc-600 group-hover:text-blue-600 mt-0.5 flex-shrink-0 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-zinc-500 group-hover:text-blue-700 mb-0.5 transition-colors duration-300">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/andresrandyandrei" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-900 group-hover:text-blue-600 break-all font-medium transition-colors duration-300">
                        linkedin.com/in/andresrandyandrei
                      </a>
                    </div>
                  </div>
                </div>

                {/* GitHub */}
                <div className="group -mx-3 px-3 py-3 rounded-lg border border-transparent hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-zinc-600 group-hover:text-blue-600 mt-0.5 flex-shrink-0 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-zinc-500 group-hover:text-blue-700 mb-0.5 transition-colors duration-300">GitHub</p>
                      <a href="https://github.com/rAndylicioso" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-900 group-hover:text-blue-600 break-all font-medium transition-colors duration-300">
                        github.com/rAndylicioso
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-zinc-600">
          <p>© {new Date().getFullYear()} Randy Andrei Andres. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
