import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code2, Cloud, Mail, Github, Linkedin, ExternalLink, Award, Briefcase, MapPin, Phone, BookOpen, Sparkles, Rocket, Terminal, Database, Layout, Server } from 'lucide-react';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animated particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach((particle2, j) => {
          if (i === j) return;
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const experience = [
    {
      title: 'Full-stack Developer',
      company: 'Freelance',
      period: 'January 2025 – Present',
      achievements: [
        'Achieved 30% reduction in page load times through front-end and backend optimization',
        'Enhanced user engagement by 40% with responsive React and Tailwind CSS components',
        'Improved data retrieval performance by 25% with robust RESTful APIs',
        'Conducted thorough code reviews, upholding high-quality standards and reducing deployment errors.' 
      ],
      icon: <Code2 className="w-5 h-5" />
    },
    {
      title: 'Customer Service Representative',
      company: 'AMG Realtors, Nairobi',
      period: 'September 2023 – May 2024',
      achievements: [
        'Improved customer satisfaction scores by 30% through transparent communication',
        'Maintained tracking system for 150+ clients with 100% timely processing',
        'Optimized engagement across 3 time zones for diaspora clients',
        'Worked flexible hours to engage with diaspora clients across 3 time zones, optimizing communication and support, resulting in improvement in client retention. '
      ],
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: 'ICT Intern',
      company: 'National Treasury and Planning, Nairobi',
      period: 'August 2021 – December 2022',
      achievements: [
        'Developed 50+ customized reports in response to data analysis requests from government departments, supporting budgeting and financial planning, leading to more informed decision-making.', 
        'Implemented Business Intelligence (BI) solutions by addressing 100+ user inquiries, monitoring system performance, and effectively communicating technical and functional issues, ensuring 99% system uptime.', 
        'Provided hardware and software support for 100+ users within the ministry, improving overall system efficiency and reducing downtime by 50%.', 
        'Configured and maintained network infrastructure, including servers and firewalls, ensuring optimal security and performance with zero security breaches.'
      ],
      icon: <Server className="w-5 h-5" />
    }
  ];

  const projects = [
    {
      title: 'Mindcaretest.health',
      description: 'Mental health assessment platform with personalized evaluations and therapist recommendations',
      achievements: [
        'Built full-stack platform with React and Flask for 20-question assessments',
        'Integrated secure mobile payments for personalized results access',
        'Implemented html2canvas for downloadable result cards',
        'Deployed on Truehost via cPanel with consistent uptime'
      ],
      tech: ['React', 'Flask', 'SQLite', 'HTML2Canvas', 'Payment Integration'],
      liveLink: 'https://mindcaretest.health/home',
      githubLink: 'https://github.com/Mbuthiasakara1/Better-Clinic'
    },
    {
      title: 'Malazikenyaltd',
      description: 'Corporate website for international Engineering, Procurement, and Construction company',
      achievements: [
        'Designed responsive website enhancing digital presence',
        'Implemented intuitive navigation improving engagement',
        'Optimized performance with SEO best practices',
        'Integrated contact forms and document downloads'
      ],
      tech: ['React', 'HTML5', 'CSS3', 'JavaScript', 'SEO'],
      liveLink: 'https://malazikenyaltd.com/',
      githubLink: 'https://github.com/Mbuthiasakara1/Malazi-Kenya'
    }
  ];

  const education = [
    {
      degree: 'AWS Certified Cloud Practitioner (CCP)',
      institution: 'Ajira Digital (AWS restart)',
      period: 'June 2025 – Aug 2025',
      topics: ['AWS Global Infrastructure', 'IAM, EC2, S3', 'CloudWatch, RDS, Lambda'],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      degree: 'Software Engineering Certificate',
      institution: 'Moringa School, Kenya',
      period: 'June 2024 – Nov 2024',
      topics: ['React.js, HTML, CSS, JavaScript', 'Flask, PostgreSQL, SQLite'],
      icon: <Code2 className="w-6 h-6" />
    },
    {
      degree: 'BSc Computer Science',
      institution: 'South Eastern Kenya University',
      period: 'Aug 2017 – Nov 2021',
      topics: [],
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="fixed top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="fixed bottom-0 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold flex items-center gap-2">
              <Terminal className="w-6 h-6 text-white-400 " />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-white">
                Mbuthia Ryne
              </span>
            </div>
            <div className="hidden md:flex gap-8">
              {['About', 'Experience', 'Projects', 'Education', 'Contact'].map(item => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-purple-400 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="pt-32 pb-20 px-6 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm animate-fade-in">
                  <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                  <span className="text-sm text-purple-300">Available for opportunities</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-bold leading-tight animate-slide-up">
                  <span className=" text-white">
                    Mbuthia Ryne Warukira
                  </span>
                </h1>
                
                <p className="text-3xl text-purple-300 animate-slide-up animation-delay-200">
                  Full-Stack Developer & Cloud Engineer
                </p>
                
                <p className="text-lg text-slate-300 leading-relaxed animate-slide-up animation-delay-400">
                  Building scalable web applications and automating cloud infrastructure. 
                  Passionate about DevOps practices, CI/CD pipelines, and bridging the gap between development and operations.
                </p>

                <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-600">
                  <a href="mailto:mbuthiaryne@gmail.com">
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300">
                      <Mail className="w-4 h-4 mr-2" />
                      Get In Touch
                    </Button>
                  </a>
                  <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300">
                    <a href= "https://github.com/Mbuthiasakara1"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300">
                    <a href= "https://www.linkedin.com/in/ryne-mbuthia-0b3413219"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-400 animate-slide-up animation-delay-800">
                  <div className="flex items-center gap-2 text-lg">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    Kenya
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <Phone className="w-4 h-4 text-purple-400" />
                    +254 712 431 055
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in animation-delay-400">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                <Card className="relative bg-slate-900/50 border-purple-500/30 backdrop-blur-xl overflow-hidden group hover:border-purple-400/50 transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-300">Technical Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Layout className="w-4 h-4 text-purple-400" />
                        <p className="text-sm font-semibold text-purple-300">Frontend</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map(skill => (
                          <Badge key={skill} variant="secondary" className="bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-4 h-4 text-pink-400" />
                        <p className="text-sm font-semibold text-pink-300">Backend</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'Flask', 'SQLite', 'RESTful APIs', 'PostgreSQL'].map(skill => (
                          <Badge key={skill} variant="secondary" className="bg-pink-500/10 text-pink-300 border-pink-500/30 hover:bg-pink-500/20 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Cloud className="w-4 h-4 text-blue-400" />
                        <p className="text-sm font-semibold text-blue-300">Cloud & DevOps</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['AWS', 'EC2', 'S3', 'RDS', 'IAM', 'Git'].map(skill => (
                          <Badge key={skill} variant="secondary" className="bg-blue-500/10 text-blue-300 border-blue-500/30 hover:bg-blue-500/20 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center">
              <span className=" text-white">
                Professional Experience
              </span>
            </h2>
            
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <Card key={idx} className="bg-slate-900/30 border-purple-500/30 backdrop-blur-xl hover:border-purple-400/50 transition-all duration-500 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          {exp.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-purple-200 mb-1">{exp.title}</CardTitle>
                          <CardDescription className="text-lg text-slate-400">{exp.company}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <Rocket className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center">
              <span className="text-white">
                Featured Projects
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <Card key={idx} className="bg-slate-900/30 border-purple-500/30 backdrop-blur-xl hover:border-purple-400/50 transition-all duration-500 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-200 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base text-slate-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-purple-400">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-purple-500/50 text-purple-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button variant="ghost" className="text-purple-300 hover:text-purple-200 hover:bg-purple-500/10"
                          onClick={() => window.open(project.liveLink, '_blank')}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button variant="ghost" className="text-purple-300 hover:text-purple-200 hover:bg-purple-500/10">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center">
              <span className="text-white">
                Education & Certifications
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {education.map((edu, idx) => (
                <Card key={idx} className="bg-slate-900/30 border-purple-500/30 backdrop-blur-xl hover:border-purple-400/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <CardHeader>
                    <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      {edu.icon}
                    </div>
                    <CardTitle className="text-xl text-purple-200">{edu.degree}</CardTitle>
                    <CardDescription className="text-slate-400">{edu.institution}</CardDescription>
                    <Badge variant="outline" className="border-purple-500/50 text-purple-300 w-fit mt-2">
                      {edu.period}
                    </Badge>
                  </CardHeader>
                  {edu.topics.length > 0 && (
                    <CardContent>
                      <ul className="space-y-1 text-sm text-slate-300">
                        {edu.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-purple-400">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">
                Let's Build Something Amazing
              </span>
            </h2>
            <p className="text-xl mb-12 text-slate-300">
              I'm always interested in hearing about new projects and opportunities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
           
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mbuthiaryne@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-110 transition-all duration-300">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </Button>
                </a>

               <a href="https://www.linkedin.com/in/ryne-mbuthia-0b3413219" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 transform hover:scale-110 transition-all duration-300">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              </a>
              <a href="https://github.com/Mbuthiasakara1" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 transform hover:scale-110 transition-all duration-300">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-purple-500/30 py-8 px-6 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto text-center text-slate-400">
            <p>© 2025 Mbuthia Ryne Warukira</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-200 { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
        .animation-delay-400 { animation-delay: 0.4s; opacity: 0; animation-fill-mode: forwards; }
        .animation-delay-600 { animation-delay: 0.6s; opacity: 0; animation-fill-mode: forwards; }
        .animation-delay-800 { animation-delay: 0.8s; opacity: 0; animation-fill-mode: forwards; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}