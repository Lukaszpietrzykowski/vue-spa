<template>
  <div class="home pa-6">
    <h1>{{ $t("appbar.projectName") }}</h1>
    <v-card elevation="3" class="ma-6" :title="$t(`article.title`)">
      <v-card-text>
        {{ $t("article.descriptionShort") }}
      </v-card-text>
      <v-card-actions>
        <v-btn to="/card1" color="blue-darken-1" variant="outlined">{{ $t("buttons.clickme") }}</v-btn>
      </v-card-actions>
    </v-card>
    <v-card elevation="3" class="ma-6" :title="$t(`article.title`)">
      <v-card-text>
        {{ $t("article.descriptionShort") }}
      </v-card-text>
      <v-card-actions>
        <v-btn to="/card1" color="blue-darken-1" variant="outlined">{{ $t("buttons.clickme") }}</v-btn>
      </v-card-actions>
    </v-card>
    <v-card elevation="3" class="ma-6" :title="$t(`article.title`)">
      <v-card-text>
        {{ $t("article.descriptionShort") }}
      </v-card-text>
      <v-card-actions>
        <v-btn to="/card1" color="blue-darken-1" variant="outlined">{{ $t("buttons.clickme") }}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>

</script>
