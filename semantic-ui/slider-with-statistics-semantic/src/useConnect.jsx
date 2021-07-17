import { useState } from 'react'
const enigma = require("enigma.js");
const schema = require("enigma.js/schemas/12.170.2.json");


const useConnect = ({ config }) => {

  const [engine, setEngine] = useState(() => {
    (async () => {
      const tenantUri = config.host;
      const webIntegrationId = config.webIntId;
    
      const fetchResult = await fetch(
        `https://${tenantUri}/api/v1/csrf-token`,
        {
          mode: "cors", // cors must be enabled
          credentials: "include", // credentials must be included
          headers: {
            "qlik-web-integration-id": webIntegrationId,
            "content-type": "application/json",
          },
        }
      ).catch((error) => {
        console.log("caught failed fetch", error);
      });
    
      const csrfToken = fetchResult.headers.get("qlik-csrf-token");
      if (csrfToken == null) {
        
        console.warn("Not logged in");
        return { errorCode: -1 }
    
      }
      const session = enigma.create({
        schema,
        url: `wss://${tenantUri}/app/${config.appId}?qlik-web-integration-id=${webIntegrationId}&qlik-csrf-token=${csrfToken}`,
        createSocket: (url) => new WebSocket(url),
      });
      session.on("suspended", () => {
        console.warn("Captured session suspended");
      });
      session.on("error", () => {
        console.warn("Captured session error");
      });
      session.on("closed", () => {
        console.warn("Session was closed");
        return { errorCode: -3 }
      });
      const _global = await session.open();
      const _doc = await _global.openDoc(config.appId)
      setEngine(_doc)
    })()

  })
  
  return { engine }

}

export default useConnect
