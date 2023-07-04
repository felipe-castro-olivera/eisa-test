<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import useMiscellaneous from "@/composables/miscellaneous";
import useEmployees from "@/composables/employees";

const router = useRouter();
const { roles, getRoles } = useMiscellaneous();
const { saveEmployee } = useEmployees();

const valid = ref(false);
const nombreEmpleado = ref("");
const apellidoEmpleado = ref("");
const role = ref(null);

const nameRules = ref([
  (value) => {
    if (value) return true;
    return "Nombre es requerido.";
  },
  (value) => {
    if (value?.length <= 10) return true;
    return "Name must be less than 10 characters.";
  },
]);
const roleRules = ref([
  (value) => {
    if (value) return true;
    return "Debes seleccionar un rol.";
  },
]);

onMounted(() => {
  getRoles();
});

async function storeEmployee() {
  const data = {
    firstName: nombreEmpleado.value,
    lastName: apellidoEmpleado.value,
    role: role.value,
  };
  const response = await saveEmployee(data);
  router.push("/");
}
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-sheet class="ma-2 pa-2">
          <div class="text-h6 text-center">Agregar empleado</div>
          <v-form v-model="valid">
            <v-container fluid>
              <v-row>
                <v-text-field
                  v-model="nombreEmpleado"
                  :rules="nameRules"
                  label="Nombre"
                  required
                ></v-text-field>
              </v-row>

              <v-row cols="12" md="4">
                <v-text-field
                  v-model="apellidoEmpleado"
                  :rules="nameRules"
                  label="Apellido"
                  required
                ></v-text-field>
              </v-row>

              <v-row cols="12" md="4">
                <v-select
                  v-model="role"
                  label="Selecciona rol"
                  :items="roles"
                  item-title="role"
                  item-value="role"
                  :rules="roleRules"
                  required
                ></v-select>
              </v-row>
            </v-container>
            <v-btn :disabled="!valid" @click="storeEmployee" color="primary">
              Guardar
            </v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
