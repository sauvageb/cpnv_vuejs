<template>
  <div class="row justify-content-center">
    <div class="col-lg-6 mb-5">
      <h1>Nouveau tutorial</h1>

      <div class="form-group mt-3">
        <input type="text" name="title" class="form-control" placeholder="Titre" required>
      </div>
      <div class="form-group mt-3">
        <input type="text" name="lead" class="form-control" placeholder="Description" required>
      </div>
      <div class="form-group mt-3">
        <label for="category">Categorie</label>
        <select class="form-select" id="category" name="category">
          <option v-for="category in categories" :key="category.id">{{ category.name }}</option>
        </select>
      </div>

      <div class="form-group mt-3">
        <label for="content">Description</label>
        <textarea class="form-control" id="content" name="content" rows="3" required></textarea>
      </div>

      <div class="form-group mt-3">
        <label for="date">Date</label>
        <input class="form-control" type="date" id="date" name="date" rows="3" required/>
      </div>


      <button type="submit" class="btn btn-primary mt-3">Ajouter</button>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const categories = ref([]);
</script>
