'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Github,
  Music // For TikTok
} from 'lucide-react';

interface SocialMedia {
  id: string;
  platform: string;
  url: string;
  username: string;
  isVisible: boolean;
}

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
  github: Github,
  tiktok: Music
};

const socialColors = {
  facebook: 'hover:text-blue-600',
  twitter: 'hover:text-sky-500',
  instagram: 'hover:text-pink-500',
  youtube: 'hover:text-red-600',
  linkedin: 'hover:text-blue-700',
  github: 'hover:text-gray-800 dark:hover:text-gray-200',
  tiktok: 'hover:text-black dark:hover:text-white'
};

interface SocialMediaLinksProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

export default function SocialMediaLinks({ 
  className = '', 
  size = 'md',
  showLabels = false 
}: SocialMediaLinksProps) {
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSocialMedia = async () => {
      try {
        const response = await fetch('/api/social-media');
        const data: SocialMedia[] = await response.json();
        setSocialMedia(data.filter(social => social.isVisible));
      } catch (error) {
        console.error('Error fetching social media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialMedia();
  }, []);

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-5 h-5';
      case 'lg':
        return 'w-8 h-8';
      default:
        return 'w-6 h-6';
    }
  };

  const getContainerPadding = () => {
    switch (size) {
      case 'sm':
        return 'p-2';
      case 'lg':
        return 'p-4';
      default:
        return 'p-3';
    }
  };

  if (loading) {
    return (
      <div className={className || 'flex gap-4 justify-center items-center flex-wrap'}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`${getContainerPadding()} bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse`}
          >
            <div className={`${getSizeClasses()} bg-gray-300 dark:bg-gray-600 rounded`} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={className || 'flex gap-4 justify-center items-center flex-wrap'}>
      {socialMedia.map((social, index) => {
        const IconComponent = socialIcons[social.platform as keyof typeof socialIcons];
        const colorClass = socialColors[social.platform as keyof typeof socialColors];
        
        if (!IconComponent) return null;

        return (
          <motion.a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${getContainerPadding()}
              bg-gray-100 dark:bg-gray-800 
              rounded-full 
              text-gray-600 dark:text-gray-400 
              ${colorClass}
              transition-all duration-300 
              hover:scale-110 hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              group
              flex items-center justify-center
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={`${social.platform.charAt(0).toUpperCase() + social.platform.slice(1)} - @${social.username}`}
          >
            <IconComponent className={getSizeClasses()} />
            {showLabels && (
              <span className="sr-only">
                {social.platform.charAt(0).toUpperCase() + social.platform.slice(1)}
              </span>
            )}
          </motion.a>
        );
      })}
    </div>
  );
}
