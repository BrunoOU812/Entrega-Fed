var user; /*Almacenar Nombre Usuario */
var num = 0; /* Genera un Id automático, para ubicar el Bloguito recién creado en la pantalla */

/* -----------------------------------------------------------------General----------------------------------------------------------------*/
/* Mensaje de Error */
/* Modulo compartido por las dos funciones con input en las diferentes páginas*/
function error(contenedor, errores, errorMsg) {
    contenedor.textContent = '';
    errorMsg.innerHTML = '<i class="fas fa-times"></i>' + "_" + errores;
    document.getElementById("error").appendChild(errorMsg);
}

/* -----------------------------------------------------------------Main.html----------------------------------------------------------------*/
/* Nombre de Usuario */
function userName(){
    var userName = document.getElementById("userName");
    console.log(user);
    /* esto es para cargar la variable usuario en la barra de navegación*/
    userName.innerHTML = '<i class="fas fa-user-circle"></i>'+" "+user;
    console.log(userName);
    console.log(user);
}

/* Crear Usuario... ( Registrarse ) */
/* (Comprobar que el nombre de usuario sea ingresado, y que las contraseñas coincidan, aunque no es necesario poner contraseña) */
function register() {
    var errores = [];/*para añadir errores*/
    user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatPassword").value;
    var contenedor = document.getElementById("error");
    var errorMsg = document.createElement("DIV");
    errorMsg.setAttribute("class", "errorMsg");

    function passwordFunc() {
        errorMsg.setAttribute("class", "errorMsg");
        errores.push(" Las contraseñas no coinciden ");
    }

    if (user.length !== 0) {
        contenedor.textContent = '';
        if (password !== repeatPassword) {
            passwordFunc();
            error(contenedor, errores, errorMsg);
        }else{
            console.log(user);
            location.replace("Blog.html");
        }
    } else {
        if (user.length === 0) {
            errores.push(" Falta Usuario ");
        }
        if (password !== repeatPassword) {
            passwordFunc();
        }
        error(contenedor, errores, errorMsg);
    }
}


/* -----------------------------------------------------------------Blog.html----------------------------------------------------------------*/
/* Comenta Algo... */
function createContent() {
    var errores = [];/*para añadir errores*/
    user = document.getElementById("title").value;
    var password = document.getElementById("text").value;
    var contenedor = document.getElementById("error");
    var errorMsg = document.createElement("DIV");
    errorMsg.setAttribute("class", "errorMsg");
    function contenido() {
        if (password.length === 0) {
            errores.push(" Falta Contenido ");
            error(contenedor, errores, errorMsg);
        }
    }
    if (user.length !== 0) {
        contenedor.textContent = '';
        contenido();
    } else {
        errores.push(" Falta Titulo ");
        contenido();
        error(contenedor, errores, errorMsg);
    }
    if (errores.length === 0) { postIt(); }
}

/* Crear Bloguito */
function postIt() {
    var container = document.createElement("DIV");
    var post = "post" + num;
    num = num + 1;
    console.log(post);
    container.setAttribute("id", post);
    container.setAttribute("class", "post");
    var content = document.createElement("DIV");
    var title = document.createElement("H4");
    var text = document.createElement("P");
    var inputTitle = document.getElementById("title").value;
    var inputText = document.getElementById("text").value;
    console.log(inputText);
    title.innerHTML = inputTitle;
    text.innerHTML = inputText;
    console.log(text);
    content.appendChild(title);
    content.appendChild(text);
    container.appendChild(content);
    console.log(container);
    var blog = document.getElementById("blog");
    blog.appendChild(container);
    window.scrollTo(post.offsetLeft, post.offsetTop);
}

/*Volver a Pagina Principal*/
function salir(){    
    location.replace("Main.html");
}
