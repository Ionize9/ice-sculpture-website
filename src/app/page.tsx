import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {

  return (
    <div className="min-h-screen bg-white blue-streaks-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              <span className="font-bold">Sculpture</span>
              <span className="font-normal mx-2">in</span>
              <span className="font-bold">Ice</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Home</a>
              <a href="#about" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="#services" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Services</a>
              <a href="#gallery" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Gallery</a>
              <a href="#faq" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">FAQ</a>
              <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Bringing frozen<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                crystal experiences
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The highest quality ice sculptures in the Massachusetts and Connecticut area.
              Over 40 years of expertise in creating stunning custom ice art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Get a Quote
              </a>
              <a href="#gallery" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-gray-400 transition-colors">
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes It Special</h2>
            <p className="text-xl text-gray-600">Experience, artistry, and exceptional service</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">Each sculpture is hand-carved from crystal-clear ice blocks, transforming frozen water into memorable centerpieces that bring elegance to your celebration.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable</h3>
              <p className="text-gray-600">Beautiful ice art at fair prices. We believe everyone should be able to add something special to their celebration without overspending.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom</h3>
              <p className="text-gray-600">Every sculpture is made to order. Whether it&apos;s a company logo, wedding centerpiece, or unique design, we bring your vision to life in ice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Joe Almeida</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 40 years of experience and extensive culinary training, Joe Almeida brings
                unmatched expertise to every ice sculpture creation. From corporate events to intimate
                weddings, each piece is crafted with precision and artistic vision.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We serve diverse clients including catering halls, party planners, and event coordinators
                throughout Massachusetts and Connecticut, creating both detailed and abstract ice art
                that transforms any occasion.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Corporate and wedding ice sculptures</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Custom logos and portraits</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Functional ice art (bars, vases, bowls, luges)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">On-site demonstrations</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                <Image
                  src="/images/joe-demonstration.jpg"
                  alt="Joe Almeida demonstrating ice sculpture creation with carousel horse"
                  width={600}
                  height={400}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Watch the Process</h2>
            <p className="text-xl text-gray-600">Creating beautiful ice art, one chisel at a time</p>
          </div>
          <div className="relative w-full" style={{paddingBottom: '56.25%', height: 0}}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/Sl6XJM6etqY"
              title="Joe Almeida Ice Sculpture Demonstration"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-xl text-gray-600">A sampling of varied ice sculpture creations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="aspect-square rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
              <Image
                src="/images/td-bank-joe.jpg"
                alt="TD Bank corporate logo ice sculpture display"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
              <Image
                src="/images/interlocked-hearts-joe.jpg"
                alt="Interlocked hearts ice sculpture for romantic celebrations"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
              <Image
                src="/images/eagle.jpg"
                alt="Powerful eagle ice sculpture displaying wildlife artistry"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
              <Image
                src="/images/illuminated-bar-joe.jpg"
                alt="Illuminated ice bar with LED lighting and branding"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
              <Image
                src="/images/winter-joe.jpg"
                alt="Joe Almeida with winter snowman ice sculpture"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
              <Image
                src="/images/gingerbread-joe.jpg"
                alt="Festive gingerbread man ice sculpture for holiday celebrations"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
              <Image
                src="/images/swan-on-heart.jpg"
                alt="Elegant swan on heart ice sculpture for romantic weddings"
                width={300}
                height={300}
                className="w-full h-full object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
              <Image
                src="/images/wedding-cake-joe.jpg"
                alt="Elegant multi-tier wedding cake ice sculpture with roses"
                width={300}
                height={300}
                className="w-full h-full object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about ice sculptures</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does an ice sculpture last?</h3>
                <p className="text-gray-600">An ice sculpture typically lasts 4-6 hours indoors at room temperature, melting approximately one inch per hour. For outdoor events, duration depends on weather conditions.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What sizes are available?</h3>
                <p className="text-gray-600">We offer sculptures in various sizes: Small (12-17&quot;) for table centerpieces, Medium (20-30&quot;) for buffet displays, Large (36-60&quot;) as event focal points, and Giant (6-30 feet) for major promotional events.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How much advance notice do you need?</h3>
                <p className="text-gray-600">We recommend ordering as early as possible, especially during peak wedding and holiday seasons. Creation time typically ranges from 3-12 hours depending on design complexity.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What do I need to provide?</h3>
                <p className="text-gray-600">You&apos;ll need to provide a sturdy table for display, a bucket to catch melting water, and an extension cord if you want lighting effects for your sculpture.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What can be sculpted out of ice?</h3>
                <p className="text-gray-600">Almost anything can be sculpted from ice! We create logos, portraits, decorative pieces, functional items like ice bars and luges, and artistic designs. The main considerations are delivery logistics and structural support.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How much do ice sculptures weigh?</h3>
                <p className="text-gray-600">A single-block ice sculpture typically weighs between 150-250 pounds, depending on the design. We handle all delivery and setup to ensure safe placement at your venue.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <a href="#contact" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
              Contact us for details
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-gray-300">Tell me about your event and vision</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-lg">413-433-0366</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-lg">Massachusetts & Connecticut</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Services Include:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Wedding ice sculptures</li>
                  <li>• Corporate event displays</li>
                  <li>• Custom logo reproductions</li>
                  <li>• Functional ice bars and serving pieces</li>
                  <li>• Live carving demonstrations</li>
                  <li>• Portrait and artistic sculptures</li>
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400 mb-4 md:mb-0">
              <span className="font-bold">Sculpture</span>
              <span className="font-normal mx-1">in</span>
              <span className="font-bold">Ice</span>
            </div>
            <div className="flex space-x-6">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a>
              <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
            <p>&copy; 2024 Sculpture in Ice. All rights reserved. | Joe Almeida - Master Ice Sculptor</p>
          </div>
        </div>
      </footer>
    </div>
  );
}