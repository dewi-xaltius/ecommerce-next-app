import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
