<script setup>

import categoryService from "@/services/category.service.js";
import {onMounted, ref} from "vue";

const categories = ref([]);

onMounted(async () => {
  categories.value = await categoryService.getAll();
});

</script>

<template>
  <div class="container">
    <h1>Catégories</h1>
    <div class="col-6 mb-3">
      <div class="row">

        <div class="list-group">
          <RouterLink class="list-group-item list-group-item-action" v-for="category in categories" :key="category"
                      :to="{name: 'category-details', params: {
                       id: category.id
                      }}">
            <div class="card-body">
              {{ category.name }}
            </div>
          </RouterLink>
        </div>

      </div>
    </div>
  </div>
</template>
