"use client"

import { motion } from 'framer-motion'
import { GraduationCap, Building2, Award } from 'lucide-react'
import { useTranslations } from 'next-intl';



export default function Partners() {
  const t = useTranslations("data.Partners");

  const partners = [
    { name: t("items.1"), icon: GraduationCap },
    { name: t("items.2"), icon: Building2 },
    { name: t("items.3"), icon: GraduationCap },
    { name: t("items.4"), icon: Award },
    { name: t("items.5"), icon: GraduationCap },
    { name: t("items.6"), icon: Building2 },
  ]

  return (
    <section className="py-20 md:py-28 bg-ocean-light dark:bg-[#0A3D62]/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#1B6CA8]/10 text-[#1B6CA8] rounded-full text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("title")}{" "} <span className="text-[#1B6CA8]">{t("titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center gap-3 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B6CA8] to-[#4DA8DA] flex items-center justify-center">
                <partner.icon className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-center text-muted-foreground">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10 text-muted-foreground"
        >
          {t("footer")}
        </motion.p>
      </div>
    </section>
  )
}
