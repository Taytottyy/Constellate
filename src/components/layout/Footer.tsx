import Link from "next/link";

const footerLinks = [
  { href: "/#about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-heading text-xl font-semibold text-white">
              Constellate Strategy Group
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Constellate is an intercollegiate pro-bono consulting firm bridging the gap
              between ambitious student talent and under-resourced startups, small
              businesses, and nonprofits.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-white/50">
            &copy; {new Date().getFullYear()} Constellate Strategy Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
