# VetApp - Sistema de Gestión Veterinaria Profesional

Este proyecto es una solución integral para la gestión de clínicas veterinarias, desarrollado como parte de la asignatura de Ingeniería de Software. La aplicación utiliza una arquitectura de **Single Page Application (SPA)** y está preparada para ser distribuida como una aplicación de escritorio mediante **Electron.js**.

## 🐾 Problemática y Objetivo

El sistema resuelve el descontrol en el seguimiento de vacunas por pérdida de cartillas físicas, la falta de registro organizado de citas y el control ineficiente de espacios de hospitalización.

**Objetivo:** Desarrollar un sistema de software eficiente que facilite el registro, control y consulta de datos médicos y administrativos, aplicando metodologías de desarrollo profesionales y control de versiones.

## ✨ Características Principales (Requerimientos)

- **RF-01 Gestión de Expedientes Digitales:** Registro y consulta de información completa de mascotas y propietarios.
- **RF-02 Registro de Historial de Vacunación:** Cartilla digital cronológica con alertas de próximas dosis y vacunas vencidas.
- **RF-03 Agenda de Citas y Servicios:** Gestión organizada de consultas médicas y servicios de estética (baño/corte) para evitar traslapes.
- **RF-04 Control de Hospitalización:** Mapa visual de jaulas y espacios disponibles para el seguimiento de pacientes internados.
- **RF-05 Consulta de Disponibilidad:** Dashboard con indicadores rápidos de recursos disponibles (citas, vacunas, camas) para agilizar la toma de decisiones.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** HTML5, CSS (Vanilla), JavaScript (ES6).
- **Iconografía:** Font Awesome 6.
- **Tipografía:** Google Fonts (Inter).
- **Desktop Wrapper:** Electron.js.
- **Control de Versiones:** Git / GitHub.

## 📂 Estructura del Proyecto

```text
Clinica-Veterinaria/
├── index.html          # Interfaz principal (SPA)
├── main.js             # Punto de entrada de Electron
├── package.json        # Configuración del proyecto y dependencias
├── .gitignore          # Archivos excluidos de Git
├── back/
│   └── script.js       # Lógica de navegación y modales
├── front/
│   └── style.css       # Sistema de diseño y estilos visuales
└── assets/             # Recursos estáticos e iconos
```

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Navegador Web

Simplemente abre el archivo `index.html` en cualquier navegador moderno.

### Opción 2: Aplicación de Escritorio (Recomendado)

Requiere tener instalado [Node.js](https://nodejs.org/).

1. Abre una terminal en la carpeta del proyecto.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   npm start
   ```

## 📝 Metodología

El proyecto sigue principios de diseño modular, separación de responsabilidades (MVC simple) y un enfoque en la experiencia de usuario (UX) mediante micro-interacciones y validaciones visuales.
