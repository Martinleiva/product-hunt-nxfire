import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

function useAutenticacion() {
    const [usuarioAutenticado, guardarUsuarioAuntenticado] = useState(null);

    useEffect(() => {
        
        const unsuscribe = firebase.auth.onAuthStateChanged(usuario => {
            if(usuario) {
                guardarUsuarioAuntenticado(usuario);
            } else {
                guardarUsuarioAuntenticado(null);
            }
        });

        return () => unsuscribe();
        
    }, []);

    return usuarioAutenticado;
}
export default useAutenticacion;