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
        padding: 1.3rem 2rem;
        font-size:  3rem;
        font-family: 'General Sans', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        margin-top:82vh;
    }

</style>