<template>
  <main class="noselect">
    <section>
      <h1>Manuel</h1>
      <h2>Menu</h2>
      <ul>
        <li>
          <b>Fichier</b> regroupe les actions relatives à l'application.
        </li>
        <li>
          <b>Générer</b> regroupe les actions de génération.
        </li>
        <li>
          <b>Aide</b> regroupe des pages contenant des informations utiles.
        </li>
      </ul>
      <h2>Sous-menu</h2>
      <ul>
        <li>
          <b>Préférences</b> affiche les options.
        </li>
        <li>
          <b>Quitter</b> ferme l'application.
        </li>
        <li>
          <b>Clés</b> génère des clés.
        </li>
        <li>
          <b>Dés</b> génère des lancés de dés. (à venir)
        </li>
        <li>
          <b>Mots</b> génère des mots selon un dictionnaire fourni. (à venir)
        </li>
        <li>
          <b>Manuel</b> affiche le manuel de l'application.
        </li>
        <li>
          <b>A propos</b> affiche des informations sur l'application.
        </li>
      </ul>
      <h2>Utilisation</h2>
      <p>Pour sélectionner une option ou non, il suffit de cliquer sur la ligne correspondante.</p>
      <p>Pour changer le nombre de caractères à générer, cliquez sur le nombre ou utilisez la roulette de la souris sur celui-ci.</p>
      <h2>Préférences</h2>
      <p>Vous pouvez définir des préférences qui seront sauvegardées même après redémarrage de l'application.</p>
      <h2>Le saviez-vous?</h2>
      <p>
        En choisissant soigneusement les caractères que vous mettez dans les "caractères spéciaux", vous pouvez créer votre propre liste.
        Si vous sélectionnez uniquement les caractères spéciaux lors de la génération, vous aurez ainsi une clé entièrement personnalisée.
      </p>
      <p>
        Mettre plusieurs occurences du même caractère spécial dans le set
        multipliera proportionnellement le taux de chance d'apparition de celui-ci.
      </p>
    </section>
    <section>
      <InputLinkBackward href="/">Retour</InputLinkBackward>
    </section>
  </main>
</template>

<script>
import InputLinkBackward from "../shared/Input_Link_Backward.vue";
export default {
  components: {
    InputLinkBackward
  },
  name: "manual_page"
};
</script>

<style scoped>
</style>