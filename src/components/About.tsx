"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Target, Flag, Shield, Users, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  const t = useTranslations("data.About");

  const highlights = [
    { icon: Shield, text: t("Profile.highlights.transparent") },
    { icon: Users, text: t("Profile.highlights.professional") },
    { icon: Globe, text: t("Profile.highlights.network") },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#4DA8DA]/10 text-[#1B6CA8] rounded-full text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("title")}{" "}
            <span className="text-[#1B6CA8]">{t("titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {/* Profile Card */}
          <motion.div variants={item} className="col-span-3 lg:col-span-2">
            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{t("Profile.title")}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {t("Profile.description")}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-sm"
                    >
                      <h.icon className="h-4 w-4" />
                      {h.text}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={item} className="col-span-3 lg:col-span-1">
            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#4DA8DA]/10 rounded-lg">
                    <Target className="h-6 w-6 text-[#1B6CA8]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {t("Vision.title")}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t("Vision.description")}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mission Card */}
          <motion.div variants={item} className="col-span-3">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#4DA8DA]/10 rounded-lg">
                    <Flag className="h-6 w-6 text-[#1B6CA8]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {t("Mission.title")}
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    t("Mission.items.1"),
                    t("Mission.items.2"),
                    t("Mission.items.3"),
                    t("Mission.items.4"),
                  ].map((mission, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-muted rounded-lg">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#1B6CA8] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </span>
                      <p className="text-sm text-muted-foreground">{mission}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
