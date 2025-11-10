'use client'

import { useState, useEffect } from 'react'
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Star,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Monitor,
  Smartphone,
  Palette,
  Cloud,
  Server,
  Globe,
  Briefcase,
  Zap,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'projects', label: 'Proyek' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'testimonials', label: 'Testimoni' },
    { id: 'partners', label: 'Partner' },
    { id: 'contact', label: 'Kontak' }
  ]

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce modern dengan fitur pembayaran terintegrasi dan dashboard admin yang lengkap.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
      liveDemo: 'https://example.com',
      github: 'https://github.com'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Sistem manajemen tugas dengan fitur kolaborasi real-time dan notifikasi pintar.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveDemo: 'https://example.com',
      github: 'https://github.com'
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'Platform pembuatan konten berbasis AI dengan fitur template dan kustomisasi.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      liveDemo: 'https://example.com',
      github: 'https://github.com'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Dashboard analitik media sosial dengan visualisasi data real-time dan reporting otomatis.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      liveDemo: 'https://example.com',
      github: 'https://github.com'
    }
  ]

  // Skills data
  const skills = [
    { 
      name: 'Frontend Development', 
      level: 90, 
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      icon: Monitor,
      description: 'React, Next.js, TypeScript, Tailwind CSS, HTML/CSS'
    },
    { 
      name: 'Backend Development', 
      level: 85, 
      color: 'bg-gradient-to-r from-green-500 to-emerald-500',
      icon: Server,
      description: 'PHP, Python, Node.js, SQL, REST APIs'
    },
    { 
      name: 'Mobile Development', 
      level: 65, 
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      icon: Smartphone,
      description: 'Android, React Native, Flutter Basics'
    },
    { 
      name: 'UI/UX Design', 
      level: 60, 
      color: 'bg-gradient-to-r from-orange-500 to-red-500',
      icon: Palette,
      description: 'Figma, Responsive Design, User Interface'
    },
    { 
      name: 'Full Stack Development', 
      level: 88, 
      color: 'bg-gradient-to-r from-indigo-500 to-purple-500',
      icon: Globe,
      description: 'MERN Stack, LAMP Stack, Database Design'
    },
    { 
      name: 'Database & SQL', 
      level: 80, 
      color: 'bg-gradient-to-r from-gray-500 to-slate-500',
      icon: Cloud,
      description: 'MySQL, PostgreSQL, MongoDB, Database Optimization'
    },
    { 
      name: 'Cloud Services', 
      level: 75, 
      color: 'bg-gradient-to-r from-teal-500 to-cyan-500',
      icon: Cloud,
      description: 'AWS, Vercel, Netlify, CI/CD, Deployment'
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Ahmad Rizki',
      position: 'CEO TechStart',
      company: 'TechStart Indonesia',
      content: 'Developer yang sangat profesional dan berkualitas. Proyek selesai tepat waktu dengan hasil yang melampaui ekspektasi.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Putri',
      position: 'Product Manager',
      company: 'Digital Solutions',
      content: 'Kerjasama yang sangat menyenangkan. Komunikasi baik dan selalu memberikan solusi terbaik untuk setiap tantangan.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 5
    },
    {
      id: 3,
      name: 'Budi Santoso',
      position: 'CTO',
      company: 'Innovation Labs',
      content: 'Technical skill yang luar biasa dan selalu up-to-date dengan teknologi terbaru. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5
    }
  ]

  // Partners data
  const partners = [
    { 
      name: 'TechCorp Indonesia', 
      description: 'Technology Solutions Partner',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop' 
    },
    { 
      name: 'DigitalPro Creative', 
      description: 'Digital Marketing Agency',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=80&fit=crop' 
    },
    { 
      name: 'CloudBase Systems', 
      description: 'Cloud Infrastructure Provider',
      logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=150&h=80&fit=crop' 
    },
    { 
      name: 'DataFlow Analytics', 
      description: 'Data Science Partner',
      logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=80&fit=crop' 
    },
    { 
      name: 'WebMaster Studio', 
      description: 'Web Development Agency',
      logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=150&h=80&fit=crop' 
    },
    { 
      name: 'CodeLab Academy', 
      description: 'Education & Training Partner',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=150&h=80&fit=crop' 
    }
  ]

  // Auto slider for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Manual navigation functions
  const goToPreviousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      setSubmitMessage('Semua field harus diisi!')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error')
      setSubmitMessage('Format email tidak valid!')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage(data.message || 'Pesan berhasil dikirim! Saya akan segera menghubungi Anda.')
        // Reset form
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Gagal mengirim pesan. Silakan coba lagi.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Terjadi kesalahan. Silakan coba lagi nanti.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Toggle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted rounded-lg ${
                    activeSection === item.id ? 'text-primary bg-muted' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-sm">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="text-primary font-medium">Available for Freelance Projects</span>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    <span className="block">Hi, I'm</span>
                    <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Falikh Rifqi Nail
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    Web Developer & Full Stack Developer with 5+ years of experience building scalable web applications and robust backend systems.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 py-3 rounded-lg font-medium transition-all"
                    onClick={() => scrollToSection('projects')}
                  >
                    View My Work <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </button>
                  <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-medium transition-all" onClick={() => scrollToSection('contact')}>
                    Get In Touch
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">30+</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-card rounded-3xl p-8 shadow-2xl border">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <span className="text-white text-3xl font-bold">FR</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Falikh Rifqi Nail</h3>
                        <p className="text-muted-foreground">Web Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my latest work and see how I've helped businesses achieve their goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group overflow-hidden rounded-lg border bg-card hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium transition-all">
                      <Github className="h-4 w-4 mr-2 inline" />
                      GitHub
                    </button>
                    <button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-md text-sm font-medium transition-all">
                      <ExternalLink className="h-4 w-4 mr-2 inline" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My expertise spans across modern development stack and design tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <div key={skill.name} className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Proficiency</span>
                          <span className="text-xs font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What my clients say about working with me
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={goToPreviousTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              
              <button
                onClick={goToNextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>

              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                      <div className="p-8 text-center bg-card rounded-lg">
                        {/* Name First */}
                        <div className="flex items-center justify-center space-x-4 mb-6">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full border-2 border-primary/20"
                          />
                          <div className="text-left">
                            <div className="font-semibold text-lg">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.position} at {testimonial.company}
                            </div>
                          </div>
                        </div>
                        
                        {/* Stars Second */}
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        {/* Comment Last */}
                        <p className="text-lg text-muted-foreground italic leading-relaxed">
                          "{testimonial.content}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentTestimonial === index 
                        ? 'bg-primary w-8' 
                        : 'bg-muted hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Companies I've had the pleasure to work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div key={partner.name} className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover filter group-hover:grayscale-0 transition-all duration-300 grayscale"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next project and bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="p-8 bg-card rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              
              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <div className={`mb-4 p-4 rounded-lg ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200' 
                    : 'bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-background"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-background"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none bg-background"
                    disabled={isSubmitting}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-card rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">falikh.rifqi@example.com</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+62 812 3456 7890</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">Jakarta, Indonesia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Falikh Rifqi Nail. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}