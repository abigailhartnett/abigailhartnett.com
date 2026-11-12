const technologyGroups = [
  {
    title: "Languages & frameworks",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Ruby on Rails (familiarity)",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "UI & component development",
    technologies: ["Tailwind CSS", "Storybook", "TanStack", "Figma"],
  },
  {
    title: "Tools & platforms",
    technologies: [
      "Git",
      "GitHub",
      "Vite",
      "GitHub Actions",
      "Auth0",
      "Supabase",
      "Node.js",
    ],
  },
];

const contactLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/abigail-hartnett" },
  { label: "GitHub", href: "https://github.com/abigailhartnett" },
  { label: "Email", href: "mailto:abigailhhartnett@gmail.com" },
];

export default function Home() {
  return (
    <main className="px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-[65ch]">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Abigail Hartnett
        </h1>
        <p className="mt-2 text-lg font-medium text-accent">
          React developer building human-first experiences
        </p>

        <div className="mt-6 space-y-4 text-lg leading-relaxed font-normal">
          <p>
            Great technology isn’t measured by what it can do, but by what it
            helps people accomplish. I’m drawn to work that makes a meaningful
            difference in someone’s everyday life. By making complicated tasks
            easier and technology more accessible, I want to build software that
            has an impact beyond the screen.
          </p>
          <p>
            I came to software engineering through copywriting and web
            development. What started as helping people find answers through
            clear, useful content grew into an interest in the entire
            experience: how information is organized, how interactions guide
            someone through a task, and how a product’s features help people
            accomplish their goals. Eventually, I wanted to help shape how those
            products worked, not just explain them. So I did.
          </p>
          <p>
            There’s something deeply satisfying about turning an idea into
            working software. I enjoy shaping and building features from rough
            product requests, thinking through user workflows, and figuring out
            how all the pieces fit together. Equally important, I value clean,
            maintainable code that’s easy for the next developer to understand
            and build upon. After all, code is something we write for each other
            too.
          </p>
          <p>
            Outside of work, I love spending time with my family, whether we’re
            exploring the Colorado mountains or curled up reading children’s
            books. My daughter’s hearing difference recently introduced us to
            the Deaf community. Since then, bringing American Sign Language into
            our daily lives and getting to know Deaf culture has become a
            meaningful part of parenthood. In the quieter moments, you’ll find
            me baking mini muffins, tackling an organizational project, and
            finding small ways to make everyday life a little bit better.
          </p>
        </div>

        <section aria-labelledby="technologies" className="mt-8">
          <h2
            id="technologies"
            className="text-sm font-semibold text-foreground"
          >
            Technologies
          </h2>
          <div className="mt-4 space-y-4">
            {technologyGroups.map(({ title, technologies }) => (
              <div key={title}>
                <h3 className="text-xs font-semibold text-[var(--rose)]">
                  {title}
                </h3>
                <ul
                  role="list"
                  className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs leading-relaxed"
                >
                  {technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div aria-hidden="true" className="diamond-divider mt-8" />

        <ul
          role="list"
          className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-semibold"
        >
          {contactLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-accent underline underline-offset-4 hover:text-accent-hover hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
