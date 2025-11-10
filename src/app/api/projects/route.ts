import { NextRequest, NextResponse } from 'next/server'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur pembayaran terintegrasi dan dashboard admin yang lengkap.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    liveDemo: 'https://example.com',
    github: 'https://github.com',
    featured: true,
    category: 'web'
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'Sistem manajemen tugas dengan fitur kolaborasi real-time dan notifikasi pintar.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    liveDemo: 'https://example.com',
    github: 'https://github.com',
    featured: true,
    category: 'web'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'Platform pembuatan konten berbasis AI dengan fitur template dan kustomisasi.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    liveDemo: 'https://example.com',
    github: 'https://github.com',
    featured: true,
    category: 'ai'
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Dashboard analitik media sosial dengan visualisasi data real-time dan reporting otomatis.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    liveDemo: 'https://example.com',
    github: 'https://github.com',
    featured: true,
    category: 'web'
  },
  {
    id: 5,
    title: 'Mobile Banking App',
    description: 'Aplikasi mobile banking dengan fitur transfer, pembayaran, dan investasi.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL'],
    liveDemo: 'https://example.com',
    github: 'https://github.com',
    featured: false,
    category: 'mobile'
  },
  {
    id: 6,
    title: 'Learning Management System',
    description: 'Platform pembelajaran online dengan fitur video streaming dan quiz interaktif.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
    technologies: ['Next.js', 'GraphQL', 'AWS', 'PostgreSQL'],
    liveDemo: 'https://example.com',
    github: 'https://github.com',
    featured: false,
    category: 'web'
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured')
    const category = searchParams.get('category')

    let filteredProjects = projects

    if (featured === 'true') {
      filteredProjects = filteredProjects.filter(project => project.featured)
    }

    if (category) {
      filteredProjects = filteredProjects.filter(project => project.category === category)
    }

    return NextResponse.json({
      success: true,
      data: filteredProjects,
      total: filteredProjects.length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Here you would typically save to database
    const newProject = {
      id: projects.length + 1,
      ...body,
      featured: false
    }

    return NextResponse.json({
      success: true,
      data: newProject,
      message: 'Project created successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create project' },
      { status: 500 }
    )
  }
}