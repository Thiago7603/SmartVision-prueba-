# 🧠 Smart Vision

**Smart Vision** es una aplicación móvil desarrollada con **React Native (Expo)** que utiliza tecnologías de **visión por computadora** y **realidad aumentada** para ofrecer una experiencia de entrenamiento físico inteligente y segura.

## 🚀 Descripción General

Smart Vision permite a los usuarios:
- Iniciar sesión o registrarse de forma segura.
- Visualizar ejercicios con instrucciones detalladas.
- Entrenar usando una guía visual con **ARCore**.
- Corregir su postura en tiempo real gracias a **MediaPipe**.
- Consultar estadísticas personalizadas de su desempeño.
- Gestionar su perfil y progreso.

Esta app busca **reducir el riesgo de lesiones** y **mejorar la técnica** del usuario durante la actividad física.

---

## ⚙️ Tecnologías Utilizadas

- **Frontend**: [React Native (Expo)](https://expo.dev/)  
- **Autenticación y Base de Datos**: [Firebase](https://firebase.google.com/)  
- **Visión por Computadora**: [MediaPipe](https://mediapipe.dev/)  
- **Realidad Aumentada**: [ARCore](https://developers.google.com/ar)

---

## 🧱 Arquitectura por Capas

El proyecto está estructurado siguiendo una **arquitectura limpia (Clean Architecture)** basada en tres capas principales:

### 1. **Presentación (`app/`)**
Contiene toda la lógica de interfaz de usuario:
- Pantallas (`Landing`, `Login`, `Register`, `Home`, `Dashboard`, `Profile`)
- Navegación
- Componentes visuales

### 2. **Dominio (`core/`)**
Incluye:
- Casos de uso (ej. iniciar sesión, registrar ejercicio, obtener estadísticas)
- Modelos de datos
- Validaciones de negocio

### 3. **Infraestructura (`infra/`)**
Abstracción de tecnologías externas:
- `firebase/`: Autenticación, Firestore, almacenamiento de usuarios.
- `mediapipe/`: Detección y corrección de posturas.
- `arcore/`: Visualización en realidad aumentada.

---

## 🛠️ Estructura de Carpetas (resumen)

```bash
📦SmartVision
├── app/             # Capa de presentación (pantallas, navegación, UI)
├── core/            # Lógica de negocio y modelos (dominio)
├── infra/           # Servicios externos (Firebase, MediaPipe, ARCore)
├── assets/          # Imágenes, íconos, fuentes, etc.
├── package.json
└── README.md
