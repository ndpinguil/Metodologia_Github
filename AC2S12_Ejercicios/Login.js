/* "Const" quiere decir que la variable que se declare con esa palabra, no va variar en su contenido*/


let name= prompt("Ingrese su nombre");
let password= prompt("Ingrese su clave");
const admin = "Nathaly";
const clave= "2004";

if(name==admin&&password==clave)
{
    console.log("Apto");
    
}
else
{
    console.log("No apto");
} 