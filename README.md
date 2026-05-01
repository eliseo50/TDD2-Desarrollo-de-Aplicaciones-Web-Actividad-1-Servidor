# ToDo List Server

## Descripción

Este proyecto es un servidor backend para una aplicación de lista de tareas y metas. Permite gestionar dos tipos de elementos: **tasks** (tareas) y **goals** (metas). Cada elemento tiene un nombre, descripción y fecha asociada.

El servidor expone endpoints para crear, listar y eliminar elementos de cada tipo. La autenticación se maneja mediante un middleware que verifica la presencia de un token.

## Instalación

### Requisitos

Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js
- pnpm

### Pasos

1. Clonar el repositorio.

```bash
git clone [URL_DEL_REPOSITORIO]
cd "ToDo List - Server"
```

2. Instalar las dependencias del proyecto.

```bash
pnpm install
```

3. Configurar las variables de entorno creando un archivo `.env` en la carpeta raíz del proyecto.

Ejemplo de variables requeridas:

```env
PORT=5000
VITE_CLIENT_URL=http://localhost:5173
```

4. Iniciar la aplicación en modo desarrollo.

```bash
pnpm run dev
```

Para compilar y ejecutar en producción:

```bash
pnpm run build
pnpm start
```

## Funcionalidad

El servidor incluye las siguientes funcionalidades principales:

- Listar tareas y metas.
- Crear nuevas tareas y metas.
- Eliminar tareas y metas existentes.
- Autenticación mediante middleware.



## Arquitectura

El backend está construido utilizando:

- Node.js
- Express
- TypeScript

Dependencias principales:

- `express` para el framework web
- `cors` para habilitar peticiones desde el frontend
- `dotenv` para manejar variables de entorno
- `tsx` para ejecutar TypeScript en desarrollo

## Estructura del proyecto

```
ToDoList - Server/
├─ src/
│  ├─ controllers/
│  ├─ middleware/
│  ├─ routes/
│  ├─ types/
│  └─ index.ts
├─ .env
├─ package.json
└─ README.md
```

### Controllers

Contienen la lógica para cada endpoint:

- `getItems`: devuelve la lista de items de un tipo dado.
- `addItem`: crea un nuevo item con el tipo especificado.
- `removeItem`: elimina un item por su id.
- `itemController`: almacena los items en memoria.

### Middleware

- `auth`: verifica la autenticación de las peticiones.

### Routes

- `items`: define los endpoints para tareas y metas.

### Types

- `Item`: define la interfaz para un elemento (id, name, description, date).

## Endpoints

Todos los endpoints requieren autenticación y están expuestos bajo el prefijo:

```
/api
```

### Tareas

**GET /api/getTasks**

Obtiene la lista de tareas.

**POST /api/addTask**

Crea una nueva tarea.

Ejemplo de body:

```json
{
  "name": "string",
  "description": "string",
  "date": "string"
}
```

**DELETE /api/removeTask**

Elimina una tarea por su id.

### Metas

**GET /api/getGoals**

Obtiene la lista de metas.

**POST /api/addGoal**

Crea una nueva meta.

Ejemplo de body:

```json
{
  "name": "string",
  "description": "string",
  "date": "string"
}
```

**DELETE /api/removeGoal**

Elimina una meta por su id.
