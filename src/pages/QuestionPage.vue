<script setup>
import { useRoute } from 'vue-router';
 
    import { useJeopardyStore } from '@/stores/jeopardy';
    import { computed, ref } from 'vue';

    const route = useRoute();
    const currentIndex = ref(0)
    const jeopardyStore = useJeopardyStore();
    console.log(jeopardyStore.categories);
    const element = computed(() => {
            const categoryName = route.params.categoryName;
            const level = parseInt(route.params.level, 10);
            const category = jeopardyStore.categories.find(c => c.name === categoryName);
            if (!category) return null;
            return category.questions.find(q => q.level === level);
            });

    function showNextHint() {
  
        if (element.value && currentIndex.value < element.value.clues.length) {
            currentIndex.value++;
        }
    }

    const displayedClues = computed(() => {
        if (element.value && element.value.clues) {
            return element.value.clues.slice(0, currentIndex.value);
        }
        return [];
    });

 


    const showAnswer  = ref(false);
</script>

<template >
    <div>
        <div class="section" v-if="element">
            <table class="table">
                <tbody>
                    <tr>
                        <td>{{ route.params.categoryName }}</td>
                        <td>{{ route.params.level }}</td>
                    </tr>
                 
                </tbody>
            </table>
            <h2 class="question" >Question : {{ showAnswer===true ? element.answer : '?' }}</h2>
            <h3 class="answer">Answer : {{ element.question }}</h3>

            <div class="hints">
                <p>Hints</p>
                <ul>
                    <li v-for="(hint, index) in displayedClues" :key="index" >{{ hint }}</li>
                </ul>
            </div>
            <div class="actions">
                <p @click="showNextHint">Show Hint</p>
                <p @click="showAnswer=true">Show Answer</p>
                <RouterLink to="/categories"><p class="back">Back</p></RouterLink>
            </div>
        </div>
    </div>
</template>

<style>

    .section{
        margin: 2rem 5vw 0 5vw
    }
    .table{
        border-collapse: collapse;
        td{
             border : 2px solid #FF9999;
             text-align: center;
             min-width:100px;
             padding: 0.2rem;
             font-size: 1.5rem;
        }
       
    }

    .back{
        align-self:flex-end
    }

    .hints{
        margin-top:0.8rem;
        p{
            font-size:1.3rem
        }
    }
    li{
        list-style: none;
        font-size: 1.1rem;
    }

    .actions{
        display: flex;
        margin-top:20vh;
        gap: 1rem;
        p{
            background-color: #FF9999;
            padding: 0.3rem 2rem;
            font-size: 1.3rem;
            cursor: pointer;
        }
    }

    .question{
        margin: 1.7rem 0;
        font-size: 2rem;
    }

    .answer{
        font-size: 1.5rem;
    }
</style>