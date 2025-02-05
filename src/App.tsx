import { FaSpotify, FaYoutube, FaInstagram } from "react-icons/fa";
import './App.css'

// Card Component
const Card = ({ children }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {children}
        </div>
    );
};

// CardContent Component
const CardContent = ({ children }) => {
    return <div className="p-4">{children}</div>;
};

function App() {

  return (
      <div className="h-full min-h-screen bg-black text-white flex flex-col items-center p-6">
          {/* Hero Section */}
          <header className="w-full max-w-4xl text-center py-12">
              <h1 className="text-5xl font-bold">Kreisais Krasts</h1>
              <p className="mt-4 text-gray-400">„Kreisais Krasts” (KK) ir viena no lielākajām un visilgāk pastāvošajām LVHH apvienībām.</p>
          </header>

          {/* Music & Videos */}
          <section className="w-full max-w-4xl text-center my-8">
              <h2 className="text-3xl font-semibold mb-6">Listen & Watch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                      <CardContent>
                          <iframe className="w-full h-56" src="https://www.youtube.com/embed/ozmtNs6-6yw" title="YouTube video" allowFullScreen></iframe>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardContent>
                          <iframe className="w-full h-56"
                                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0tJwBz?utm_source=generator" allowFullScreen ></iframe>
                      </CardContent>
                  </Card>
              </div>
          </section>

          {/* Gallery */}
          <section className="w-full max-w-4xl text-center my-8">
              <h2 className="text-3xl font-semibold mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <img src="/img1.png" alt="Gallery Image" className="rounded-lg shadow-lg transition-transform transform hover:scale-130 hover:z-10" />
                  <img src="/img2.jpeg" alt="Gallery Image" className="rounded-lg shadow-lg transition-transform transform hover:scale-130 hover:z-10" />
                  <img src="/img3.jpg" alt="Gallery Image" className="rounded-lg shadow-lg transition-transform transform hover:scale-130 hover:z-10" />
              </div>
          </section>

          {/* Social Media Links */}
          <footer className="w-full max-w-4xl text-center py-12">
              <h2 className="text-3xl font-semibold mb-4">Follow Us</h2>
              <div className="flex justify-center space-x-6 text-3xl">
                  <a href="https://open.spotify.com/artist/0URf5ItfvlhjFY6xSS1pcs" target="_blank" className="text-green-500 hover:text-green-400">
                      <FaSpotify />
                  </a>
                  <a href="https://www.youtube.com/@kreisaiskrastsriga" target="_blank" className="text-red-500 hover:text-red-400">
                      <FaYoutube />
                  </a>
                  <a href="https://www.instagram.com/kreisaiskrastsriga/?hl=en" target="_blank" className="text-pink-500 hover:text-pink-400">
                      <FaInstagram />
                  </a>
              </div>
          </footer>
      </div>
  )
}

export default App
