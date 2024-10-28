import { useContext, createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { URL } from "./constants";
import React from 'react';

const AuthContext = createContext({
    isAuthenticated: false,
    login: async () => {},
    logout: () => {},
    user: null
});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token != null) {
            try {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;
                if (decodedToken.exp > currentTime) {
                    setIsAuthenticated(true);
                    setUser(decodedToken.user);
                } else {
                    logout(); 
                }
            } catch (error) {
                console.log("Error en el token ", error);
            }
        }
    }, []);

    const login = async (username, password) => {
        try {
            const resp = await fetch(`${URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
    
            const data = await resp.json();
    
          
            if (!resp.ok) {
               
                const errorMessage = data.message || 'Error desconocido';
                throw new Error(errorMessage);
            }
    
         
            localStorage.setItem('token', data.data.token);
            setIsAuthenticated(true);
            setUser(data.data.user);
        } catch (error) {
            alert('Error en la petición de login: ', error);
            throw error;
        }
    };
    
  
    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
