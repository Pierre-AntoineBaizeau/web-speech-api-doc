import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { webVoiceHub } from "webvoicehub/src/main";
import "../components/css/homepage.css";
export const HomePage = () => {
  useEffect(() => {
    webVoiceHub();
  }, []);

  return (
    <div className="home">
      <h1>Web Speech API</h1>
      <p>
        Web Speech API est une bibliothèque JavaScript qui vous
        permet de contrôler votre site web avec votre voix.
      </p>
      <p>
        Elle est compatible avec la plupart des navigateurs et est facile à
        utiliser. Elle est également personnalisable et vous permet d'ajouter
        vos propres commandes vocales.
      </p>
      <p>
        Pour commencer, consultez le
        <Link to="/user-guide"> Guide de l'Utilisateur</Link>.
      </p>
      <p>
        Pour voir une démo de l'API de la Parole sur le Web en action, cliquez
        sur l'icône du microphone dans le coin inférieur droit de cette page et
        dites "<b>scroll down</b>".
      </p>
      <div style={{ height: "1000px" }}></div>
      <div className="microphone-output" id="output"></div>
      <div className="microphone-button" id="startListening">
        <span className="icon">&#127908;</span>
      </div>
    </div>
  );
};
