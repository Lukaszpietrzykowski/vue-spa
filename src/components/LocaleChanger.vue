<template>
  <div class="locale-changer">
    <v-select v-model="$i18n.locale" :items=$i18n.availableLocales variant="outlined">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </v-select>
  </div>
</template>

<style>
.locale-changer {
  margin: auto;
  padding: 5px;
}
</style>
