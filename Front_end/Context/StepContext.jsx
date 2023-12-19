import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "./UserProvider";
import { useRouter } from "next/router";

const { createContext, useState, useEffect, useContext } = require("react");

export const StepContext = createContext("light");

export const StepProvider = ({ children }) => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [step, setStep] = useState(1);

  const [stepData, setStepData] = useState({
    currency_type: "",
    balance: "100",
  });

  const changeStep = () => {
    console.log("STEP+1=change:", setStep);
    setStep((prevStep) => prevStep + 1);
  };

  const changeStepData = (key, value) => {
    setStepData((prevStep) => ({
      ...prevStep,
      [key]: value,
    }));
  };

  const goToDashboard = async () => {
    // console.log("USERID: ", data.user.id);
    try {
      const { data } = await axios.put(
        "http://localhost:8008/users/" + user.id,
        {
          currency_type: stepData.currency_type,
          balance: stepData.balance,
        }
      );
      console.log("CurrencyData: ", data);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log("ERRORSTEP", error);
    }
  };
  return (
    <StepContext.Provider
      value={{ step, changeStep, stepData, changeStepData, goToDashboard }}
    >
      {children}
    </StepContext.Provider>
  );
};