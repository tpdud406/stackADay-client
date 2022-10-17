import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import Guest from "./components/Guest";
import Layout from "./components/Layout";

function App() {
  const [socket, setSocket] = useState();
  useEffect(() => {
    const instance = io(`${process.env.SOCKET_SERVER_URL}`);
    setSocket(instance);

    return () => {
      instance.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null) return;

    socket.once("load-notices", () => {});

    socket.emit("get-notices");
  }, []);

  useEffect(() => {
    if (socket == null) return;

    const interval = setInterval(() => {
      socket.emit("save-notices");
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
