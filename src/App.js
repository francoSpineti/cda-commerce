import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext';
import { FavProvider } from './context/FavContext';
import Favorites from './components/Main/Favorites';

function App() {
    return (
        <CartProvider>
            <FavProvider>
                <BrowserRouter>
                    <Header />
                    <Main />
                    <Footer />
                </BrowserRouter>
            </FavProvider>
        </CartProvider>
    );
}

export default App;
