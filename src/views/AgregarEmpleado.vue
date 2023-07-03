<template>
  <v-container fluid>
    <base-card class="ma-5">
      <template v-slot:title>Agregar empleado</template>
      <template v-slot:content>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row class="mt-5 mx-2">
            <v-col>
              <v-text-field
                v-model="primerNombre"
                :counter="20"
                :rules="nombreReglas"
                label="Primer nombre"
                @keyup="mayuscula"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="segundoNombre"
                :counter="20"
                :rules="nombreReglas"
                label="Segundo nombre"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-2">
            <v-col>
              <v-text-field
                v-model.trim="primerApellido"
                :counter="20"
                :rules="nombreReglas"
                label="Primer apellido"
                @keyup="mayuscula"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="segundoApellido"
                :counter="20"
                :rules="nombreReglas"
                label="Segundo apellido"
                @keyup="mayuscula"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-2">
            <v-col>
              <v-select
                v-model="paisSeleccionado"
                :items="paises"
                label="País del empleo"
                required
                outlined
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                v-model="tipoIdentificacionSeleccionada"
                :items="tipoIdentificacion"
                label="Tipo de identificación"
                required
                outlined
              ></v-select>
            </v-col>
          </v-row>

          <v-btn
            :disabled="!valid"
            color="primary"
            @click="validate"
            
          >
            Enviar
          </v-btn>
        </v-form>
      </template>
    </base-card>

    <v-fab-transition>
      <v-btn to="/" color="#1B76BC" fab large bottom fixed>
        <v-icon color="white">mdi-arrow-collapse-left</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue';

export default {
  components: { BaseCard },
  data: () => ({
    valid: true,
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    paises: ['Colombia', 'Estados Unidos'],
    paisSeleccionado: '',
    paisEmpleoSeleccionado: '',
    tipoIdentificacion: ['CC', 'CE', 'P', 'PE'],
    tipoIdentificacionSeleccionada: 'CC',
    numeroIdentificacion: '',
    email: '',
    fechaIngreso: '2022/01/01',
    fechaRegistro: '07/03/2023 10:15:30',
    area: [
      'Administración',
      'Financiera',
      'Compras',
      'Infraestructura',
      'Operación',
      'Sistemas',
      'Talento Humano',
      'Servicios Varios',
    ],
    areaSeleccionada: '',
    nombreReglas: [
      (v) => !!v || 'Campo requerido',
      (v) => (v && v.length <= 20) || 'Debe ser menor a 20 caracteres',
      (v) => {
        const pattern = new RegExp('^[a-zA-Z]+$');
        return pattern.test(v) || 'No se permite caracteres especiales ni ñ';
      },
    ],
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    mayuscula(e) {
      e.target.value = e.target.value.toUpperCase();
    },
  },
};
</script>
