import React from 'react';

export function GithubIcon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function GmailLogo({ size = 19, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path fill="#4285F4" d="M3.6 19.8h3V10.2L2.5 7.4v10.3c0 1.2.9 2.1 2.1 2.1z" />
      <path fill="#34A853" d="M17.4 19.8h3c1.2 0 2.1-.9 2.1-2.1V7.4l-4.1 2.8v9.6z" />
      <path fill="#EA4335" d="M17.4 7.4L12 11.2 6.6 7.4V4.9c0-1.3 1.5-2.1 2.6-1.3L12 6l2.8-2.4c1.1-.8 2.6 0 2.6 1.3v2.5z" />
      <path fill="#FBBC04" d="M2.5 7.4L6.6 10.2V4.9c0-.9.5-1.7 1.3-2.1L2.5 7.4z" />
      <path fill="#C5221F" d="M17.4 10.2l4.1-2.8-5.4-4.6c.8.4 1.3 1.2 1.3 2.1v5.3z" />
    </svg>
  );
}

export function LinkedinLogo({ size = 19, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect width="24" height="24" rx="4.5" fill="#0A66C2" />
      <path
        fill="#FFFFFF"
        d="M7.12 9.47H4.35v8.88h2.77V9.47zM5.73 4C4.85 4 4.13 4.73 4.13 5.62c0 .88.72 1.61 1.6 1.61.89 0 1.61-.73 1.61-1.61C7.34 4.73 6.62 4 5.73 4zm13.92 8.41c0-2.61-1.4-3.83-3.26-3.83-1.5 0-2.18.83-2.55 1.41V9.47h-2.77c.04.78 0 8.88 0 8.88h2.77v-4.96c0-.27.02-.53.1-.72.22-.53.72-1.08 1.55-1.08 1.09 0 1.53.83 1.53 2.05v4.71h2.77v-5.47z"
      />
    </svg>
  );
}

export function GithubLogo({ size = 19, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#181717"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}
