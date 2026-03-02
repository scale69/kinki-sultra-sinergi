"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("data.Contact");
  const contactInfo = [
    {
      icon: MapPin,
      title: t("items.address.title"),
      content: t("items.address.content"),
      subContent: t("items.address.subContent"),
      url: "https://maps.app.goo.gl/ttRDqhukdqYhLbV78",
    },
    {
      icon: Mail,
      title: t("items.email.title"),
      content: t("items.email.content"),
      subContent: t("items.email.subContent"),
      url: "mailto:kinki.kss2021@gmail.com",
    },
    {
      icon: Phone,
      title: t("items.phone.title"),
      content: t("items.phone.content"),
      subContent: t("items.phone.subContent"),
      url: "https://wa.me/818083085922",
    },
    {
      icon: Clock,
      title: t("items.hours.title"),
      content: t("items.hours.content"),
      subContent: t("items.hours.subContent"),
    },
  ];
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-background w-full overflow-hidden"
    >
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a href={info.url} target="_blank">
                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] flex items-center justify-center mb-4">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-[#1B6CA8] font-medium">
                          {info.content}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subContent}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-xl">
              <div className="h-64 bg-gradient-to-br from-[#0A3D62]/10 to-[#4DA8DA]/10 flex items-center justify-center">
                <div className="w-full text-center">
                  {/* <MapPin className="h-12 w-12 text-[#1B6CA8] mx-auto mb-3" /> */}
                  <iframe
                    className="w-full h-64"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8919525820156!2d122.56091839999999!3d-4.0424656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d9893000550c1b1%3A0x9bbcb558e88f7e76!2sLPK%20PT%20KINKI%20SULTRA%20SINERGI!5e0!3m2!1sen!2sjp!4v1772461974585!5m2!1sen!2sjp"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
