import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT Anindia Karya Nusantara - Pendidikan Teknologi Informasi",
  description: "Lembaga pendidikan komputer dan teknologi informasi terpercaya. Program pelatihan Web Development, Data Science, Digital Marketing, dan lainnya.",
  keywords: "pelatihan IT, kursus programming, web development, data science, digital marketing, DiEvaluasi, tryout online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}