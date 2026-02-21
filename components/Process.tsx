"use client"

import { motion } from 'framer-motion'
import { MessageCircle, ClipboardCheck, FileText, Plane, HeartHandshake } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    title: 'Konsultasi Awal',
    description: 'Calon peserta mendapatkan penjelasan menyeluruh mengenai program dan persyaratan.',
  },
  {
    icon: ClipboardCheck,
    title: 'Seleksi & Evaluasi',
    description: 'Proses seleksi berdasarkan kemampuan, kesiapan, dan kesesuaian bidang kerja.',
  },
  {
    icon: FileText,
    title: 'Persiapan Dokumen',
    description: 'Pendampingan administrasi sesuai regulasi Jepang.',
  },
  {
    icon: Plane,
    title: 'Penempatan Kerja',
    description: 'Koordinasi dengan perusahaan penerima dan proses keberangkatan.',
  },
  {
    icon: HeartHandshake,
    title: 'Pendampingan di Jepang',
    description: 'Monitoring dan dukungan selama masa kerja.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#4DA8DA]/10 text-[#1B6CA8] rounded-full text-sm font-medium mb-4">
            Alur Proses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Langkah Menuju <span className="text-[#1B6CA8]">Karier di Jepang</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proses yang jelas dan terstruktur untuk memastikan perjalanan karier Anda berjalan lancar.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start gap-6 mb-8 last:mb-0"
            >
              {/* Timeline Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-7 top-16 w-0.5 h-full bg-gradient-to-b from-[#1B6CA8] to-[#4DA8DA]/30" />
              )}

              {/* Step Number & Icon */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] flex items-center justify-center shadow-lg"
                >
                  <step.icon className="h-6 w-6 text-white" />
                </motion.div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#4DA8DA] flex items-center justify-center text-white text-xs font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex-1 bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-border"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
