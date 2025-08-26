import './App.css'

function App() {
  return (
    <main
      style={{
        fontFamily: "Fira Code, monospace",
        padding: "2rem",
        lineHeight: 1.6,
        backgroundColor: "#ffe6f0", 
        height: "100vh",  
        width: "100%",      
        color: "#4a2c2a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "#fff0f6", 
          padding: "2rem",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(255, 182, 193, 0.5)",
          width: "100%",         
          maxWidth: "700px",     
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ color: "#ff4da6", marginBottom: "1rem" }}>🌷 About Me 🌷</h1>

        <p>
          <strong style={{ color: "#ff66b2" }}>Name:</strong> Veneese Julia M. Lazaraga
        </p>
        <p>
          <strong style={{ color: "#ff66b2" }}>Course & Year:</strong> BS Information Systems, 3rd Year
        </p>
        <p>
          <strong style={{ color: "#ff66b2" }}>Fun fact:</strong> I can see things better at night.
        </p>

        <p style={{ marginTop: "1.5rem" }}>
          <strong style={{ color: "#ff66b2" }}>Why I want to learn React:</strong> <br />
          I want to learn React because it offers tools for building efficient UIs. Since it’s widely used in the industry, mastering it will strengthen my frontend skills and allow me to apply them to real-world projects.
        </p>
      </div>
    </main>
  );
}

export default App;
