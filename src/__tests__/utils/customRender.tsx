import { ReactElement, ReactNode } from "react";
import { CityProvider } from "@contexts/CityContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RenderOptions, render } from "@testing-library/react-native";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaProvider>
      <CityProvider>{children}</CityProvider>
    </SafeAreaProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export { customRender as render, Providers };
export * from "@testing-library/react-native";
