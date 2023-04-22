import { Framework } from "./";

export const android: Framework = {
  slug: "android",
  name: "Android (Native)",
  description: "Build truly native apps for Android devices.",
  pros: [],
  cons: [],
  href: "https://developer.android.com/",
  logoUrl: "https://aptabase.com/tools/android.svg",
  languages: ["Java", "Kotlin"],
  platforms: ["Android", "Wear Os", "Android TV", "Android Auto"],
  reddit: {
    href: "https://reddit.com/r/androiddev/",
    members: 211_000,
  },
  twitter: {
    slug: "AndroidDev",
    followers: 2_200_000,
  },
  discord: [
    {
      name: "/r/AndroidDev",
      href: "https://discord.com/invite/D2cNrqX",
      members: 23_805,
    },
  ],
};
