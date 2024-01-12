import "./css/guide.css";

export const UserGuide = () => {
  return (
    <div className="guide">
      <h1>Guide de l'Utilisateur</h1>
      <p>
        Bienvenue dans la documentation de Web Speech API, une bibliothèque
        JavaScript permettant le contrôle vocal d'un site internet.
      </p>

      <h2>Installation</h2>
      <p>
        Pour intégrer Web Speech API dans votre projet, suivez ces étapes
        simples :
      </p>
      <pre>
        <code>npm install web-speech-api --save</code>
      </pre>
      <p>Importez ensuite le module dans votre code :</p>
      <pre>
        <code>
          import <b>webVoiceHub</b> from 'web-speech-api';
        </code>
      </pre>
      <p>
        Enfin, appelez la fonction <code>webVoiceHub()</code> pour initialiser
        la reconnaissance vocale.
      </p>

      <h2>Utilisation</h2>
      <p>
        Web Speech API vous permet de contrôler votre site internet par la voix
        en utilisant des commandes vocales. Par exemple, vous pouvez dire
        "scroll down", "search google", "play video", etc.
      </p>
      <pre>
        <code>
          import <b>webVoiceHub</b> from 'web-speech-api'; webVoiceHub(); //
          Initialisation de la reconnaissance vocale
        </code>
      </pre>

      <h2>Liste des Commandes Vocales</h2>
      <ul>
        <li>"go back" - Naviguer vers la page précédente</li>
        <li>"scroll down" - Descendre dans la page</li>
        <li>"scroll up" - Monter dans la page</li>
        <li>"read the page" - Lire le contenu de la page</li>
        <li>"zoom in" - Agrandir le texte</li>
        <li>"zoom out" - Réduire le texte</li>
        <li>"high contrast mode" - Activer le mode à contraste élevé</li>
        <li>"normal mode" - Désactiver le mode à contraste élevé</li>
        <li>"go to top" - Aller en haut de la page</li>
        <li>"go to bottom" - Aller en bas de la page</li>
        <li>"open new tab" - Ouvrir un nouvel onglet</li>
        <li>"close tab" - Fermer l'onglet</li>
        <li>"refresh" - Rafraîchir la page</li>
        <li>"search google" - Rechercher sur Google</li>
        <li>"play video" - Lire la vidéo</li>
        <li>"pause video" - Mettre la vidéo en pause</li>
        <li>"mute video" - Couper le son de la vidéo</li>
        <li>"unmute video" - Réactiver le son de la vidéo</li>
        <li>"increase volume" - Augmenter le volume de la vidéo</li>
        <li>"decrease volume" - Diminuer le volume de la vidéo</li>
        <li>"toggle full screen" - Activer/désactiver le mode plein écran</li>
        <li>"print page" - Imprimer la page</li>
        {/* ... Ajoutez le reste des commandes ici */}
      </ul>
    </div>
  );
};
