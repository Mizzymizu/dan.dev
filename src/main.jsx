import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
// Import components here

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                 element: //Landing Page
            },
            {
                path: 'portfolio',
                element: //Portfolio component
            },
            {
                path: 'contact',
                element: //Contact me component
            },
            {
                path: 'resume',
                element: //Resume component
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);