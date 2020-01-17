<template>
  <main class="noselect">
    <section>
      <h1 class="text-center">A propos</h1>
      <h2>A venir</h2>
      <ul>
        <li>Ajout d'une option dictionnaire.</li>
        <li>Ajout d'une option pour ajuster la fréquence des caractères.</li>
        <li>Amélioration de la documentation.</li>
        <li>Amélioration de la barre de menu.</li>
        <li>Ajustement de la palette de couleurs.</li>
        <li>Modification de l'icône.</li>
        <li>Redimensionnement automatique de la zone de clés générées.</li>
      </ul>
      <h2>
        La 2
        <sup>ème</sup> version poussera le vice encore plus loin!
      </h2>
      <ul>
        <li>Ajout de pioche dans un dictionnaire.</li>
        <li>Ajout d'un générateur de lancés de dés.</li>
        <li>Ajout des profils permettant différentes sauvegardes et configurations.</li>
      </ul>
      <p>Le dictionnaire pourrait éventuellement trouver des mots EN LIGNE! (si tu es sâge &#128540;)</p>
      <h2>Message de l'auteur</h2>
      <p>Application faite avec amour par Ambrelium&copy;.</p>
      <p>
        Si l'application ne vous plait pas, j'en suis désolé &#128546;. Dites-vous que vous auriez pu avoir
        <InputLinkExternal href="http://de.virtuworld.net/">CE</InputLinkExternal>&nbsp;résultat &#128580;.
      </p>
    </section>
    <section>
      <InputLinkBackward>Retour</InputLinkBackward>
    </section>
  </main>
</template>

<script>
import InputLinkBackward from "../shared/Input_Link_Backward.vue";
import InputLinkExternal from "../shared/Input_Link_External.vue";
export default {
  components: {
    InputLinkBackward,
    InputLinkExternal
  },
  name: "about_page"
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
ul {
  padding-left: 2rem;
}
</style>