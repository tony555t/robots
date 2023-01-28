
import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({botCollection, setBotCollection, setCheckBotCollection}) {
  
  const [botBox, setBotBox] = React.useState([]) 
  const addBot = (bot) => {
    const botInBox = botBox.find((item) => {return (item.id === bot.id)});
    if (!botInBox) {
      setBotBox([...botBox, bot])
    }
  }
 
  const remBot = (bot) =>{
    const botInBox = botBox.find((item) => {return (item.id === bot.id)});
    if (botInBox) {
      setBotBox(botBox.filter((removedBot) => removedBot.id !== bot.id))
    }
  }
  
  const dischargeBot = (bot) => {
    setBotCollection(botCollection.filter((item) => item.id !== bot.id));
    remBot(bot)
    fetch(`https://api.npoint.io/1d41121ce8149651da6d/bots/${bot.id}`, {
      method: "DELETE", 
      headers: {"Content-Type" : "application/json",},
  }, 

    );
    setCheckBotCollection(true)
  }
  return (
    <div>
      <YourBotArmy 
        botBox = {botBox}
        remBot = {remBot}
        dischargeBot={dischargeBot}
      />
      <BotCollection 
        botCollection={botCollection}
        addBot={addBot}
        dischargeBot={dischargeBot}
      />
    </div>
  )
}

export default BotsPage;