import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountContext from "./context/AccountProvider";

function App() {
  const clientId = '905877557361-vbibpmbsjbv6e7c04dc7ju1ir1k08p2t.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountContext>
        <Messenger/>
      </AccountContext>
    </GoogleOAuthProvider>
  );
}

export default App;
