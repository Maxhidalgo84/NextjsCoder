 <h1 align="center"> Ecommerce Bodega Maxteina </h1>

Descripción de su proyecto: Desarrollo de una pagina web de ecommerce de productos de vineria, con carrito incluido realizada en Nextjs.

![una muestra de la pagina](https://github.com/Maxhidalgo84/NextjsCoder/blob/main/maxteina.png)

>Link del proyecto: [Ir a la tienda](https://nextjs-coder.vercel.app/)

Cómo pueden usarlo los usuarios: Se puede aplicar para otros rubros, generando un ecommerce de productos o servicios. 

Funcionalidades: <ul>
                   <li>Catalogo de productos</li>
                   <li>Categoria de productos</li>
                   <li>Carrito de compras</li>
                   <li>Pagina Admin</li>
                 <ul>
## Componentes
Aca un resumen de los componentes que utilice: 

* NavBar  donde se realizo la barra de navegación, la misma maneja las búsquedas con el router
* ProductosContainer aca se encuentra el listado de los items que se muestran en pantalla, se generan las card de cada uno en Item y se filtran los productos por categoria..
* ProductDetail amplía cada producto y brinda información detalladada al respecto, se pueden agregar los productos al carrito, ver el stock disponible.
*Cart: Se muestran los productos que van al carrito, detallando la cantidad, precio total y luego al finalizar la compra se despliega un formulario de venta.

## Caracteristicas y herramientas:

- `Tailwind CSS:`
    
- `Sweet Alert 2:`
    - Para crear alerts con mejor apariencia y utilidad, como al momento de realizar una compra, o dar aviso de algo al usuario.
    
- `use-Form:`
    - Para el manejo de los formularios

- `Storage:`
    Para guardar los productos del carrito.   
    
- `Firebase:`
    - **FireStore:**
    Se realizo la base de datos en Firestore, donde tenemos almacenados por un lado todos los productos cada uno con su id, detalle como ser imagenes, precio, titulo, descripcion, etc,. Se pueden realizar consultas para traernos los productos filtrando por categoria o por id de producto, asi como tambien se guardan las ventas realizadas para mostrar todo de forma dinamica dentro de la aplicación.  
  
   
### Diseño
- Toda la app esta diseñada y maquetada con ***Tailwind CSS***
