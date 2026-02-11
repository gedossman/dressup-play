export function BehanceIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.5 11c1.38 0 2.5-1.12 2.5-2.5S8.88 6 7.5 6H3v5h4.5zm0-3.5c.55 0 1 .45 1 1s-.45 1-1 1H4.5V7.5H7.5zM7.5 12H3v5h4.5c1.38 0 2.5-1.12 2.5-2.5S8.88 12 7.5 12zm0 3.5H4.5V13.5H7.5c.55 0 1 .45 1 1s-.45 1-1 1zM16.5 10c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5c1.77 0 3.3-1.02 4.04-2.5h-1.8c-.5.63-1.3 1-2.24 1-1.38 0-2.5-1.12-2.5-2.5h6.75c.08-.33.25-.65.25-1 0-2.49-2.01-4.5-4.5-4.5zm-2.5 3.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5h-5zM15 6h5v1.5h-5V6z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  );
}

export function EmailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href="https://www.behance.net/sofiaossman"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-800 transition-colors"
        title="Behance"
      >
        <BehanceIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/sofiaossman"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-800 transition-colors"
        title="LinkedIn"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://www.instagram.com/sofiaossman.illustration"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-800 transition-colors"
        title="Instagram"
      >
        <InstagramIcon />
      </a>
      <a
        href="mailto:hello@sofiaossman.com"
        className="text-gray-500 hover:text-gray-800 transition-colors"
        title="Email"
      >
        <EmailIcon />
      </a>
    </div>
  );
}
