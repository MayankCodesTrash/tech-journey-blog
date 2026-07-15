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
      <div className="drawer-content flex flex-col items-center pt-[4.25rem]">
        <div className="navbar fixed top-0 z-10 h-18 w-full border-b border-base-300/70 bg-base-100/90 backdrop-blur">
          <div className="flex-none hidden h-12 w-12 lg:block">
            <div className="avatar">
              <div className="w-12 rounded-full border-2 border-primary">
                <Image alt="Profile image" src={profilePic} />
              </div>
            </div>
          </div>
          <div className="flex-none h-12 w-12 lg:hidden">
            <label htmlFor="nav-drawer" className="btn btn-square btn-ghost border border-base-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex flex-1 items-center justify-between px-2">
            <Link href="/">
              <h1 className="text-2xl font-semibold text-primary md:text-3xl">{title}</h1>
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
          <ul className="menu h-full w-80 bg-base-100 p-4 pt-20 shadow-xl">
            {renderLinks()}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBarContainer;
