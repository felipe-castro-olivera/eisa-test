<script setup>
import { onMounted } from "vue";
import useEmployees from "@/composables/employees";

const { employees, getEmployees } = useEmployees();

onMounted(() => {
  getEmployees();
});
</script>

<template>
  <v-card>
    <v-card-title>
      <v-row class="py-4 px-2">
        Empleados
        <v-spacer></v-spacer>
        <v-btn icon="mdi-plus" size="large" color="primary"></v-btn
      ></v-row>
    </v-card-title>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Avatar</th>
          <th class="text-left">Nombre</th>
          <th class="text-left">Role</th>
          <th class="text-left">Estado</th>
          <th class="text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.name">
          <td>
            <v-avatar>
              <img
                v-if="employee.image"
                alt="Avatar"
                :width="50"
                :src="employee.image"
              />
              <v-icon v-else :color="blue" v-text="FC"></v-icon>
            </v-avatar>
          </td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.role }}</td>
          <td>
            <v-chip v-if="employee.status === 'Active'" color="green">
              {{ employee.status }}
            </v-chip>
            <v-chip v-else-if="employee.status === 'PTO'" color="orange">
              {{ employee.status }}
            </v-chip>
            <v-chip v-else color="red">
              {{ employee.status }}
            </v-chip>
          </td>
          <td>
            <v-icon small class="mr-2" @click="editItem(employee)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(employee)"> mdi-delete </v-icon>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
