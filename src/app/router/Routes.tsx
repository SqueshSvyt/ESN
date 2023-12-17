import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../../features/account/Login";
import Register from "../../features/account/Register";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import PasswordRecovery from "../../features/account/PasswordRecovery";
import EmailConfimation from "../../features/account/EmailConfirmation";
import Profile from "../../features/account/Profile";
import Events from "../../features/events/Events";
import CreateEvent from "../../features/events/CreateEvent";
import EventPage from "../../features/events/EventPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path:'', element: <HomePage />},
            {path: 'login', element: <Login />},
            {path: 'register', element: <Register />},
            {path:'passwordRecovery', element: <PasswordRecovery />},
            {path: 'emailConfirmation', element: <EmailConfimation />},
            {path: 'profile', element: <Profile />},
            {path: 'events', element: <Events/>},
            {path: 'createEvent', element: <CreateEvent/>},
            {path: 'Event', element: <EventPage/>},
            {path: '*', element: <Navigate replace to='/not-found' />}
            
        ]
    }
])