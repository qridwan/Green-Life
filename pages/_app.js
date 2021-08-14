import "../styles/globals.css";
import { Provider } from 'next-auth/client'
function MyApp({ Component, pageProps }) {
  console.log("🚀 ~ file: _app.js ~ line 4 ~ MyApp ~ pageProps", pageProps)
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
