import * as SecureStore from "expo-secure-store";
import React, { createContext, useContext, useEffect, useState } from "react";

import { API_URL } from "@/constants/Api";

interface LandlordAuthContextType {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: any | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const LandlordAuthContext = createContext<LandlordAuthContextType | null>(null);

export function LandlordAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const token = await SecureStore.getItemAsync("landlordToken");
      const userData = await SecureStore.getItemAsync("landlordData");

      if (token && userData) {
        setUser(JSON.parse(userData));
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Landlord login check error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/api/landlord/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      await SecureStore.setItemAsync("landlordToken", String(data.token));
      await SecureStore.setItemAsync(
        "landlordData",
        JSON.stringify(data.landlord)
      );

      setUser(data.landlord);
      setIsLoading(false);
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync("landlordToken");
      await SecureStore.deleteItemAsync("landlordData");
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Landlord logout error:", error);
    }
  };

  return (
    <LandlordAuthContext.Provider
      value={{ isLoading, isLoggedIn, user, login, logout }}
    >
      {children}
    </LandlordAuthContext.Provider>
  );
}

export function useLandlordAuth() {
  const context = useContext(LandlordAuthContext);
  if (!context)
    throw new Error("useLandlordAuth must be used within LandlordAuthProvider");
  return context;
}
