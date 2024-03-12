<script setup>

</script>

<template>
    <div class="rules">
        <h1 class="rules__title">Bienvenue au jeopardy game</h1>

        <p class="rules__libelle">Règles du jeu:</p>

        <ul class="rules__list">
            <li class="rules__item">
                Le plateau de jeu se compose de six catégories, chacune contenant cinq questions de difficulté croissante. Les questions sont présentées sous forme d'affirmations, et les réponses doivent être formulées sous forme de question.
            </li>
            <li class="rules__item">
                Vous aurez 20 secondes pour répondre à chacune des questions
            </li>
            <li class="rules__item">
                L'utilisation d'un hint vous enlève 20 points au fur et à mesure, donc au premier hint, vous aurez <span>-40 points</span> et au deuxième hint, vous aurez <span>-80 points</span> et ainsi s'en suit.
            </li>
            <li class="rules__item">
                Le participant une question en sélectionnant une catégorie et un montant de points.
            </li>
            <li class="rules__item">
                Si la réponse (formulée sous forme de question) est correcte, le joueur gagne les points indiqués pour la question; si la réponse est incorrecte, les points sont soustraits de son total.
            </li>
            <li class="rules__item">
                Certaines questions sont marquées comme "Daily Doubles". Le joueur qui sélectionne une telle question peut miser une partie ou la totalité de ses points avant de répondre. Cela permet de gagner ou de perdre davantage de points selon que la réponse est correcte ou non.
            </li>
        </ul>

        <RouterLink to="categories"><p class="rules__start">Jouer</p></RouterLink>
    </div>
</template>