import Header from "@/components/Header";
import { CartContextProvider } from "@/lib/CartContext";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartContextProvider>
        <main
          className={`${inter.className} min-h-screen max-w-screen-2xl mx-auto px-4 p-4`}
        >
          <Header />
          <Component {...pageProps} />
          <Toaster position="top-center" reverseOrder={false} />
        </main>
      </CartContextProvider>
    </>
  );
}
