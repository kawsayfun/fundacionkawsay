'use client';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function SocialLinks() {
  const socialMedia = [
    { icon: FaFacebook, href: '#', color: 'bg-blue-600' },
    { icon: FaTwitter, href: '#', color: 'bg-sky-500' },
    { icon: FaInstagram, href: '#', color: 'bg-pink-600' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@fundacionkawsay2941', color: 'bg-red-600' },  // Nuevo ícono de YouTube
  ];

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4">
      {socialMedia.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            className={`social-icon ${social.color} text-white p-3 rounded-full shadow-md hover:scale-105 transition-transform`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}
