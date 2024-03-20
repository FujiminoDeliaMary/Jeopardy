<script setup>
    import TheModal from '@/components/TheModal.vue';
import { router } from '@/router';
    import { useJeopardyStore } from '@/stores/jeopardy';
    import { ref } from 'vue';
    import CountUp from 'vue-countup-v3'
    
        const jeopardyStore = useJeopardyStore();
        const showModal = ref(false);
        const currentQuestion = ref();
        const points = ref();

        const getQuestionByLevel = (category, level) => {
        return category.questions.find(question => question.level === level);
    };

    function goToDetails(categoryName, level) {
    router.push({ name: 'question', params: { categoryName, level } });
    }

    function markQuestionAsDone(categoryName, level) {
            const category = jeopardyStore.categories.find(cat => cat.name === categoryName);
            const question = getQuestionByLevel(category, level);
            console.log(question);
            if (question) {
                question.isdone = true;
            }
    }

    function isQuestionDone(categoryName, level) {
        const category = jeopardyStore.categories.find(cat => cat.name === categoryName);
        const question = getQuestionByLevel(category, level);
        return question ? question.isdone : false;
    }

    function handleClick(question){
        currentQuestion.value=question;
        showModal.value=true;
        points.value = question.points;
    }

    const score = ref(0);
</script>

<template>
    <main class="categories">

        <h2 class="categories__title">Categories</h2>

       
        <div class="questions">
            <div v-for="category in jeopardyStore.selectedCategories" :key="category.name" class="questions__categorie">
                {{ category.name }}
            </div>
            <ul v-for="category in jeopardyStore.selectedCategories" :key="category.name + Date.now()"  class="questions__list">
                <li v-for="question in category.questions" :key="question.level" @click="handleClick(question); markQuestionAsDone(category.name, question.level)" class="questions__item">
                    {{ question.points }} <img src="../assets/icons/dollar.svg" alt="">
                </li>
            </ul>
        </div>

        <div class="categories__score">
            <p>Score:</p> 
            <div>
               <count-up :end-val=score></count-up> 
            </div>
        </div>
    </main>

    <TheModal :showModal="showModal" @close="showModalDocument = false">
        <template #body>
            <p>{{ currentQuestion?.question }}</p>
        </template>
    </TheModal>

</template>

<style>



</style>