/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    colors: {
      magenta: "#f43f5e",
      primary: "#3490dc",
      secondary: "#9561e2",
      success: "#38a169",
      warning: "#f6e05e",
      danger: "#e3342f",
      // Puedes agregar más colores según tus necesidades
    },
    extend: {
      textColor: {
        primary: "#3490dc", // Color de texto primario
        secondary: "#9561e2", // Color de texto secundario
        magenta: "#f43f5e", // Color de texto magenta
        success: "#38a169", // Color de texto de éxito
        warning: "#f6e05e", // Color de texto de advertencia
        danger: "#e3342f", // Color de texto de peligro
        textModal: "#0f172a",
        green: "#059669",
        // Agrega más colores de texto si es necesario
      },
      backgroundColor: {
        primary: "#3490dc", // Color de fondo primario
        secondary: "#9561e2", // Color de fondo secundario
        magenta: "#f43f5e", // Color de fondo magenta
        success: "#38a169", // Color de fondo de éxito
        warning: "#f6e05e", // Color de fondo de advertencia
        danger: "#e3342f",
        modal: "rgb(28 25 23)",
        white: "#fff",
        // Agrega más colores de fondo si es necesario
      },
      // También puedes extender otros estilos según sea necesario
    },
  },
  plugins: [],
};
