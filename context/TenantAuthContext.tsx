import * as SecureStore from "expo-secure-store";
import React, { createContext, useContext, useEffect, useState } from "react";

import { API_URL } from "@/constants/Api";

interface TenantAuthContextType {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: any | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const TenantAuthContext = createContext<TenantAuthContextType | null>(null);

export function TenantAuthProvider({
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
      const token = await SecureStore.getItemAsync("tenantToken");
      const userData = await SecureStore.getItemAsync("tenantData");

      if (token && userData) {
        setUser(JSON.parse(userData));
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Tenant login check error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/api/tenant/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      await SecureStore.setItemAsync("tenantToken", String(data.token));
      await SecureStore.setItemAsync("tenantData", JSON.stringify(data.tenant));

      setUser(data.tenant);
      setIsLoading(false);
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync("tenantToken");
      await SecureStore.deleteItemAsync("tenantData");
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Tenant logout error:", error);
    }
  };

  return (
    <TenantAuthContext.Provider
      value={{ isLoading, isLoggedIn, user, login, logout }}
    >
      {children}
    </TenantAuthContext.Provider>
  );
}

export function useTenantAuth() {
  const context = useContext(TenantAuthContext);
  if (!context)
    throw new Error("useTenantAuth must be used within TenantAuthProvider");
  return context;
}
