# 🔐 RSA Key Generator & Encryption Demo

Un demostrador interactivo de generación de claves RSA y cifrado/descifrado, implementado con **FastAPI** y un diseño visual moderno.

---

## 🚀 Características

- ✅ Generación de pares de claves RSA (pública/privada)
- ✅ Cifrado y descifrado de mensajes
- ✅ Interfaz visual moderna y responsiva
- ✅ Efectos **glassmorphism** y animaciones fluidas con **GSAP**
- ✅ Lluvia de código estilo **Matrix** (Canvas API)
- ✅ Diseño 100% funcional en móviles y desktop

---

## ⚙️ Tecnologías

- **Backend**: Python + FastAPI  
- **Frontend**: HTML5, CSS3, JavaScript  
- **Animaciones**: [GSAP (GreenSock)](https://greensock.com/gsap/)  
- **Criptografía**: [cryptography](https://cryptography.io/)

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/rsa-demo-fastapi.git
cd rsa-demo-fastapi
```

2. Instala dependencias:

```bash
pip install fastapi uvicorn cryptography
```

3. Ejecuta el servidor:

```bash
uvicorn main:app --reload
```

4. Abre en tu navegador:

```
http://localhost:8000
```

---

## 🎯 Uso

1. Haz clic en **"Generar Nuevas Claves"**  
2. Escribe un mensaje  
3. Observa cómo se **cifra** y luego se **descifra**  
4. ¡Explora visualmente cómo funciona RSA!

---

## 📂 Estructura del Proyecto

```
rsa-demo-fastapi/
├── static/           # Archivos CSS, JS y assets
├── templates/        # Plantillas HTML (Jinja2)
├── main.py           # Lógica backend con FastAPI
└── README.md         # Documentación del proyecto
```

---

## ✨ Proyecto educativo

Desarrollado para la **Universidad Central del Ecuador**  
Materia: *Seguridad y Gestión de Riesgo en las TI*  

---

