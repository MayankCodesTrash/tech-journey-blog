import React from 'react';
import {FaGithub, FaInstagram, FaRegEnvelope} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
import Link from 'next/link';
import type {IconType} from 'react-icons';

interface FooterProps {
  socialLinks: Partial<{ twitter: string; github: string; email: string; instagram: string }>;
}

const SocialLink = (props: { link: string; Icon: IconType }) => {
  const {link, Icon} = props;
  return (
    <Link href={link} className="rounded-full p-2 text-base-content transition hover:bg-base-200 hover:text-primary">
      <Icon size={20} />
    </Link>
  );
};

const Footer: React.FC<FooterProps> = ({socialLinks}) => {
  return (
    <footer className="border-t border-base-300/70 bg-base-100/80 px-4 py-5 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 md:flex-row">
        <p className="text-sm text-base-content/80">Sharing ideas one post at a time.</p>
        <div className="flex items-center gap-2">
          {socialLinks.twitter && <SocialLink link={socialLinks.twitter} Icon={FaXTwitter} />}
          {socialLinks.github && <SocialLink link={socialLinks.github} Icon={FaGithub} />}
          {socialLinks.instagram && <SocialLink link={socialLinks.instagram} Icon={FaInstagram} />}
          {socialLinks.email && <SocialLink link={socialLinks.email} Icon={FaRegEnvelope} />}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

