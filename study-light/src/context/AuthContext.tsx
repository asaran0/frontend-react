import React, { createContext, useState, useCallback, type ReactNode } from 'react';
import api from '../services/api'
import { type User, type AuthResponse } from '../types'

interface AuthContextType {
    user: User | null
    token: string | null;
    login: (username_or_email: string, password: string) => Promise<void>
    signup: (username: string, email: string, fullname: string, mobile_no: string, password: string) => Promise<void>
    logout: () => void
    isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children}) => {

}

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if(!context) throw new Error('useAuth must be used inside AuthProvider');
    return context;
};