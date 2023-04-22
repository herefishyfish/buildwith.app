/* eslint-disable @next/next/no-img-element */
import { DiscordTag, GitHubTag, RedditTag } from "@lib/components";
import { frameworks, getFramework, platforms } from "@lib/frameworks";
import Link from "next/link";

export async function generateStaticParams() {
  return frameworks.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props) {
  const fw = getFramework(props.params.slug);
  return {
    title: `${fw.name} - BuildWith.app`,
    description: `Learn more about how ${fw.name} can help you build apps`,
  };
}

export default function Framework(props: Props) {
  const fw = getFramework(props.params.slug);
  return (
    <main>
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <Link
                href="/"
                className="text-sm mb-4 inline-block hover:bg-zinc-50 px-2 py-1 rounded"
              >
                ← Back
              </Link>
              <header className="max-w-2xl">
                <div className="flex items-center space-x-4">
                  <img
                    alt={fw.name}
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-12 rounded"
                    src={fw.logoUrl}
                  />
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                    {fw.name}
                  </h1>
                </div>
                <p className="mt-6 text-base text-zinc-600">{fw.description}</p>
                <ul className="mt-2 flex flex-col space-y-2">
                  <h3>Community</h3>
                  {fw.github && (
                    <li>
                      <GitHubTag {...fw.github} />
                    </li>
                  )}
                  <li>
                    <RedditTag {...fw.reddit} />
                  </li>
                  {(fw.discord || []).map((d) => (
                    <li key={d.href}>
                      <DiscordTag {...d} />
                    </li>
                  ))}
                </ul>

                <ul className="mt-2 flex flex-col">
                  <h3>Supported Platforms</h3>
                  {platforms.map((p) => (
                    <li key={p}>
                      <div
                        className={`px-0.5 py-0.5 inline-flex items-center text-sm space-x-1 ${
                          fw.platforms.includes(p)
                            ? "bg-green-50"
                            : "bg-zinc-50 line-through"
                        }`}
                      >
                        <span>{fw.platforms.includes(p) ? "✓" : ""}</span>{" "}
                        <span>{p}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </header>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
