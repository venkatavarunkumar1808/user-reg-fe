# user-reg-fe
# Frontend for User Registration, Login, and Authentication

This project provides a frontend implementation using HTML, CSS, and JavaScript for user registration, login, and authentication. The design is simple, clean, and responsive.

---

## Features

- **User Registration Page**: A form for new users to register.
- **User Login Page**: A form for existing users to log in.
- **Styling with CSS**: Ensures a clean and user-friendly interface.
- **JavaScript Integration**: Handles form validation and API calls.

---

## File Structure

```
frontend/
|-- index.html        # Home page linking to registration and login pages
|-- registration.html # Registration form page
|-- login.html        # Login form page
|-- style.css         # CSS file for styling all pages
|-- script.js         # JavaScript file for form handling and API integration
```

---

## Pages

### **1. index.html**
- Serves as the home page.
- Contains links to the registration and login pages.

### **2. registration.html**
- Includes a form for user registration.
- Form fields:
  - Name
  - Email
  - Password
- Integrated with `script.js` for client-side validation and API submission.

### **3. login.html**
- Includes a form for user login.
- Form fields:
  - Email
  - Password
- Integrated with `script.js` for client-side validation and API submission.

---

## Styling

### **style.css**
- Provides a cohesive design across all pages.
- Key styling elements:
  - Responsive layout for different screen sizes.
  - Clean typography and spacing.
  - Consistent color scheme.

---

## Scripting

### **script.js**
- Handles dynamic behavior for the forms:
  - Validates user inputs (e.g., ensuring fields are not empty).
  - Sends API requests to the backend for registration and login.
  - Displays success or error messages based on the API response.

---

## How to Use

1. Open `index.html` in a browser to start.
2. Navigate to the registration or login pages.
3. Fill out the forms and submit to interact with the API.

---

## Future Improvements

- Add client-side password strength indicators.
- Implement a modal for success/error messages.
- Enhance design using a CSS framework like Bootstrap or Tailwind CSS.

