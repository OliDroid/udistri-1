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
![crearpaciente](https://github.com/OliDroid/udistri-1/assets/113155421/47f178b2-5a36-4863-b572-77942c7acea9)

[GET] /paciente/lista
![listapacientes](https://github.com/OliDroid/udistri-1/assets/113155421/cffbd2cd-6472-4d62-a6ae-e9bf1e097e4f)


[GET] /paciente/:id
![pacienteporid](https://github.com/OliDroid/udistri-1/assets/113155421/8e6ba28e-29fe-4551-b609-4d0d5637f815)

[POST] /doctor

[GET] /doctor/lista
![listadoctores_1](https://github.com/OliDroid/udistri-1/assets/113155421/faea1865-c467-4625-bce0-1d075a239a63)

[GET] /doctor/:id
![doctorporid](https://github.com/OliDroid/udistri-1/assets/113155421/00fb2126-bfb3-4df9-bde5-9937e4646bf3)

[POST] /cita: Crea una nueva cita.

[GET] /cita/lista: Lista todas las citas.
![listacitas_1](https://github.com/OliDroid/udistri-1/assets/113155421/b92e2151-2f74-4d43-81c9-4bc6cf848261)

[GET] /cita/:id: Busca una cita por su identificador.
