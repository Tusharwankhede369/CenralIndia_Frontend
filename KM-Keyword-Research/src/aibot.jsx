import React from 'react'
import { VAKChat } from "vakchat";
import "vakchat/dist/index.css";
const aibot = () => {
  return (
        <div className="App">
          <VAKChat
              VAKFlowID="LA97Q7hp6EJMkNIoCYuR"
              btnText="Keyword Raja"
              theme="light"
              shade="rose"
              introMessage="Hello , lets unlock the power of keywords – Smarter research, better rankings!"
              defaultPopupSize="small"
              emailRequired={false}
              contactRequired={false}
              nameRequired={false}
          />
        </div>
   
  )
}

export default aibot
