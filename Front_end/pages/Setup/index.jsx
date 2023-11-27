import React from "react";
import Link from "next/link";
import SetupBalance from "@/components/SetupBalance";
import SelCurrency from "@/components/SelCurrency";
import SetupSucces from "@/components/SetupSucces";

const SetupConfirm = () => {
  return (
    <div className="">
      <Link href={"../Setup"}>
        <SelCurrency />
      </Link>
      <Link href={"../Succes"}>
        <SetupBalance />
      </Link>
      <Link href={"../Succes"}>
        <SetupSucces />
      </Link>
    </div>
  );
};

export default SetupConfirm;
