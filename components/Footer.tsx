"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const quickLinks = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Layanan', href: '#services' },
  { name: 'Proses', href: '#process' },
  { name: 'Kontak', href: '#contact' },
]

const services = [
  'Penerjemah',
  'Connect Company',
  'Program Magang',
  'Tokutei Ginou',
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0A3D62] via-[#0A3D62] to-[#1B6CA8] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center">
                {/* <span className="font-bold text-lg">K</span> */}
                <Image src={'/kss.png'} width={'600'} height={300} alt='logo-kss' />
              </div>
              <span className="font-bold text-xl">Kinki Sultra Sinergi</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Mitra profesional tenaga kerja Indonesia di Jepang.
              Transparan • Legal • Terpercaya
            </p>
            <div className="flex gap-3">
              <div className="px-3 py-1 bg-white/10 rounded-full text-xs">Transparan</div>
              <div className="px-3 py-1 bg-white/10 rounded-full text-xs">Legal</div>
              <div className="px-3 py-1 bg-white/10 rounded-full text-xs">Terpercaya</div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-6">Navigasi</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6">Layanan</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-white/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA]" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li>
                <a className="flex items-start gap-3" href="https://maps.app.goo.gl/ymyYrhzLB7pht25p9" target='_blank'>
                  <MapPin className="h-5 w-5 text-[#4DA8DA] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">Sulawesi Tenggara, Indonesia</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3" href="mailto:kinki.kss2021@gmail.com" target='_blank'>
                  <Mail className="h-5 w-5 text-[#4DA8DA] flex-shrink-0" />
                  <span className="text-white/70">kinki.kss2021@gmail.com</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3" href="https://wa.me/818083085922" target='_blank'>
                  <Phone className="h-5 w-5 text-[#4DA8DA] flex-shrink-0" />
                  <span className="text-white/70">+81 80-8308-5922</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8 text-center"
        >
          <p className="text-white/50 text-sm">
            © 2021 - {new Date().getFullYear()} Kinki Sultra Sinergi (KSS). All rights reserved ny Scale.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
