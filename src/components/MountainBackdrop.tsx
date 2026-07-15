'use client';

import { motion } from 'framer-motion';

export default function MountainBackdrop() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-300/80 bg-slate-900/10 shadow-[0_20px_60px_-20px_rgba(17,35,53,0.35)]">
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[70%]"
        initial={{ y: 24, opacity: 0.8 }}
        animate={{ y: [8, -8, 8], opacity: 1 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 1200 700" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-label="Animated mountain landscape">
          <rect width="1200" height="700" fill="rgba(255,255,255,0)" />
          <path d="M0 540L140 410L240 480L360 300L480 470L640 260L770 430L910 320L1040 470L1200 360V700H0Z" fill="#4f6b73" />
          <path d="M0 570L150 450L310 525L430 390L590 560L720 340L860 500L1000 370L1200 520V700H0Z" fill="#3b525d" />
          <path d="M0 620L180 480L340 560L500 420L680 600L820 470L960 560L1200 460V700H0Z" fill="#23353e" />
          <path d="M300 330L430 120L560 330H300Z" fill="#8ba2ac" />
          <path d="M560 360L710 90L850 360H560Z" fill="#7b9098" />
          <path d="M180 420L320 220L440 420H180Z" fill="#6e838b" />
          <path d="M120 620L240 540L330 620H120Z" fill="#dfe8eb" opacity="0.7" />
        </svg>
      </motion.div>
      <div className="relative h-[320px] md:h-[380px]" />
    </div>
  );
}
