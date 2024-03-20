<script setup>
   import { useJeopardyStore } from '@/stores/jeopardy';
import { RouterLink, useRouter } from 'vue-router';
   const jeopardyStore = useJeopardyStore();

   const router = useRouter();

    function navigateIfCategoriesSelected() {
    if (jeopardyStore.selectedCategories.length > 3) {
        router.push({ name: 'categories' });
    }
    }
</script>

<template>
    <div class="choice">
        <h2 class="choice__title">Choisissez vos catégories(4 au moins)</h2>
        <ul class="choice__list">
            <li  v-for="(category) in jeopardyStore.categories"  :key="category" 
                                                                  class="choice__item" 
                                                                  :class="{'focus' : jeopardyStore.isSelected(category.name)}" 
                                                                  @click="jeopardyStore.selectCategory(category.name)">
                <img :src="category.link" alt="image" class="choice__img"/>
                <!-- <img src="../assets/images/marvel.jpg" alt="image"/> -->
                {{ category.name }}
            </li>
        </ul>

        <button class="choice__button"  :disabled="!jeopardyStore.selectedCategories.length >3 "
                                        @click="navigateIfCategoriesSelected">Choisir
        </button>
    </div>
</template>

<style>
 
</style>

<!-- Apprendre defineEmits et apprendre defineSlots -->