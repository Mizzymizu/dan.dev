//Import components here
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