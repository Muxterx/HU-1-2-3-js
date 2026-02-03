CRUDTASK – Estructura del Proyecto
=================================

Este proyecto simula un sistema de gestión de tareas académicas
usando JSON Server como API falsa.

---------------------------------
1. Estructura de carpetas
---------------------------------

/CRUDTASK
│
├── db.json
├── index.html        → Login
├── register.html     → Registro
├── user.html         → Panel usuario
├── admin.html        → Dashboard admin
│
├── /js
│   ├── auth.js       → Login, registro, sesión
│   ├── user.js       → CRUD de tareas usuario
│   └── admin.js      → Dashboard y métricas
│
└── /css
    └── styles.css    → Estilos generales

---------------------------------
2. Cómo ejecutar el proyecto
---------------------------------

1) Instalar JSON Server:
   npm install -g json-server

2) Ejecutar la API:
   json-server --watch db.json --port 3000

3) Abrir index.html con Live Server o doble clic.

---------------------------------
3. Archivos y qué contiene cada uno
---------------------------------

index.html
----------
Formulario de login.
Llama a auth.js para validar credenciales.

register.html
-------------
Formulario de registro.
Rol se asigna automáticamente como "user".

user.html
---------
Panel del usuario:
- Listar sus tareas
- Crear tareas
- Cambiar estado
- Eliminar tareas

admin.html
----------
Dashboard del administrador:
- Total de tareas
- Pendientes
- Completadas
- Ver todas

/js/auth.js
-----------
- login()
- register()
- getSession()
- logout()

/js/user.js
-----------
- loadTasks()
- addTask()
- deleteTask()
- changeStatus()

/js/admin.js
------------
- loadStats()
- loadAllTasks()
- deleteTask()

---------------------------------
4. Base de datos (db.json)
---------------------------------

{
  "users": [
    {
      "id": 1,
      "name": "Admin",
      "email": "admin@crud.com",
      "password": "1234",
      "role": "admin"
    }
  ],
  "tasks": []
}

---------------------------------
5. Reglas de seguridad
---------------------------------

- Si no hay sesión → redirige a login.
- User solo ve sus tareas.
- Admin ve todas.
- LocalStorage guarda sesión.
- Rutas protegidas por rol.

---------------------------------
Autor: Santiago Rendón Sierra
CRUDTASK – Prueba de desempeño