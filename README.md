# AI Wireframe To Code Generator

#### *The AI Wireframe To Code Generator is a full-stack Next.js application designed to transform wireframes into functional code using AI-powered automation. This SaaS platform leverages cutting-edge technologies to streamline the development process for designers and developers alike.*

## Key Features

- **AI-Powered Automation**: Convert wireframes into functional code effortlessly.
- **User-Friendly Interface**: Built with Next.js and styled with Tailwind CSS for a seamless user experience.
- **Secure Authentication**: Firebase Authentication ensures secure user sign-up and login.
- **Scalable Database**: Utilizes NEON DB and PostgreSQL for high-performance data storage.
- **Customizable Models**: Supports multiple AI models via Open Router and OpenAI.


[Site](https://ai-wireframe-to-code-sxidsvit.vercel.app/)

## Target Audience

Individuals interested in developing artificial intelligence applications.

---

![]()<img src="demo.gif" alt="Table" width="960" height="496" style="display: block; margin-left:100px ;"> 

---


## Tech Stack

### Frontend
- **Next.js**: Server-rendered React framework for enhanced performance and SEO.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **TypeScript**: Statically typed superset of JavaScript for robust code quality.

### Backend
- **Firebase**: Handles user authentication and secure image storage.
- **NEON DB & PostgreSQL**: Cloud-native database service for scalable data management.
- **Drizzle ORM**: Type-safe ORM for seamless interaction with PostgreSQL.

### AI Integration
- **Open Router**: Access to multiple AI models, including:
  - `meta-llama/llama-3.3-70b-instruct:free`
  - `google/gemini-2.0-pro-exp-02-05:free`
  - `deepseek/deepseek-r1-distill-lla...` 
- **OpenAI**: Advanced AI models like GPT-4 and GPT-3.5 for natural language processing.

---

## Database Schema

### Users Table
| Field      | Type           | Description                                                                 |
|------------|----------------|-----------------------------------------------------------------------------|
| `id`       | integer        | Unique user identifier (primary key, auto-increment).                       |
| `name`     | varchar(255)   | User's name (required field).                                               |
| `email`    | varchar(255)   | User's email (required field, unique value).                                |
| `credits`  | integer        | Number of credits for the user (default value: 0).                         |

### WireframeToCode Table
| Field         | Type           | Description                                                                 |
|---------------|----------------|-----------------------------------------------------------------------------|
| `id`          | integer        | Unique record identifier (primary key, auto-increment).                    |
| `uid`         | varchar        | Unique identifier for linking to a user or session.                        |
| `imageUrl`    | varchar        | URL of the wireframe image.                                                 |
| `model`       | varchar        | Name of the AI model used to generate the code.                            |
| `description` | varchar        | Brief description of the wireframe or generated code.                      |
| `code`        | json           | JSON representation of the generated code.                                 |
| `createdBy`   | varchar        | Email or ID of the user who created the record.                            |

### Relationships
| Table               | Field         | References Table   | References Field | Relationship Type |
|---------------------|---------------|--------------------|------------------|-------------------|
| `wireframeToCode`   | `createdBy`   | `users`            | `email`          | One-to-Many       |

---

 *Configuration: Make sure to create a `.env` file with following variables*

```js
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_DATABASE_URL
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_NEON_DB_CONNECTION_STRING
OPENROUTER_AI_API_KEY
```

## Getting Started

1. Visit the AI Wireframe To Code  Generator website: [Site]( https://ai-wireframe-to-code-sxidsvit.vercel.app/)
2. Create an account using the secure sign-up process.
3. Explore the platform's features and functionalities.


## Contact:

[<img alt="webDev | LinkedIn" src="https://img.shields.io/badge/linkedin-0077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />][linkedin]

[linkedin]: https://www.linkedin.com/in/sergiy-antonyuk/

---

##### Acknowledgements

*A special thanks to [you](https://www.youtube.com/@tubeguruji) for your invaluable contributions and inspiration.*
