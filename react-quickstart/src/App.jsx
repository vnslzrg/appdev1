import './App.css'

function AdminPanel() {
  return <h1>Welcome, Admin!</h1>;
}

function LoginForm() {
  return <h1>Please log in to continue.</h1>;
}

function App() {
const isLoggedIn = true; 

let content;

if (isLoggedIn){
  content = <AdminPanel />;
}
else {
  content = <LoginForm />;
}

return (
  <div>
    {content}
  </div>
);
}

export default App
