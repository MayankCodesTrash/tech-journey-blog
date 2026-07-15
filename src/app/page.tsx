import Link from 'next/link';
import Date from '@/components/Date';
import MountainBackdrop from '@/components/MountainBackdrop';
import {getSortedPostsData} from '@/lib/posts';

type AllPostsData = {
  date: string;
  title: string;
  id: string;
}[];

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-300/80 bg-white/70 p-6 shadow-[0_20px_60px_-20px_rgba(17,35,53,0.35)] backdrop-blur md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_55%)]" />
        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Mountain notes</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-800 md:text-4xl">Welcome to my quiet alpine corner of learning.</h2>
          <p className="prose mt-4 max-w-none text-slate-700">
            I&apos;m Mayank, and this space is where I share the things I&apos;m building, learning, and refining while looking out over the peaks.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="https://www.linkedin.com/in/mayank-bhatt-03b2b7313/" className="btn btn-primary">
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </section>

      <MountainBackdrop />

      <section className="rounded-[2rem] border border-slate-300/80 bg-white/70 p-6 shadow-sm backdrop-blur md:p-8">
        <h3 className="text-2xl font-semibold text-primary">Latest posts</h3>
        <ul className="mt-4 space-y-3">
          {allPostsData.map(({id, date, title}) => (
            <li key={id} className="rounded-2xl border border-base-300/70 bg-base-200/50 p-3">
              <Link href={`/posts/${id}`} className="font-medium text-base-content transition hover:text-primary">
                {title}
              </Link>
              <div className="mt-1 text-sm text-base-content/70">
                <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
