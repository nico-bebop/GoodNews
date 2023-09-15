<h1 align="center">Good News</h1>


### Descripción

Aplicación web que consume noticias de [News API](https://newsapi.org/). Permite ver las últimas noticias de un país o buscar por palabras clave y rango de fechas.

#### Tecnologías

- .NET Core 7
- React
- TypeScript
- Material UI

#### Instrucciones

1. Para inicializar la API backend, ir al directorio del proyecto y en la carpeta *webapi* ejecutar el comando `dotnet run`.

2. Luego, ir a la carpeta *frontend* y ejecutar en otra consola los comandos `npm install` y `npm run dev`.

3. Abrir [http://localhost:5173](http://localhost:5173) en el navegador para ver el proyecto.

4. Adicionalmente, en [http://localhost:5204](http://localhost:5204) se pueden ejecutar los siguientes endpoints:
    1. GET /api/news/search?dateFrom=[Date]&dateTo=[Date]&keywords=[Keywords]&page=[Page]&pageSize=[PageSize]
    2. GET /api/news/top-headlines?country=[Country]&page=[Page]&pageSize=[PageSize]

#### Puntos a mejorar

- Agregar paginación a los resultados en ambas vistas
- Manejo de errores desde el backend
- Empaquetar la solución en un contenedor de Docker
- Mejorar la interfaz de usuario
