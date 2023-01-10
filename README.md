# DEMO
## _Registro de empleados de la empresa CIELO_

El presente proyecto sirve para llevar el registro de empleados de la empresa CIELO, el cual permite realizar las siguientes acciones:
- Ingresar nuevos empleados
- Modificar la información de los empleados
- Eliminar la información de los empleados

## Demo 
La aplicación se encuentra alojada en un proveedor de nube gratuito NETLIFY
Ingrese al siguiente enlace para probar el demo
**https://papaya-syrniki-48c983.netlify.app/**

## Ejecutar aplicación de forma local
Clonar repositorio
```
https://github.com/peramon/demo-react-app.git
```
Ir a la raíz del proyecto e Instalar dependencias del proyecto
```
yarn install
```
En caso de que no se encuentre el paquete de reactstrap puedes seguir los pasos de [yarnpkg](https://yarnpkg.com/package/reactstrap) para instalarlo.

Ejecutar aplicativo
```
yarn dev
```
## Manual de usuario

- Al ingresar al demo, se ve directamente el módulo de registro de empleados, donde se observa la lista de empleados existente.

![Home](https://i.postimg.cc/3JkqJ9Jn/home.png)

- En la opción `Insertar Nuevo Empleado` se puede ingresar en los campos(_nombre, apellido, email, rol del empleado_) la información del empleado.

![InsertEmployee](https://i.postimg.cc/bJqMyhst/insert-Employee.png)

- Una vez llenada la información se debe precionar `Insertar` para que la información se ingrese o `Cancelar` para cancelar la inserción de la información del empelado.

![InserForm](https://i.postimg.cc/cJk1YXw6/inser-Form.png)

- Por cada empleado se podrá editar o eliminar la información del mismo.

![Acciones](https://i.postimg.cc/zBrPG1Pr/actions-Demo.png)

- Para **editar** se debe precionar en el siguiente icono.

![Editar](https://i.postimg.cc/DzsMhz66/modify-Icon.png)

- Posteriormente se habre una ventana con la información del empleado, aqui se podra modifcar dependiendo de las necesidades, una vez llena la información se selecciona `Aceptar` para guardar las modificaciones o `Cancelar` para evitar la moficicación de la información del empleado.

![Empleado](https://i.postimg.cc/02hB6mzx/edit-Employee.png)

- Para **eliminar** se debe precionar en el siguiente icono.

![Eliminar](https://i.postimg.cc/MpgFgB7X/delete-Icon.png)

- Una ves se seleccione eliminar, se muestra una alerta para confirmar si realmente desea eliminar  la información del empleado, si preciona `Aceptar` se elimina la información, si presiona `cancelar` se cancela la acción.

![Eliminado](https://i.postimg.cc/tJTM6NdR/confirm-Delete.png)

- Si se selecciono el icono de eliminar y se acepto en la alerta, el empleado es eliminado del listado de empleados.

![EliminarEmpleado](https://i.postimg.cc/L5b03gvt/delete-Employee.png)
