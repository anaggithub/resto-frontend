import React, { useState, useEffect } from "react";
import "./index.scss";
import PetItem from "../../components/pet-item";
import UserItem from "../../components/user-item";
import DefaultLayout from "../../components/layout";
import InputChat from "../../components/input-chat";

const Chat = () => {
  let idCounter = 0;
  const [message, setMessage] = useState({});
  const [chat, setChat] = useState([
    {
      id: 0,
      emitter: "Pet",
      message: ["Hola humano!", "Có te llamas?"],
    },
  ]);

  function firstResponse(name) {
    let newChat = {
      id: idCounter + 2,
      emitter: "Cat",
      message: ["¡Mucho gusto, " + name + "!", "Soy un petbot en desarrollo!"],
    };
    if (newChat) {
      setChat([...chat, newChat]);
    }
  }

  useEffect(() => {
    if (chat.length === 2) {
      setTimeout(() => {
        firstResponse;
      }, 500);
      setMessage({ ...message, message: "" });
      //setTimeout ()
    }
  });

  function getMessage(value) {
    idCounter = idCounter + 1;
    setMessage({
      id: idCounter,
      emitter: "User",
      message: value,
    });
  }

  function sendMessage(e) {
    e.preventDefault();
    setChat([...chat, message]);
  }
  // console.log("chat: ", chat);
  // console.log("message: ", message);
  console.log("mens: " + message);
  return (
    <DefaultLayout>
      <section className="chat">
        <div className="chat--content">
          {chat.map((message, index) =>
            message.emitter === "Pet" ? (
              <PetItem text={message.message} key={index} />
            ) : (
              <UserItem key={index} text={message.message} key={index} />
            )
          )}
        </div>
        <div className="chat--input">
          <InputChat getMessage={getMessage} sendMessage={sendMessage} />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Chat;
