<script setup>

</script>

<template>
    <div class="home">

        <RouterLink to="/rules"><p class="start">Start</p></RouterLink>
    </div>
 
</template>

<style>

    
    @font-face {
        font-family: 'General Sans';
        src: url('../assets/GeneralSans-Medium.woff2') format('woff2');
    }
    .home{
        height: 100vh; 
        background-image: url('../assets/images/jeopardy.webp'); 
        background-size: cover;
        background-position: center;

    display: flex;
    justify-content: center;



    }

    .start{
        background-color: #ccd6f5;
        padding: 0.5rem 1.7rem;
        font-size: 2rem;
        font-family: 'General Sans', sans-serif;
        text-transform: uppercase;
        margin-top:82vh;
    }

</style>