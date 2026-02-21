"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Peserta Program Tokutei Ginou',
    content: 'Berkat KSS, proses saya bekerja di Jepang menjadi lebih jelas dan terarah. Saya merasa didampingi sejak awal hingga bekerja. Sangat profesional dan terpercaya.',
    rating: 5,
  },
  {
    name: 'Siti Rahayu',
    role: 'Peserta Magang',
    content: 'Komunikasi dengan perusahaan menjadi lebih mudah karena ada dukungan penerjemah dari KSS. Tim sangat responsif dan membantu.',
    rating: 5,
  },
  {
    name: 'Ahmad Hidayat',
    role: 'Peserta Program Tokutei Ginou',
    content: 'KSS membantu saya dari awal sampai saya bisa bekerja di Jepang dengan aman. Semua proses transparan dan sesuai regulasi.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#4DA8DA]/10 text-[#1B6CA8] rounded-full text-sm font-medium mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apa Kata <span className="text-[#1B6CA8]">Mereka?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pengalaman nyata dari peserta yang telah berhasil berkarier di Jepang bersama KSS.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-none shadow-xl bg-background">
                  <CardContent className="p-8 md:p-12">
                    <Quote className="h-12 w-12 text-[#4DA8DA]/30 mb-6" />
                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                      "{testimonials[current].content}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-foreground">{testimonials[current].name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-[#1B6CA8] text-[#1B6CA8] hover:bg-[#1B6CA8] hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === current ? 'bg-[#1B6CA8] w-8' : 'bg-[#1B6CA8]/30'
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-[#1B6CA8] text-[#1B6CA8] hover:bg-[#1B6CA8] hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
