import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

interface CustomAppProps extends AppProps {
  pageProps: {
    session: any; // Replace 'any' with the correct type for the 'session' property
  };
}

const App = ({ Component, pageProps }: CustomAppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
