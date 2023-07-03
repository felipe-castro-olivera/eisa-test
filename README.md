# EISA Software 2023

# Descripción
Software para manejo de recursos humanos (Nóminas, Gastos, Informes, etc.). Desarrollado en JavaScript usando [Vue.js 3](https://vuejs.org/) como framework. (Todavía en desarrollo).

## NOTA
Este proyecto usa la API de [{crud:api}](https://crudapi.co.uk/) para el CRUD. Dado un error de CORS en desarrollo, se implementó una API como pasarela usando [MongoDB App Services](https://www.mongodb.com/atlas/app-services), ya que ambos se encuentran en los servidores de Google. Las API's que se usan en el front, solo funcionan como puente y no se almacena información alguna en MongoDB.


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


