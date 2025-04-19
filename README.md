
# 🚘 Vehicle Manager - Spring Boot + Angular + Pexels

## 📌 Description

**Vehicle Manager** est une application web complète (**Fullstack**) permettant la **gestion de véhicules**.  
Elle propose des opérations **CRUD** (Créer, Lire, Mettre à jour, Supprimer) sur des véhicules et intègre l’API **Pexels** pour afficher automatiquement une **image d’aperçu réaliste** du véhicule recherché.

---

## 🧰 Technologies utilisées

### Backend
- 🔧 Java 17
- ⚙️ Spring Boot
- 🗄️ PostgreSQL
- 📡 Spring Web (REST)
- 📦 Spring Data JPA
- 🧪 Lombok
- 🔐 Spring Boot Starter Validation

### Frontend
- 🌐 Angular 16+
- 💅 Angular Material 

### Intégration externe
- 🖼️ [Pexels API](https://www.pexels.com/api/) — pour afficher une image réaliste du véhicule

---

## 🔑 Configuration de l'API Pexels

1. Crée un compte sur [pexels.com/api](https://www.pexels.com/api/)
2. Récupère ta **clé API**
3. Dans ton `application.properties` ou `application.yml`, ajoute :

```properties
pexels.api.key=YOUR_PEXELS_API_KEY
```

Puis dans ton code :

```java
@Value("${pexels.api.key}")
private String pexelsApiKey;
```

---

## 🗄️ Structure de la base de données

La base de données utilisée est **PostgreSQL**.  
Un exemple de modèle `Vehicle` :

```java
@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String brand;
    private String model;
    private int year;
    private String color;
}
```

---

## 📦 Endpoints REST

| Méthode | URL                          | Description                            |
|--------:|------------------------------|----------------------------------------|
| `GET`   | `/api/v1/vehicles`           | Récupérer tous les véhicules           |
| `GET`   | `/api/v1/vehicles/{id}`      | Récupérer un véhicule par ID           |
| `POST`  | `/api/v1/vehicles`           | Créer un nouveau véhicule              |
| `PUT`   | `/api/v1/vehicles/{id}`      | Modifier un véhicule existant          |
| `DELETE`| `/api/v1/vehicles/{id}`      | Supprimer un véhicule                  |
| `GET`   | `/api/v1/imgs?prompt=XXX`| Obtenir une image du véhicule via Pexels |

---

## 🖼️ Exemple de réponse avec image Pexels

```json
{
  "imageUrl": "https://images.pexels.com/photos/xxxxx/pexels-photo.jpg"
}
```

---

## ⚙️ Lancer le projet

### Backend (Spring Boot)

```bash
./mvnw clean install
./mvnw spring-boot:run
```

L’application démarre sur : `http://localhost:8080`

### Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

Accès à l'interface utilisateur : `http://localhost:4200`

---

## 🧪 Exemple d’appel API

```http
GET /api/v1/imgs?prompt=BMW M5 noir
```

---

## 📌 À venir / améliorations possibles

- 🔐 Authentification avec JWT
- ☁️ Déploiement sur Docker + Heroku / Render
- 🔍 Filtres avancés sur les véhicules (année, marque…)
- 🧠 Intégration d'une IA pour générer une image personnalisée
- 📱 Version mobile responsive

---

## 👨‍💻 Auteur

Développé par **Gianny** 🧑‍💻  
Projet personnel de gestion de véhicules + démonstration d'appel API externe.

---

## 🪪 Licence

Ce projet est distribué sous licence MIT.
