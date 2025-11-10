import { NextRequest, NextResponse } from 'next/server'

const testimonials = [
  {
    id: 1,
    name: 'Ahmad Rizki',
    position: 'CEO TechStart',
    company: 'TechStart Indonesia',
    content: 'Developer yang sangat profesional dan berkualitas. Proyek selesai tepat waktu dengan hasil yang melampaui ekspektasi.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    featured: true,
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Sarah Putri',
    position: 'Product Manager',
    company: 'Digital Solutions',
    content: 'Kerjasama yang sangat menyenangkan. Komunikasi baik dan selalu memberikan solusi terbaik untuk setiap tantangan.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    featured: true,
    date: '2024-01-10'
  },
  {
    id: 3,
    name: 'Budi Santoso',
    position: 'CTO',
    company: 'Innovation Labs',
    content: 'Technical skill yang luar biasa dan selalu up-to-date dengan teknologi terbaru. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    featured: true,
    date: '2024-01-05'
  },
  {
    id: 4,
    name: 'Maya Indah',
    position: 'Marketing Director',
    company: 'Creative Agency',
    content: 'Hasil kerja yang sangat memuaskan. Website yang dibuat tidak hanya bagus secara visual tapi juga sangat user-friendly.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    featured: false,
    date: '2023-12-20'
  },
  {
    id: 5,
    name: 'Rudi Hermawan',
    position: 'Founder',
    company: 'StartupKu',
    content: 'Membantu kami dari awal hingga launching. Sangat responsif dan selalu available untuk konsultasi.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    featured: false,
    date: '2023-12-15'
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured')
    const limit = searchParams.get('limit')

    let filteredTestimonials = testimonials

    if (featured === 'true') {
      filteredTestimonials = filteredTestimonials.filter(testimonial => testimonial.featured)
    }

    if (limit) {
      filteredTestimonials = filteredTestimonials.slice(0, parseInt(limit))
    }

    return NextResponse.json({
      success: true,
      data: filteredTestimonials,
      total: filteredTestimonials.length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch testimonials' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Here you would typically save to database
    const newTestimonial = {
      id: testimonials.length + 1,
      ...body,
      featured: false,
      date: new Date().toISOString().split('T')[0]
    }

    return NextResponse.json({
      success: true,
      data: newTestimonial,
      message: 'Testimonial created successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create testimonial' },
      { status: 500 }
    )
  }
}