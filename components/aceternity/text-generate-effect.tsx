"use client";

import { motion } from "framer-motion";

export function TextGenerateEffect({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ delay: i * 0.04, duration: 0.35 }}
          className="inline"
        >
          {w}{" "}
        </motion.span>
      ))}
    </span>
  );
}
