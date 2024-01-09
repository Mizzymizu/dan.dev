import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Import components here
import App from './App.jsx';
import Contact from './components/contactForm.jsx';
import Portfolio from './components/portfolio.jsx';
import Resume from './components/resume.jsx';
import LandingPage from './components/landingPage.jsx;'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                 element: <LandingPage />
            },
            {
                path: 'portfolio',
                element: <Portfolio />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'resume',
                element: <Resume />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);