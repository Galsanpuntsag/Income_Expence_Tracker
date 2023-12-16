import "@/styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "@/Context/UserProvider";
import { StepProvider } from "@/Context/StepContext";
// import ReactLoading from "react-loading";

export default function App({ Component, pageProps, type, color }) {
  return (
    <UserProvider>
      <StepProvider>
        <Component {...pageProps} />
        <ToastContainer />
        {/* <ReactLoading type={"balls"} color={color} height={667} width={375} /> */}
      </StepProvider>
    </UserProvider>
  );
}
