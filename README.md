# udistri-1

La aplicación utiliza las siguientes tecnologías y paquetes:

- Express.js: Un framework web para Node.js que facilita el manejo de rutas y peticiones HTTP.
- MySQL: Base de datos utilizada para almacenar y gestionar los datos de citas, pacientes y doctores.
- EJS: Motor de plantillas para renderizar las vistas del sistema.
- Dotenv: Para cargar variables de entorno desde archivos .env.
- Nodemon: Utilizado en el desarrollo para reiniciar automáticamente el servidor cuando hay cambios en el código.
- TypeScript: Un superset de JavaScript que ofrece tipado estático para evitar errores en tiempo de ejecución.

## Pasos para la ejecución

1. Clona el repositorio.
2. Instala Node.js.
3. Instala las dependencias ejecutando el siguiente comando:
   ```
   npm install
   ```
4. Instala TypeScript ejecutando el siguiente comando:
   ```
   npm install typescript
   ```
5. Compila el proyecto utilizando:
   ```
   tcs
   ```

Antes de ejecutar el programa, asegúrate de crear una base de datos y configurar un archivo db con las credenciales correspondientes. Además, es necesario configurar las variables de entorno.


Los endpoints de la aplicación son:
Paciente

[GET] /paciente: Muestra el index de pacientes.
[POST] /paciente: Crea un nuevo paciente.
[GET] /paciente/lista: Lista todos los pacientes.
[GET] /paciente/:id: Muestra un paciente por cédula.
Doctor

[GET] /doctor: Muestra el index de doctores.
[POST] /doctor: Crea un nuevo doctor.
[GET] /doctor/lista: Lista todos los doctores.
[GET] /doctor/:id: Muestra un doctor por cédula.
Cita

[GET] /cita: Muestra el index de citas.
[POST] /cita: Crea una nueva cita.
[GET] /cita/lista: Lista todas las citas.
[GET] /cita/:id: Busca una cita por su identificador.


Apoyo visual:
[POST] /paciente

[GET] /paciente/lista
<img src="![listapacientes_cvt](https://github.com/OliDroid/udistri-1/assets/113155421/a90f7fbe-5d14-4cd3-b896-76893bc70495)" alt=”my banner”>


[GET] /paciente/:id: Muestra un paciente por cédula.
![pacienteporid_cvt](https://github.com/OliDroid/udistri-1/assets/113155421/113ad1b2-a395-4e8e-8d00-2f5506966e5b)
