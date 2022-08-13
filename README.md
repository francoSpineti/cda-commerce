# Clase 3

-   JSX
-   CARACTERÍSTICAS DE LOS COMPONENTES

*   Todos los componentes de react son funciones

```js
const foo = () => {};
foo();

const Foo = () => {};
<Foo />;
```

-   Todos los componentes se escriben con la letra inicial en mayúscula

-   Todos los componentes retornan un solo elemento

*   Import y Exports

-   Export default
-   Export nombrado

*   CSS

-   css puro
-   module css
-   css inline
-   css con js

*   IMG

-   Desde public
-   Desde src
-   Desde la web

*   Class components

```js
class Foo extends Component {
    render() {
        return (
            <div>
                <h1>Hola mundo</h1>
            </div>
        );
    }
}
```

-   PROPS

*   Todos los componentes pueden recibir PROPS

Para que podamos pasar información de un componente padre a un componente hijo, debemos utilizar props.
Es la manera de implementar el flujo de datos unidireccional.
Yo puedo pasar por props strings, numbers, booleans, arrays, objetos, otro componente, etc.
Sería como el parámetro que pasamos en una función.

```js
//js vanilla
const foo = (a, b) => {};

//a -> 'Hola mundo'
//b -> 88

foo('Hola mundo', 88);
```

```js
const App = () => {
    <Foo saludo="Bienvenidos" />;
};

const Foo = (props) => {
    return <h2>{props.saludo}</h2>;
};
```
