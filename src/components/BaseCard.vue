<template>
  <v-card>
    <v-card-title class="headline primary white--text py-1" primary-title>
      <slot name="title"></slot>
    </v-card-title>

    <v-card-text>
      <slot name="content"></slot>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>