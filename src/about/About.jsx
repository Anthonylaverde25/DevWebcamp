import React from "react";
import { MainLayout } from "../layout";

export const About = () => {
  return (
    <MainLayout>
      {/* Sección del encabezado */}
      <header className="bg-gradient-to-b from-blue-500 to-blue-700 py-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Descubre Nuestra Empresa</h1>
        <p className="text-lg">
          Bienvenido a nuestra plataforma innovadora y única.
        </p>
      </header>
    </MainLayout>
  );
};
