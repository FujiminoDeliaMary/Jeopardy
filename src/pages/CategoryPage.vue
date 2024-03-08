<script setup>
    import { router } from '@/router';
    import { useJeopardyStore } from '@/stores/jeopardy';
    
        const jeopardyStore = useJeopardyStore();
        const levels = [1, 2, 3, 4, 5];

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
</script>

<template>
    <div class="categories">
        <h2>Categories</h2>

        <table class="table">
            <thead>
                <tr>
                    <th v-for="category in jeopardyStore.categories" :key="category.name">{{ category.name }}</th>
                </tr>
            </thead>
            <tbody class="body">
                <tr v-for="level in levels" :key="level">
                    <td v-for="category in jeopardyStore.categories" :key="category.name + level" @click="goToDetails(category.name, level)" :class="{ 'done': isQuestionDone(category.name, level) }" @click.prevent="markQuestionAsDone(category.name, level)">
                        <div v-if="getQuestionByLevel(category, level)">
                            {{ getQuestionByLevel(category, level).level }}
                        </div>
                        <div v-else>-</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<style>

h2{
    margin: 1rem 0;
}
    .categories{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .table{
        width: 70%;
        border:  2px solid #000;
        border-collapse: collapse;
    }
    }

   td{
        border: 2px solid #000;
        cursor: pointer;
    }
    th{
        background-color: #FF9999;
        padding: 0.5rem 0;
        font-size: larger;
    }
    
    a, a:visited{
        text-decoration: none;
        color: #000
    }

    .done{
        background-color: blanchedalmond;
    }

</style>