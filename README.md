# EISA Software 2023
(En desarrollo)

# Descripción
Software para manejo de recursos humanos (Nóminas, Gastos, Informes, etc.). Desarrollado usando [Vue.js 3](https://vuejs.org/) como framework JS y [Vuetify 3](https://vuetifyjs.com/en/) para componentes y estilos.

## NOTA
Este proyecto usa la API de [{crud:api}](https://crudapi.co.uk/) para el CRUD. Dado un error de CORS en desarrollo, se implementó una API como pasarela usando [MongoDB App Services](https://www.mongodb.com/atlas/app-services), ya que ambos se encuentran en los servidores de Google. Las API's que se usan en el front, solo funcionan como puente y no se almacena información alguna en MongoDB. En el archivo `appServicesCrudFunctions.js` se pueden observar las funciones usadas para llamar a API original.


## Configuración del proyecto
Para iniciar el proyecto, en la línea de comandos puedes escribir:

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Para compilar en desarrollo

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

### Compilar para producción

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build
```

## Algunas capturas
![eisa](https://github.com/felipe-castro-olivera/eisa-test/assets/95325538/a1fdbe58-dd20-47cc-86e9-eebe3f897d54)

![eisa-2](https://github.com/felipe-castro-olivera/eisa-test/assets/95325538/2fc01797-4ef2-4f72-8feb-40eebd3a24b0)

