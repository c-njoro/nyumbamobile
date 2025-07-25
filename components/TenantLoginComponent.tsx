import { Colors } from "@/constants/Colors";
import { useTenantAuth } from "@/context/TenantAuthContext";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AppGradient from "./AppGradient";

const TenantLoginComponent = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login, isLoading } = useTenantAuth();

  const handleLogin = async () => {
    setError(null);
    try {
      await login(email, password);
      console.log("Tenant logged in successfully");
      router.push("/tenant");
    } catch (err: any) {
      console.log("LoginFailed: ", err);
      setError(err.message || "Login failed");
    }
  };

  return (
    <AppGradient colors={[`${Colors.primary}`, `${Colors.primary}`]}>
      <View className="w-full h-full flex flex-col justify-center items-center px-6">
        <Text className="text-3xl font-poppins mb-2">Tenant Login</Text>
        <Text className="text-lg mb-6">Please enter your credentials</Text>
        <View className="w-full">
          <TextInput
            className="bg-white rounded-lg px-4 py-3 mb-4"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            className="bg-white rounded-lg px-4 py-3 mb-4"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {error && (
            <Text className="text-red-500 mb-2 text-center">{error}</Text>
          )}
          <TouchableOpacity
            className="bg-accent rounded-lg py-3"
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text className="text-white text-center text-lg font-poppins">
              {isLoading ? "Logging in..." : "Login"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppGradient>
  );
};

export default TenantLoginComponent;
