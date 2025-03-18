# AI-Travel Planner

## Project Overview

The travel planner application is designed to help users create and manage personalized travel itineraries based on their preferences. The application leverages modern web technologies to provide a seamless and interactive user experience. Here are the key features and functionalities of the project:

### Key Features

1. **User Authentication**:

   - Users can sign in and sign out using their Google accounts, thanks to Firebase Authentication integration.
   - The application ensures that only authenticated users can access certain features and pages, such as viewing and creating travel plans.

2. **Travel Plan Creation**:

   - Users can create customized travel plans by providing details such as destination, trip duration, budget, and travel companions.
   - The application validates user inputs to ensure that the destination is not just numbers and that the trip duration is within a specified range.

3. **Personalized Itineraries**:

   - Based on the user's input, the application generates a detailed travel itinerary, including budget-friendly hotel options and daily activities.
   - The generated itinerary includes essential details such as hotel names, addresses, prices, images, coordinates, ratings, and descriptions.

4. **Responsive Design**:

   - The user interface is designed to be responsive, ensuring that the application is accessible and user-friendly on various devices and screen sizes.

5. **Protected Routes**:

   - Certain routes within the application are protected, ensuring that only authenticated users can access them. This enhances the security and privacy of user data.

6. **User Inactivity Management**:

   - The application includes a custom inactivity timer that automatically logs out users after a specified period of inactivity, enhancing security.

7. **Real-Time Feedback**:
   - The application provides real-time feedback to users through toast notifications, informing them of successful actions or errors.

### Technologies Used

- **React**: For building the user interface with functional components and hooks.
- **React Router**: For client-side routing and protected routes.
- **Firebase Authentication**: For user authentication and session management.
- **Context API**: For managing global state related to user authentication.
- **Custom Hooks**: For handling user inactivity and other reusable logic.
- **Tailwind CSS**: For responsive and modern UI design.
- **Gemini APIs**: For generating travel plans and fetching detailed trip information.

### User Flow

1. **Sign In**: Users sign in using their Google accounts.
2. **Create Travel Plan**: Authenticated users provide details about their trip, such as destination, duration, budget, and travel companions.
3. **Generate Itinerary**: The application generates a detailed travel itinerary based on the user's input.
4. **View Trip Details**: Users can view the generated itinerary, including hotel options and daily activities.
5. **Automatic Logout**: Users are automatically logged out after a period of inactivity to ensure security.
