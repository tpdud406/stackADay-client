import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Layout from "./pages/Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Welcome";

function App() {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const socketIO = io.connect(`${process.env.SOCKET_SERVER_HOST}`);
    setSocket(socketIO);

    return () => {
      socketIO.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null) {
      return;
    }

    socket.once("load-notices", () => {});

    socket.emit("get-notices");
  }, []);

  useEffect(() => {
    if (socket == null) {
      return;
    }

    const interval = setInterval(() => {
      socket.emit("save-notices");
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
