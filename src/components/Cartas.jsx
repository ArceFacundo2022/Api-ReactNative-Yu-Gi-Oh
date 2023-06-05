import { useEffect, useReducer} from 'react';
import { CardReducer } from '../reducer/CardReducer';
import React from 'react';

const Cartas = () => {

    const [respuesta, dispatchRespuesta] = useReducer(CardReducer,[])
    
    useEffect(() => {
    
        execute()
      }, [])
    
    const execute = async () => {
        const json = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?level=4&attribute=water&sort=atk')
        if (!json.ok){
            return alert(`Error al hacer la peticion`);
        }
        const data = await json.json()
        dispatchRespuesta({type :"[Cargar]", data: data.data})
    }

    return({respuesta, dispatchRespuesta})
}

export default Cartas
