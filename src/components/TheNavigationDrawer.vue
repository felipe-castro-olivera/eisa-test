<script setup>

const links = [
  ["mdi-account-group", "Nómina", "/"],
  ["mdi-cash", "Gastos", "/gastos"],
  ["mdi-chart-bar", "Informes", "/informes"],
  ["mdi-briefcase", "Trámites", "/tramites"],
  ["mdi-domain", "Empresa", "/empresa"],
];
</script>

<template>
  <v-navigation-drawer>
    <v-sheet color="#1B76BC" class="pa-4">
      <v-row>
        <v-col cols="4">
          <v-avatar class="mb-4" color="grey-darken-1" size="64">
            <v-img
              src="https://eisa.company/wp-content/uploads/2023/05/fotos-pag-web_Mesa-de-trabajo-1-copia-8-min-1-1.jpg"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="8">
          <h3 class="text-white">Lorena Martinez</h3>
          <h5 class="text-white">Human Talent</h5>
          <h5 class="text-white">Outsourcing</h5>
        </v-col>
      </v-row>
    </v-sheet>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="[icon, text, url] in links"
        :key="icon"
        link
        :to="url"
      >
        <template v-slot:prepend>
          <v-icon>{{ icon }}</v-icon>
        </template>

        <v-list-item-title>{{ text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
