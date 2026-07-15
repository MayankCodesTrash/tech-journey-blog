import React from 'react';
import Link from 'next/link';
import type {UrlObject} from 'url';
import Image from 'next/image';
import profilePic from '../../public/images/avatar.jpg';

interface NavBarContainerProps {
  children: React.ReactNode;
  title: string;
  links?: {
    href: string | UrlObject;
    title: string;
  }[];
}

const NavBarContainer: React.FC<NavBarContainerProps> = ({title, children, links}) => {
  function renderLinks() {
    return links?.map((l, i) => (
      <li key={i}>
        <Link href={l.href} className="rounded-full px-3 py-2 text-sm font-medium text-base-content transition hover:bg-base-200 hover:text-primary">
          {l.title}
        </Link>
      </li>
    ));
  }

  return (
    <div className="drawer flex-1">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center pt-[4.75rem]">
        <div className="navbar fixed top-0 z-20 h-16 w-full border-b border-slate-300/80 bg-white/80 px-4 shadow-sm backdrop-blur md:px-6 lg:px-8">
          <div className="hidden h-10 w-10 lg:block">
            <div className="avatar">
              <div className="w-10 rounded-full border-2 border-slate-700">
                <Image alt="Profile image" src={profilePic} width={40} height={40} />
              </div>
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center lg:hidden">
            <label htmlFor="nav-drawer" className="btn btn-square btn-ghost border border-slate-300 bg-white/70">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="mx-3 flex flex-1 items-center justify-between px-1">
            <Link href="/">
              <h1 className="text-xl font-semibold text-slate-800 md:text-2xl">{title}</h1>
            </Link>
          </div>
          {links && (
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal px-0">
                {renderLinks()}
              </ul>
            </div>
          )}
        </div>
        {children}
      </div>
      {links && (
        <div className="drawer-side">
          <label htmlFor="nav-drawer" className="drawer-overlay"></label>
          <ul className="menu h-full w-80 bg-white/95 p-4 pt-20 shadow-xl">
            {renderLinks()}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBarContainer;
