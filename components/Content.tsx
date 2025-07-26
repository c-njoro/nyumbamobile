import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Content = ({ children }: { children: any }) => {
  return <SafeAreaView className="px-4">{children}</SafeAreaView>;
};

export default Content;
