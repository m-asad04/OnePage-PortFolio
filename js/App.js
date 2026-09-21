function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

// Mount the React Application
ReactDOM.createRoot(document.getElementById('root')).render(<App />);