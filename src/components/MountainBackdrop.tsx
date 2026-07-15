'use client';

import Image from 'next/image';

export default function MountainBackdrop() {
  const imageUrl = '/images/Moraine_Lake_17092005.jpg';

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-300/80 bg-slate-900/10 shadow-[0_20px_60px_-20px_rgba(17,35,53,0.35)]">
      <Image
        className="h-[320px] w-full object-cover md:h-[380px]"
        src={imageUrl}
        alt="Moraine Lake"
        width={1200}
        height={700}
      />
    </div>
  );
}
