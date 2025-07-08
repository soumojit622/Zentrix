import { Work_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { ClerkProvider } from "@clerk/nextjs";

const font = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Zentrix | AI-Powered Expense Management & Bill Splitting",
  description:
    "Zentrix is a modern, AI-driven platform designed to simplify shared expenses. Seamlessly split bills, track group spending, and settle balances with clarity, accuracy, and fairness — ideal for friends, families, roommates, and teams.",
  keywords: [
    "Zentrix",
    "AI expense manager",
    "split bills app",
    "expense tracker",
    "group expense manager",
    "shared expenses",
    "roommate bill splitter",
    "family expense tracking",
    "settle up app",
    "AI finance app",
  ],
  authors: [
    { name: "Soumojit Banerjee", url: "https://your-portfolio-url.com" },
  ],
  creator: "Zentrix Team",
  publisher: "Zentrix",
  applicationName: "Zentrix",
  generator: "Next.js",
  metadataBase: new URL("https://zentrix.app"),
  openGraph: {
    title: "Zentrix | AI-Powered Expense Management & Bill Splitting",
    description:
      "Zentrix simplifies group expenses with AI-powered bill splitting and real-time balance tracking. Ideal for roommates, families, and friends.",
    url: "https://zentrix.app",
    siteName: "Zentrix",
    images: [
      {
        url: "https://zentrix.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix App - AI Expense Management",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  category: "Finance",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#10b981",
          colorText: "#000",
        },
        elements: {
          card: "border-emerald-400 shadow-lg",
          headerTitle: "text-emerald-600 font-semibold",
          buttonPrimary:
            "bg-emerald-500 hover:bg-emerald-600 text-white rounded-md",
          input:
            "focus:ring-emerald-500 border-emerald-300 focus:border-emerald-500",
        },
        layout: {
          logoImageUrl: "/favicon.png",
        },
      }}
    >
      <html lang="en">
        <body className={`${font.className}`}>
          {children}
          <Toaster richColors />
          <ScrollToTopButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
