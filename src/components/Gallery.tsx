"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: 40 },
};

export default function Gallery() {
  const t = useTranslations("data.Gallery");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = [
    {
      src: "/gallery/a.png",
      alt: t("items.1.alt"),
      caption: t("items.1.caption"),
    },
    {
      src: "/gallery/b.png",
      alt: t("items.2.alt"),
      caption: t("items.2.caption"),
    },
    {
      src: "/gallery/c.png",
      alt: t("items.3.alt"),
      caption: t("items.3.caption"),
    },
    {
      src: "/gallery/d.png",
      alt: t("items.4.alt"),
      caption: t("items.4.caption"),
    },
    {
      src: "/gallery/e.jpeg",
      alt: t("items.5.alt"),
      caption: t("items.5.caption"),
    },
    {
      src: "/gallery/f.jpeg",
      alt: t("items.6.alt"),
      caption: t("items.6.caption"),
    },
  ];

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
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
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6CA8] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="border-none shadow-lg p-0 overflow-hidden">
                <div className="relative aspect-4/3">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 text-left">
                    <p className="text-xs md:text-sm text-white/90 line-clamp-2">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.button>
          ))}
        </div>

        <p className="mt-8 text-xs md:text-sm text-muted-foreground text-center">
          {t("clickHint")}
        </p>
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute -top-10 right-0 text-white/80 hover:text-white flex items-center gap-2 text-sm md:text-base"
              >
                <X className="h-5 w-5" />
                {t("close")}
              </button>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/60">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain md:object-cover"
                />
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm md:text-base text-white/90">
                  {activeImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}