import type { Metadata } from "next";
import { Nunito, Roboto_Mono } from "next/font/google";
import "./globals.css";
import GlobalProviders from "@/providers/globalProviders";
import * as S from "./layout.styles";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import dynamic from "next/dynamic";

const AlertToast = dynamic(
  () => import("@/components/common/alert/alertToast"),
  {
    ssr: false,
  }
);

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Framna - Bruno Afonso",
  description:
    "Portfolio project that allows to list, create, edit and remove projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${robotoMono.variable}`}>
        <GlobalProviders>
          <S.Container>
            <Header />
            <S.MainContainer>{children}</S.MainContainer>
            <Footer />
            <AlertToast />
          </S.Container>
        </GlobalProviders>
      </body>
    </html>
  );
}
