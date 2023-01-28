import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botBox, remBot, dischargeBot}) {

  return (
    <div className="ui segment inverted purple bot-army">
      <h1>Bot-Battlr </h1>
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {
            botBox.map(bot => {
              return (
                <BotCard 
                  key={`${bot.name}${bot.id}`}
                  handleBots={remBot}
                  dischargeBot={dischargeBot}
                  bot={bot}
                />
              )
            })
          }
          Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;