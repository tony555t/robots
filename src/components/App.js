import React from "react";
import BotsPage from "./BotsPage";

function App() {
  const [botCollection, setBotCollection] = React.useState([]) 
  const [checkBotCollection, setCheckBotCollection] = React.useState(false) 

  React.useEffect(() => {
    fetch("https://api.npoint.io/1d41121ce8149651da6d/bots")
      .then(res => res.json())
      .then(bots => {
        
        setBotCollection(bots)
      })
      
  }, [checkBotCollection]) 
  
  return (
    <div className="App">
      <BotsPage 
      
      botCollection = {botCollection}
      setBotCollection = {setBotCollection}
      setCheckBotCollection = {setCheckBotCollection}
      />
    </div>
  );
}

export default App;
