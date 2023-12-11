import "@/styles/globals.css";
import { UserProvider } from "@/components/Context/UserPtovider";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
