"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Languages, Handshake, GraduationCap, FileCheck, Users, Building } from 'lucide-react'

const services = [
  {
    icon: Languages,
    title: 'Penerjemah',
    description: 'Interpretasi & penerjemahan profesional untuk dokumen resmi dan komunikasi bisnis.',
    features: [
      'Dokumen resmi perusahaan',
      'Dokumen administrasi kerja',
      'Kontrak kerja',
      'Pendampingan komunikasi'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Handshake,
    title: 'Connect Company',
    description: 'Menghubungkan tenaga kerja Indonesia dengan perusahaan di Jepang.',
    features: [
      'Konsultasi penempatan kerja',
      'Proses matching sesuai keahlian',
      'Pendampingan wawancara',
      'Koordinasi administrasi awal'
    ],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: GraduationCap,
    title: 'Magang & Tokutei Ginou',
    description: 'Pendampingan program magang dan Tokutei Ginou (Specified Skilled Worker).',
    features: [
      'Koordinasi dengan perusahaan',
      'Pendampingan administrasi',
      'Monitoring selama program',
      'Konsultasi persyaratan'
    ],
    color: 'from-emerald-500 to-teal-500'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#4DA8DA]/10 text-[#1B6CA8] rounded-full text-sm font-medium mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solusi Lengkap untuk <span className="text-[#1B6CA8]">Karier di Jepang</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan profesional untuk mendukung perjalanan karier Anda di Jepang.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-[#1B6CA8] transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-5 h-5 rounded-full bg-[#4DA8DA]/10 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-[#1B6CA8]" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
