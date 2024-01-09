//Import components here
import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/nav';
import Page from './components/page';
import { useLocation } from 'react-router-dom';

function App() {
    const currentPage = useLocation().pathname;

    return (
        <div>
            <Header>
                <Nav currentPag={currentPage} />
            </Header>
            <main>
                <Page currentPage={currentPage} />
            </main>
            <Footer />
        </div>
    );
}

export default App;