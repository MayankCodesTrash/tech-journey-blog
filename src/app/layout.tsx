import './globals.css'
import type {Metadata} from 'next'
import {Karla} from 'next/font/google';
import NavBarContainer from '@/components/NavBarContainer';
import Footer from '@/components/Footer';

/*
TODO:  Change these things along with:
  - avatar.jpeg in /public/images
  - favicon.ico in /public
 */
const font = Karla({ weight: '400', subsets: ['latin']})
const title = 'Mayank\'s Blog';
const description = 'A warm corner of my learning journey';
const links = [
  {title: 'Home', href: '/'},
];
const SocialLinks = {
  twitter: 'https://x.com/dunscombe_luke',
  github: '#github',
  instagram: '#insta',
  email: 'mailto:ldunscombe@leantechniques.com'
}

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" data-theme="winter">
      <body className={`${font.className} relative flex min-h-screen flex-col overflow-x-hidden bg-transparent text-base-content`}>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[-8%] h-[34rem] w-[34rem] rounded-full bg-sky-200/50 blur-3xl" />
          <div className="absolute bottom-0 right-[-8%] h-[26rem] w-[26rem] rounded-full bg-slate-200/50 blur-3xl" />
        </div>
        <NavBarContainer title={title} links={links}>
          <main className="relative z-10 flex-1 w-full max-w-6xl px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16">
            {children}
          </main>
        </NavBarContainer>
        <Footer socialLinks={SocialLinks}/>
      </body>
    </html>
  )
}
