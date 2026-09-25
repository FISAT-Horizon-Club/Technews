import Link from "next/link";

const footerGroups = [
  {
    title: "Sections",
    links: [
      { href: "/news", label: "News" },
      { href: "/videos", label: "Videos" },
      { href: "/#categories", label: "Categories" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/", label: "About" },
      { href: "/", label: "Contact" },
      { href: "/", label: "Advertise" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/", label: "Privacy" },
      { href: "/", label: "Terms" },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <p className="text-lg font-bold tracking-tight text-zinc-900">
              Tech<span className="text-blue-600">News</span>
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              A starter boilerplate for a tech news platform. Content shown is
              placeholder text.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold text-zinc-900">
                  {group.title}
                </h2>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-6">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} TechNews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
