# 3D Developer Portfolio

This is my personal 3D developer portfolio, built to showcase my skills in modern web technologies. It features interactive 3D graphics, animations, and a clean, responsive design.

**Note:** You can replace the placeholder data in `src/constants/index.js` (like work experience, projects, and testimonials) with your own information.

### [View Live Demo](https://your-vercel-deployment-link.vercel.app)

---

## Features

- **Interactive 3D Models:** Utilizes Three.js and `@react-three/fiber` for engaging 3D visuals.
- **Smooth Animations:** Built with Framer Motion for a fluid user experience.
- **Responsive Design:** Adapts seamlessly to various screen sizes from mobile to desktop.
- **Contact Form:** A functional contact form integrated with EmailJS.
- **Modern Tech Stack:** Built with React, Vite, and styled with Tailwind CSS.

## Technologies Used

- **Frontend:** React, Vite
- **3D Graphics:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Email Service:** EmailJS

## Local Setup and Installation

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the following variables. You can get these keys from your [EmailJS dashboard](https://www.emailjs.com).

    ```
    VITE_APP_EMAILJS_SERVICE_ID='YOUR_SERVICE_ID'
    VITE_APP_EMAILJS_TEMPLATE_ID='YOUR_TEMPLATE_ID'
    VITE_APP_EMAILJS_PUBLIC_KEY='YOUR_PUBLIC_KEY'
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).
