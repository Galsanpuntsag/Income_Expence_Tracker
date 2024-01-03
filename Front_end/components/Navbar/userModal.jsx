import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { FaHome } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        className="bg-primary hover:bg-blue-500 text-slate-100"
      >
        Choose Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Choose Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function UserModal({ user }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="flex flex-col text-sm font-mono" onClick={handleOpen}>
        Welcome!
        <h className="font-seibold text-sm">{user.name}</h>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 1000, height: 400 }}>
          <div className="flex justify-around items-center ">
            <div className="flex flex-col">
              <div className="avatar">
                <div className="w-24 ml-10 mt-5 mb-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <button className="flex gap-4 mt-2 mb-5 bg-primary w-[200px] rounded-xl hover:bg-blue-700">
                <p className="mt-1 ml-4">
                  <FaPencilAlt />
                </p>

                <button className="">Edit Profile Picture</button>
              </button>

              <div className="flex justify-center items-center gap-10 ">
                <button>
                  <FaHome />
                </button>
                <button>
                  <FaCommentDots />
                </button>
                <button>
                  <GiProgression />
                </button>
              </div>
              <h className="font-mono text-sm mt-5">Description:</h>
              <h1 className="font-thin text-[15px] mb-5">
                Your profil page and description
              </h1>
              <ChildModal />
            </div>
            <div className="mt-10 ">
              <h className="text-2xl font-bold mt-10">My Profile</h>
              <div className="flex mt-5 ">
                <div className="flex flex-col  ">
                  <h>First Name</h>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="border-slate-500 border rounded-sm pl-2 mr-10"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <h>Last Name</h>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="border-slate-500 border rounded-sm pl-2"
                  ></input>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <h className="mt-5">Address</h>
                    <input
                      type="text"
                      placeholder="Your address"
                      className="border-slate-500 border rounded-sm pl-2 mr-10"
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h className="mt-5">Phone</h>
                  <input
                    type="text"
                    placeholder="Your numder"
                    className="border-slate-500 border rounded-sm pl-2"
                  ></input>
                </div>
              </div>
              <div className="mt-5">
                <h className="">Your email confirm</h>
                <input
                  type="text"
                  className="max-w-2xl w-full mt-1 border-slate-500 border rounded-sm pl-2"
                  placeholder="Your email"
                ></input>
              </div>
            </div>
          </div>
          <h className="font-extralight text-center flex justify-center">
            @2023.12.31
          </h>
        </Box>
      </Modal>
    </div>
  );
}
