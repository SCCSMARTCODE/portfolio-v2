import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

const links = [
  { label: "Technical Papers", href: "#projects" },
  { label: "Privacy Protocol", href: "#contact" },
  { label: "Network", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/SCCSMARTCODE", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sccsmartcode/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/SCCSMARTCODE", label: "X" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UC-KNjTsSQGokYvUsz74VVXg", label: "YouTube" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-primary bg-bg-primary px-5 py-10 pb-28 md:px-8 md:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs font-bold tracking-[0.14em] text-text-secondary transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-text-tertiary transition hover:text-primary"
            >
              <social.icon size={19} />
            </a>
          ))}
        </div>

        <p className="max-w-lg font-mono text-[0.7rem] font-bold leading-5 tracking-[0.12em] text-text-secondary">
          © {currentYear} Emmanuel Adewumi • Research-driven Innovation
        </p>
      </div>
    </footer>
  );
}
