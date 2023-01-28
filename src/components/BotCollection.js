
import React from "react";
import BotCard from "./BotCard";

function BotCollection({addBot, botCollection, deleteBot}) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {
        botCollection.map(bot => {
          return (
            <BotCard 
              handleBots={addBot}
              deleteBot={deleteBot}
              key={bot.id}
              bot={bot} 
            />
          )
        })
        }
        Bots collection
      </div>
    </div>
  );
}

export default BotCollection;
