import React from "react";

interface SocialMediaButtonProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  icon,
  href,
  label,
}) => {
  return (
    <a
      href={href}
      className="flex relative justify-center items-center w-10 h-10 bg-lime-900 rounded cursor-pointer hover:bg-lime-800 transition-colors"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};
