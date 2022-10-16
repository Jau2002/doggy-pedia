# DOGGY-PEDIA

[![.github/workflows/pipeline.yaml](https://github.com/Jau2002/doggy-pedia/actions/workflows/pipeline.yaml/badge.svg)](https://github.com/Jau2002/doggy-pedia/actions/workflows/pipeline.yaml)

![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Individual Project - Henry Dogs

<img height="200" src="./assets/dog.png" />

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## Horarios y Fechas

El proyecto tendrá una duración máxima de tres semanas. En el caso de ue completan todas las tareas antes de dicho lapso podrán avisar a su nstructor para coordinar una fecha de presentación del trabajo (DEMO).

## Comenzando

1. Forkear el repositorio para tener una copia del mismo en sus s
2. Clonar el repositorio en sus computadoras para comenzar a trabajar

Tendrán un `boilerplate` con la estructura general tanto del servidor omo de cliente.

**IMPORTANTE:** Es necesario contar minimamente con la última versión stable de Node y NPM. Asegurarse de contar con ella para poder correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

- **Node**: 12.18.3 o mayor
- **NPM**: 6.14.16 o mayor

Para verificar que versión tienen instalada:

```bash
node -v
npm -v
```

**ACLARACIÓN:** Las dependencias actuales se encuentran en las s que venimos trabajando durante el bootcamp.

Versiones:

- **react**: 17.0.1
- **react-dom**: 17.0.1
- **react-router-dom**: 5.2.0
- **redux**: 4.0.5
- **react-redux**: 7.2.3

Está permitido, **bajo su responsabilidad**, actualizar las s a versiones más actuales.

> **IMPORTANTE:** Versiones mas actuales podrían presentar nes diferentes respecto a las versiones en las que venimos trabajando urante el bootcamp.

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas etas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias redenciales para conectarte a postgres. Este archivo va ser ignorado la subida a github, ya que contiene información sensible (las ales).

Adicionalmente será necesario que creen desde psql una base de datos amada `dogs`

El contenido de `client` fue creado usando: Create React App.

## Enunciado

a idea general es crear una aplicación en la cual se puedan ver as razas de perro junto con información relevante de las mismas ndo la api externa [the dog api](https://thedogapi.com/) y a partir ella poder, entre otras cosas:

- Buscar perros
- Filtrarlos / Ordenarlos
- Agregar nuevos perros

**IMPORTANTE**: Para poder utilizar esta API externa es necesario se una cuenta para obtener una API Key que luego debera ser incluida todos los request que hagamos a rawg simplemente agregando `?api_keyYOUR_API_KEY}` al final de cada endpoint. Agregar la clave en el o `.env` para que la misma no se suba al repositorio por cuestiones seguridad y utilizarla desde allí.

**IMPORTANTE**: Para las funcionalidades de filtrado y ordenamiento pueden utilizar los endpoints de la API externa que ya devuelven los sultados filtrados u ordenados sino que deben realizarlo ustedes . En particular alguno de los ordenamientos o filtrados debe si o si alizarse desde el frontend.

### Únicos Endpoints/Flags que pueden utilizar

- GET <https://api.thedogapi.com/v1/breeds>
- GET <https://api.thedogapi.com/v1/breeds/search?q={raza_perro}>

### Requerimientos mínimos

A continuación se detallaran los requerimientos mínimos para la ión del proyecto individial. Aquellos que deseen agregar más dades podrán hacerlo. En cuanto al diseño visual no va a haber es ni prototipos prefijados sino que tendrán libertad de hacerlo a su usto pero tienen que aplicar los conocimientos de estilos vistos en curso para que quede agradable a la vista.

**IMPORTANTE**: No se permitirá utilizar librerías externas para r estilos a la aplicación. Tendrán que utilizar CSS con algunas de opciones que vimos en dicha clase (CSS puro, CSS Modules o Styled nents)

#### Tecnologías necesarias

- [ ] React
- [ ] Redux
- [ ] Express
- [x] Sequelize - Postgres

## Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las ientes pantallas/rutas.

**Pagina inicial**: deben armar una landing page con

- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

**Ruta principal**: debe contener

- [ ] Input de búsqueda para encontrar razas de perros por nombre
- [ ] Área donde se verá el listado de razas de perros. Deberá su:
  - Imagen
  - Nombre
  - Temperamento
  - Peso
- [ ] Botones/Opciones para filtrar por:
  - Temperamento
  - Raza existente (es decir las que vienen de la API) o agregada por osotros (creadas mediante el form)
- [ ] Botones/Opciones para ordenar tanto ascendentemente como ntemente las razas de perro por:
  - Orden alfabético
  - Peso
- [ ] Paginado para ir buscando y mostrando las siguientes razas, ando 8 razas por página.

**IMPORTANTE**: Dentro de la Ruta Principal se deben mostrar tanto razas de perros traidas desde la API como así también las de la base datos, pero NO está permitido almacenar en la base de datos las de perros de la API sino que solamente se pueden guardar aquellas as desde el form.

**Ruta de detalle de raza de perro**: debe contener

- [ ] Los campos mostrados en la ruta principal para cada raza ( nombre y temperamento)
- [ ] Altura
- [ ] Peso
- [ ] Años de vida

**Ruta de creación de raza de perro**: debe contener

- [ ] Un formulario **controlado con JavaScript** con los siguientes mpos:
  - Nombre
  - Altura (Diferenciar entre altura mínima y máxima)
  - Peso (Diferenciar entre peso mínimo y máximo)
  - Años de vida
- [ ] Posibilidad de seleccionar/agregar uno o más temperamentos
- [ ] Botón/Opción para crear una nueva raza de perro

> Es requisito que el formulario de creación esté validado con pt y no sólo con validaciones HTML. Pueden agregar las validaciones consideren. Por ejemplo: Que el nombre de la raza no pueda contener meros o símbolos, que el peso/altura mínimo no pueda ser mayor al o y viceversa, etc.

## Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (uellas propiedades marcadas con asterísco deben ser obligatorias):

- [x] Raza con las siguientes propiedades:
  - ID \*
  - Nombre \*
  - Altura \*
  - Peso \*
  - Años de vida
- [x] Temperamento con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades debe ser de muchos a muchos ya que a raza de perro puede tener varios "temperamentos" en simultaneo y, a u vez, un "temperamento" puede corresponder a múltiples razas de distintas. Por ejemplo la raza `pug` es docil, inteligente y sociable entre otras). Pero a su vez existen otras razas de perro que también n sociables o inteligentes.

**IMPORTANTE**: Pensar como modelar los IDs de las razas de perros en a base de datos. Existen distintas formas correctas de hacerlo pero er en cuenta que cuando hagamos click en alguna, esta puede provenir la API o de la Base de Datos por lo que cuando muestre su detalle no ebería haber ambigüedad en cual se debería mostrar. Por ejemplo si en a API la raza `Pug` tiene id = 1 y en nuestra base de datos creamos nueva raza `Henry Pug` con id = 1, ver la forma de diferenciarlas do querramos acceder al detalle de la misma.

## Backend

Se debe desarrollar un servidor en Node/Express con las siguientes s:

**IMPORTANTE**: No está permitido utilizar los filtrados, y paginados brindados por la API externa, todas estas tienen que implementarlas ustedes.

- [x] **GET /dogs**:
  - Obtener un listado de las razas de perro
  - Debe devolver solo los datos necesarios para la ruta principal
- [x] **GET /dogs?name="..."**:
  - Obtener un listado de las razas de perro que contengan la palabra ngresada como query parameter
  - Si no existe ninguna raza de perro mostrar un mensaje adecuado
- [ ] **GET /dogs/{idRaza}**:
  - Obtener el detalle de una raza de perro en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de raza perro
  - Incluir los temperamentos asociados
- [ ] **POST /dogs**:
  - Recibe los datos recolectados desde el formulario controlado de ruta de creación de raza de perro por body
  - Crea una raza de perro en la base de datos relacionada con sus eramentos
- [ ] **GET /temperaments**:
  - Obtener todos los temperamentos posibles
  - En una primera instancia deberán obtenerlos desde la API externa guardarlos en su propia base de datos y luego ya utilizarlos desde allí

## Testing

- [ ] Al menos tener un componente del frontend con sus tests os
- [ ] Al menos tener una ruta del backend con sus tests respectivos
- [ ] Al menos tener un modelo de la base de datos con sus tests tivos
