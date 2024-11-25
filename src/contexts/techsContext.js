"use client"
import { createContext, useState } from 'react';

// Crear el contexto
export const ActiveTechContext = createContext("");

// Crear el proveedor del contexto
export const ActiveTechProvider = ({ children }) => {
    const [activeTech, setActiveTech] = useState("");

    return (
        <ActiveTechContext.Provider value={{ activeTech, setActiveTech }}>
            {children}
        </ActiveTechContext.Provider>
    );
};