import   Home   from './src/screens/Home';
import { AppProvider } from './src/Contexts/UserContext';


export default function App() {
  return (
    <AppProvider>
   
       <Home/>
    
    </AppProvider>
    
  );
}

