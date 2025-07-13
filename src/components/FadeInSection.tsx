import { motion } from "motion/react";

export default function FadeInSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden flex min-h-screen items-center">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-start p-4 md:pt-0"
      >
        {children}
      </motion.section>
    </div>
  );
}
