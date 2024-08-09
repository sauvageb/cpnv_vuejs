<script setup>
import categoryService from "@/services/category.service.js";
import {ref} from "vue";
import router from "@/router/index.js";

const formData = ref({
  categoryName: ''
});

const createCategory = async () => {
  if (await categoryService.add(formData.value.categoryName.trim())) {
    await router.push({name: 'categories'})
  }
};

</script>

<template>
  <div class="row justify-content-center">
    <form class="col-lg-6 mb-5" @submit.prevent="createCategory">
      <h1>Nouvelle catégorie</h1>
      <div class="form-group mt-3">
        <label for="category">Nom</label>
        <input id="category" type="text" v-model="formData.categoryName" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Ajouter</button>
    </form>
  </div>
</template>
