# Grupo SERVIMA

## Objetivos


## Proceso de instalación en local

- Clonar el repositorio
- Agregar un archivo .env en la raiz del proyecto

```javascript
DATABASE=mongodb://localhost:27017/grupojusa
SECRET=PASSWORDSECRETO123
```

- A través de terminal, situate en la carpeta del proyecto e instala las dependencias. Un primer `package.json` está en la raiz del proyecto
y el segundo `package.json` está en la carpeta `client`.

```shell
npm install
```

- Abre finalmente el proyecto desde la raiz con el comando:

```shell
npm run server
```

