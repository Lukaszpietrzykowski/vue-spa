<template>
  <v-app id="inspire">
    <v-navigation-drawer permanent v-model="drawer">
      <v-list density="compact" nav>
        <v-list-item title="Projekt" subtitle="Praca domowa"></v-list-item>
        <v-divider></v-divider>
        <v-list-item to="/" prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
        <v-list-item to="/about" prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        <v-list-item to="/todolist" prepend-icon="mdi mdi-list-box-outline" title="Todo List" value="todolist"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="blue-lighten-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Projekt</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
}
</script>
