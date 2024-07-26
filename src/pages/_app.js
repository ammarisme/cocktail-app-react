import '../styles.css';
import { FavoritesProvider } from '../context/FavoritesContext';
import GlobalStyle from '../styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <FavoritesProvider>
      <GlobalStyle />
      <ToastContainer />
      <Component {...pageProps} />
    </FavoritesProvider>
  );
}

export default MyApp;
