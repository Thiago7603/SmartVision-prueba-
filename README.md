# SmartVision

# Arquitectura del Proyecto SmartVision

## 1. Capa de Presentación (Frontend)
Esta capa es la interfaz de usuario y la interacción con el usuario.

### Tecnologías:
- **React Native (Expo)**: Para construir la interfaz de usuario.
- **ARCore**: Para funcionalidades de realidad aumentada.
- **MediaPipe**: Para detección de posturas en tiempo real.

---

## 2. Capa de Lógica de Negocio (Backend)
Esta capa maneja la lógica central de la aplicación y la comunicación con la base de datos.

### Tecnologías:
- **Firebase Functions**: Para lógica del backend sin necesidad de un servidor dedicado.

---

## 3. Capa de Datos (Base de Datos y Servicios en la Nube)
Esta capa almacena los datos y maneja su persistencia.

### Tecnologías:
- **Firebase Firestore (NoSQL)**: Para almacenar datos en formato JSON de manera escalable.
- **Firebase Storage**: Para alojar imágenes y modelos 3D utilizados en realidad aumentada.

---

### Nota
Cada capa está diseñada para trabajar de manera independiente pero integrada, proporcionando modularidad, escalabilidad y facilidad de mantenimiento.


