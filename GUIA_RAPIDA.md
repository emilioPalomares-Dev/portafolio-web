# 🚀 Quick Start Guide - Portfolio de Robótica

## ✅ Estado del Proyecto

**Todos los archivos creados exitosamente:**
- ✅ 9 componentes React
- ✅ Archivos de configuración (Vite, Tailwind, PostCSS)
- ✅ Sistema de internacionalización (i18n)
- ✅ Datos de proyectos y habilidades
- ✅ Estilos globales y utilities
- ✅ Documentación completa

**Total de archivos:** 25+

---

## ⚠️ Requisito Previo: Instalar Node.js

Para ejecutar este proyecto, necesitas tener **Node.js** instalado en tu sistema.

### Opción 1: Instalador Oficial (Recomendado)

1. Visita: https://nodejs.org/
2. Descarga **LTS (Long Term Support)** - versión 20.x o superior
3. Ejecuta el instalador
4. Verifica la instalación:
   ```bash
   node --version
   npm --version
   ```

### Opción 2: Node Version Manager (nvm)

Para Windows, usa **nvm-windows**:
1. Descarga desde: https://github.com/coreybutler/nvm-windows/releases
2. Instala `nvm-setup.exe`
3. Abre PowerShell como administrador:
   ```bash
   nvm install 20
   nvm use 20
   ```

---

## 🎯 Pasos para Ejecutar el Portfolio

Una vez que tengas Node.js instalado:

### 1. Navegar al Directorio del Proyecto

```bash
cd c:\Users\emili\.gemini\antigravity\playground\warped-crater
```

### 2. Instalar Dependencias

Esto descargará todas las librerías necesarias (React, Vite, Tailwind, etc.):

```bash
npm install
```

**Tiempo estimado:** 2-3 minutos  
**Espacio en disco:** ~250 MB (se crea carpeta `node_modules/`)

### 3. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

Verás algo como:

```
  VITE v5.4.0  ready in 1234 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 4. Abrir en el Navegador

Abre tu navegador en: **http://localhost:3000**

¡Tu portafolio estará funcionando! 🎉

---

## 🎨 Vista Previa de Secciones

### 1. Hero Section
- Fondo con gradiente azul (#0066CC → #00A3FF)
- Avatar circular con letra "R"
- Título: "Robotics & Automation Engineer"
- 2 botones CTA: "View Projects" y "Download CV"
- Indicador de scroll animado

### 2. About Section
- 3 párrafos de biografía profesional
- Grid de 4 intereses con iconos:
  - 🚀 Autonomous Robotics
  - 👁️ Computer Vision
  - 💾 IoT & Embedded Systems
  - ⚡ ROS & Control Systems

### 3. Projects Section
- Grid responsivo (1 → 2 → 3 columnas)
- 3 proyectos destacados:
  1. **Dron Autónomo** - Raspberry Pi, Python, OpenCV
  2. **Brazos Robóticos** - ROS, Visión Artificial
  3. **Control de Acceso IoT** - ESP32, MQTT
- Hover effects con zoom en imágenes
- Tags de tecnologías
- Botones: GitHub + View Details

### 4. Skills Section
- 5 categorías en cards:
  - **Programming:** Python, C++, JavaScript, MATLAB
  - **Robotics:** ROS, Control Systems, Kinematics
  - **Electronics:** Arduino, ESP32, Raspberry Pi
  - **Simulation:** Gazebo, SolidWorks
  - **Tools:** Git, Linux, CAD

### 5. Contact Section
- Formulario funcional (nombre, email, mensaje)
- Enlaces sociales: GitHub, LinkedIn, Email
- Validación de campos
- Estados de success/error

### 6. Footer
- Enlaces sociales repetidos
- Copyright dinámico (año actual)
- Botón "Back to Top"
- Tema oscuro

---

## 🌍 Funcionalidad Bilingüe

El toggle de idioma en el navbar permite cambiar entre:

**Inglés (EN)**
```
Robotics & Automation Engineer
View Projects | Download CV
```

**Español (ES)**
```
Ingeniero en Robótica y Automatización
Ver Proyectos | Descargar CV
```

La preferencia se guarda en `localStorage` del navegador.

---

## 📱 Responsividad

### Mobile (< 640px)
- Menú hamburguesa
- Cards en 1 columna
- Botones apilados verticalmente

### Tablet (640px - 1024px)
- Grid de 2 columnas
- Navegación completa visible

### Desktop (> 1024px)
- Grid de 3 columnas
- Espaciado amplio
- Hover effects completos

---

## 🔧 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Servidor local (puerto 3000)

# Producción
npm run build        # Compilar para producción (genera /dist)
npm run preview      # Vista previa del build

# Limpieza
rm -rf node_modules  # Eliminar dependencias
rm -rf dist          # Eliminar build
```

---

## 📦 ¿Qué Instalará npm?

Cuando ejecutes `npm install`, se descargarán:

**Producción (~50 MB):**
- react + react-dom (biblioteca principal)
- framer-motion (animaciones)
- react-i18next + i18next (traducciones)
- react-icons + lucide-react (iconos)

**Desarrollo (~200 MB):**
- vite (bundler ultra rápido)
- tailwindcss (framework CSS)
- @vitejs/plugin-react
- autoprefixer, postcss
- eslint (linter)

**Total:** ~250 MB en carpeta `node_modules/`

---

## 🚨 Solución de Problemas

### Error: "npm: command not found"
→ Node.js no está instalado. Sigue las instrucciones arriba.

### Error: "EACCES: permission denied"
→ En Windows, ejecuta PowerShell como Administrador

### Puerto 3000 ocupado
→ Cambia el puerto en `vite.config.js`:
```javascript
server: {
  port: 4000  // Usa otro puerto
}
```

### Dependencias desactualizadas
```bash
npm outdated          # Ver versiones
npm update            # Actualizar
```

---

## ✏️ Personalización Rápida

### 1. Cambiar Nombre
**Archivo:** `src/components/Hero.jsx`  
**Línea 66:**
```jsx
<h1>Tu Nombre Aquí</h1>
```

### 2. Actualizar Enlaces Sociales
**Archivos:** 
- `src/components/Contact.jsx` (líneas 13-28)
- `src/components/Footer.jsx` (líneas 12-14)

```javascript
url: 'https://github.com/TU-USUARIO',
url: 'https://linkedin.com/in/TU-USUARIO',
url: 'mailto:TU-EMAIL@gmail.com',
```

### 3. Agregar Imágenes de Proyectos

**Ubicación:** `public/assets/`

Agrega estos archivos:
- `drone.jpg` (1200x800px)
- `robotic-arms.jpg` (1200x800px)
- `iot-access.jpg` (1200x800px)

**Optimización recomendada:**
- Formato: JPG o WebP
- Tamaño: < 200 KB cada una
- Dimensiones: 1200x800px

### 4. Subir CVs

**Ubicación:** `public/assets/resume/`

Agrega:
- `CV_EN.pdf` (versión en inglés)
- `CV_ES.pdf` (versión en español)

### 5. Configurar Formulario de Contacto

**Ver:** Sección "EmailJS Setup" en el README principal

---

## 📊 Estructura de Carpetas

```
warped-crater/
│
├── 📁 public/           # Archivos estáticos
│   └── 📁 assets/       # Imágenes y CVs
│       ├── drone.jpg
│       ├── robotic-arms.jpg
│       ├── iot-access.jpg
│       └── 📁 resume/
│           ├── CV_EN.pdf
│           └── CV_ES.pdf
│
├── 📁 src/              # Código fuente
│   ├── 📁 components/   # Componentes React (9 archivos)
│   ├── 📁 data/         # Datos (proyectos, skills)
│   ├── i18n.js          # Traducciones
│   ├── index.css        # Estilos globales
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
│
├── 📄 index.html        # HTML base
├── 📄 package.json      # Dependencias
├── 📄 tailwind.config.js # Config de Tailwind
├── 📄 vite.config.js    # Config de Vite
│
└── 📄 README.md         # Documentación completa

Una vez instalado:
├── 📁 node_modules/     # Dependencias (creado por npm)
└── 📁 dist/             # Build de producción (npm run build)
```

---

## 🎯 Siguiente Paso

**Instala Node.js y ejecuta:**

```bash
cd c:\Users\emili\.gemini\antigravity\playground\warped-crater
npm install
npm run dev
```

Luego abre: **http://localhost:3000**

---

## 📚 Recursos Adicionales

- **Documentación completa:** `README.md`
- **Guía de implementación:** Ver Walkthrough en artifacts
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Vite Docs:** https://vitejs.dev

---

**¿Tienes Node.js instalado?** ¡Ejecuta los comandos arriba y tu portfolio estará listo en minutos! 🚀
