<template>
  <v-app id="inspire">
    <v-navigation-drawer permanent v-model="drawer">
      <v-list density="compact" nav>
        <v-list-item :title="$t(`appbar.projectName`)" :subtitle="$t(`appbar.subtitle`)"></v-list-item>
        <v-divider></v-divider>
        <v-list-item to="/" prepend-icon="mdi-view-dashboard" :title="$t(`appbar.home`)" value="home"></v-list-item>
        <v-list-item to="/about" prepend-icon="mdi-forum" :title="$t(`appbar.about`)" value="about"></v-list-item>
        <v-list-item to="/todolist" prepend-icon="mdi mdi-list-box-outline" :title="$t(`appbar.todo`)" value="todolist"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="blue-lighten-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $t("appbar.projectName") }}</v-toolbar-title>
      <LocaleChanger/>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import LocaleChanger from "@/components/LocaleChanger.vue";

export default {
  components: {LocaleChanger},
  data: () => ({
    drawer: false
  }),
}
</script>
