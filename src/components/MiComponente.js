import React, {Component} from 'react';

class MiComponente extends Component{

    render(){
        let receta ={
            nombre: 'pizza',
            ingredientes: ['Tomate', 'Queso' , 'Jamon cocido'],
            calorias: 400

        }

        return (
            <>
            <h1>Nombre: {receta.nombre}</h1>
            <h2>Calorias: {receta.calorias}</h2>

            <ol>
                {
                    receta.ingredientes.map((ingrediente, i)=>{
                        // console.log(ingrediente);
                        return (
                            <li key={i}>
                                {ingrediente}
                            </li>
                        );
                            
                        
                    })
                }
            </ol>
            <hr/>

            </>
        );
    }
}

export default MiComponente