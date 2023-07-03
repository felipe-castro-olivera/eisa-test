<script setup>
import { onMounted, ref } from "vue";
import useEmployees from "@/composables/employees";
import BaseProgressLinear from "@/components/BaseProgressLinear.vue";
import BaseCard from "@/components/BaseCard.vue";

const { employees, getEmployees, deleteEmployee } = useEmployees();
const dialog = ref(false);
const idEmployee = ref(null);

onMounted(() => {
  getEmployees();
});

function confirmationDialog(_uuid) {
  dialog.value = true;
  idEmployee.value = _uuid;
}

const employeeToDelete = async (id) => {
  const response = await deleteEmployee(id);
  console.log(response);
  getEmployees();
  dialog.value = false;
  idEmployee.value = false;
};
</script>

<template>
  <v-card>
    <v-card-title>
      <v-row class="py-4 px-2">
        Empleados
        <v-spacer></v-spacer>
        <v-tooltip text="Agregar empleado">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-plus"
              size="large"
              color="primary"
              to="agregar-empleado"
            ></v-btn>
          </template>
        </v-tooltip>
      </v-row>
    </v-card-title>
    <base-progress-linear v-if="Object.keys(employees).length === 0" />
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
            <v-icon small @click="confirmationDialog(employee._uuid)">
              mdi-delete
            </v-icon>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>

  <v-dialog v-model="dialog" width="auto">
    <base-card>
      <template v-slot:title> Confirmación </template>
      <template v-slot:content>
        ¿Está segur@ que desea eliminar este empleado?
      </template>
      <template v-slot:actions>
        <v-btn color="red" text @click="employeeToDelete(idEmployee)">
          Eliminar
        </v-btn>
        <v-btn color="#016ff6" text @click.stop="dialog = false"> Salir </v-btn>
      </template>
    </base-card>
  </v-dialog>
</template>
