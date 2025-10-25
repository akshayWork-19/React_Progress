## MegaBlogProject

This is a full-stack, single-page blogging application built with React and powered by Appwrite for backend services (Authentication, Database, and Storage). It offers a secure and responsive platform for users to create, view, edit, and delete blog posts.

## 🚀 Features

The application provides a complete content management experience, secured by protected routes.

- User Authentication (Appwrite): Secure sign-up, sign-in, and sign-out functionality.

- Protected Routes: User-specific actions (like adding or editing posts) are restricted to authenticated users using the custom AuthLayout component.

- Public Access: Home, Login, and Sign-up pages.

- Authenticated Access: All Posts, Add Post, Edit Post, and Post Detail pages.

- Real-time State Management (Redux Toolkit): Centralized state management for authentication status (status) and user data (userData).

- Post Management (Appwrite Database):

  - Create Posts: Add new blog entries with rich content.

  - View All Posts: See a list of all published posts.

  - View Single Post: Dedicated page to read an individual post (/post/:slug).

  - Edit Posts: Update existing posts (/edit-post/:slug).

  - Delete Posts: Remove posts permanently.

- File Storage (Appwrite Storage): Handles storage for post thumbnails or other media.

## 🛠️ Tech Stack

| **Category**         | **Tool / Technology**         | **Purpose / Description**                                             |
| -------------------- | ----------------------------- | --------------------------------------------------------------------- |
| **Technology**       | React (Vite)                  | UI Library and development environment.                               |
| **State Management** | Redux Toolkit                 | Predictable state container for Auth status and User Data.            |
| **Routing**          | React Router DOM              | Client-side navigation and protected routes.                          |
| **Backend**          | Appwrite                      | Authentication, Database (CRUD for posts), and Storage (Files/Media). |
| **Styling**          | CSS / Tailwind CSS (Inferred) | Responsive and modern application styling.                            |

## 📁 Folder Structure

The project follows a standard React/Vite structure, separating configuration, components, pages, and services.

```
.
├── src/
│   ├── appwrite/          # Appwrite service configuration and API calls.
│   ├── assets/            # Static assets like images or fonts.
│   ├── components/        # Reusable UI components (Header, Footer, Button, PostCard, AuthLayout, etc.)
│   ├── conf/              # Project-wide configuration (e.g., environment variables, Appwrite client initialization).
│   ├── pages/             # Route-level components (Home, Login, Signup, AllPosts, AddPost, EditPost, Post).
│   ├── store/             # Redux configuration and slices (e.g., authSlice.js).
│   ├── App.jsx            # Main component, usually wrapping the layout.
│   └── main.jsx           # Entry point, Redux Provider, and React Router setup.
├── public/                # Public assets.
└── README.md              # This file.

```

## ⚙️ Installation and Setup

Prerequisites

1. Node.js (LTS version recommended)

2. Appwrite Instance: You need a running Appwrite instance (either self-hosted or using Appwrite Cloud).

Steps

1. Clone the Repository:

```
git clone repo_url
cd MegaBlogProject
```

2. Install Dependencies:

```
npm install
# or
yarn install
```

3. Appwrite Setup:

- Create a new project in your Appwrite console.

- Set up a Database and a Collection for your blog posts (ensure proper read/write rules are set).

- Set up a Storage Bucket for handling post images.

4. Configuration:

- Create a file named .env in the root of the project and add your Appwrite credentials:

```
VITE_APPWRITE_URL="[Your Appwrite Endpoint]"
VITE_APPWRITE_PROJECT_ID="[Your Appwrite Project ID]"
VITE_APPWRITE_DATABASE_ID="[Your Database ID]"
VITE_APPWRITE_COLLECTION_ID="[Your Posts Collection ID]"
VITE_APPWRITE_BUCKET_ID="[Your Storage Bucket ID]"
```

(Note: Your actual configuration might be managed in src/conf using this structure.)

5. Run the Application:

```
npm run dev
# or
yarn dev
```

The application will start on http://localhost:5173 (or the port specified by Vite).

made by akshay
