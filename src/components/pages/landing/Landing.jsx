import { useState, useRef } from 'react';
import { Header } from '../../Header';
import { Header2 } from '../../Header2';
import { Container } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
// import { Carousel } from '@mantine/carousel';
//import '@mantine/carousel/styles.css';
import "./Landing.css"

function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const natureImages = [
    'imgs/Rhinos.jpg', 
    'imgs/forest.jpg',
    'imgs/Buganda-dance.jpg',
    // Add more image URLs as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % natureImages.length);
  };

  const previousSlide = () => {
    setCurrentSlide((currentSlide - 1 + natureImages.length) % natureImages.length);
  };

  //const autoplay = useRef(Autoplay({ delay: 2000}))

  return (
    <div>
      <Header2>
        
      </Header2>
      <Container className='container' container-fluid='true' id='landing_text'>
          {/* Hero Section */}
        <section className="bg-green-900 text-white py-20 ml-9 mr-9 mt-5">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Future Generations Encyclopedia</h1>
            <p className="text-lg leading-relaxed">
              "This platform is dedicated to raising awareness about our environment, which includes the rich tapestry of animals, plants, and cultures. Our mission is to combat the loss of cultural knowledge and to foster a deeper connection with the world around us.
              On this platform, you'll discover a wealth of information about a wide array of subjects, complete with captivating images that bring these topics to life. Whether you're here to learn or conduct research, our comprehensive resources are accessible to all users.
              We're united in our commitment to safeguarding our natural surroundings for the benefit of future generations. Together, we can ensure that the beauty and diversity of our world endure for years to come."
            </p>
            <div className="mt-8">
              <a href="/Login" className="text-xl font-semibold border-b-2 border-white hover:border-green-400">
                Explore Now
              </a>
            </div>
          </div>
        </section>


          {/* Cards Section */}
          <section className="py-10">
            <div className="container mx-auto flex flex-wrap justify-center space-x-10">
              {/* Card 1 - Animals */}
              <div className="bg-white rounded-lg shadow-lg p-3 w-full md:w-1/2 lg:w-1/4 mb-4">
                <img
                  src="imgs/Rhinos.jpg"  // Replace with the actual image URL
                  alt="Animals"
                  className="w-full  object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">Animals</h2>
                <p className="text-gray-700">Discover fascinating facts about animals from around the globe.</p>
                <a href="ListAnimal" className="text-blue-400 hover:underline"> See More.... </a>
              </div>

              {/* Card 2 - Plants */}
              <div className="bg-white rounded-lg shadow-lg p-3 w-full md:w-1/2 lg:w-1/4 mb-4">
                <img
                  src="imgs/Tree.jpg" 
                  alt="Plants"
                  className="w-full object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">Plants</h2>
                <p className="text-gray-700">Explore the beauty and diversity of plant life on our planet.</p>
                <a href="ListPlant" className="text-blue-400 hover:underline"> See More.... </a>
              </div>

              {/* Card 3 - Culture */}
              <div className="bg-white rounded-lg shadow-lg p-3 w-full md:w-1/2 lg:w-1/4 mb-4">
                <img
                  src="imgs/Buganda-dance.jpg" 
                  alt="Culture"
                  className="w-full object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">Culture</h2>
                <p className="text-gray-700">Learn about different cultures and traditions from around the world.</p>
                <a href="ListCulture" className="text-blue-400 hover:underline"> See More.... </a>
              </div>
            </div>
          </section>

          <div className='description ml-10 mr-10 mb-10'>
          
          {/* Create an Account */}
          <div className="flex items-center space-x-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <p className="text-xl font-semibold">Create an Account</p>
          </div>
          <p className="text-gray-600 mb-20">
            Unlock a world of exclusive features and captivating content by signing up for an account. With your own account, you can log in at any time to embark on research journeys, expand your knowledge, and immerse yourself in the rich tapestry of information about our environment, culture, and the steps we can take to ensure a brighter future for generations to come. If you share our mission of nurturing our culture and surroundings, we invite you to{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>{' '}
            and join us in our collective efforts.
          </p>

          {/* Search Item */}
          <div className="flex items-center space-x-2 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-8.293a1 1 0 111.414-1.414L12 10.586l1.293-1.293a1 1 0 111.414 1.414L13.414 12l1.293 1.293a1 1 0 01-1.414 1.414L12 13.414l-1.293 1.293a1 1 0 01-1.414-1.414L10.586 12 9.293 10.707a1 1 0 01-.293-1.414z"
              />
            </svg>
            <p className="text-xl font-semibold">Search Item</p>
          </div>
          <p className="text-gray-600 mb-20">
            With our platform, you can search for your preferred items in a language that feels like second nature to you. Dive into a world of exploration, whether it's unraveling the mysteries of nature, delving deep into cultural treasures, or satisfying your curiosity on a wide range of subjects. You can query/search items you need{' '}
            <a href="/search" className="text-blue-500 hover:underline">
              here
            </a>{' '}
            to be able to read all about them.
          </p>

          {/* Provide Information (Contribute) */}
          <div className="flex items-center space-x-2 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m0 0l-6-6m6 6l-6-6"
              />
            </svg>
            <p className="text-xl font-semibold">Provide Information (Contribute)</p>
          </div>
          <p className="text-gray-600 mb-20">
            Share your knowledge and contribute to our community's growth. We appreciate your contribution of vital information, and with a registered account, you can always contribute to this platform's purpose. You can also provide more insights or corrections to already existing information. Contribution in any language is welcome. Information provided will be published and accessible to all users.{' '}
            <a href="/contribute" className="text-blue-500 hover:underline">
              Contribute here
            </a>.
          </p>

        </div>
        {/* Slider Section */}
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto">
              <div className="relative">
                <img
                  src={natureImages[currentSlide]}
                  alt="Nature"
                  className="w-2/3 h-auto rounded-lg shadow-lg mx-auto"
                />
                <div className="absolute top-0 left-0 w-full flex justify-between items-center">
                  <button
                    className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l-lg"
                    onClick={previousSlide}
                  >
                    &lt;
                  </button>
                  <button
                    className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-r-lg"
                    onClick={nextSlide}
                  >
                    &gt;
                  </button>
                </div>
              </div>

              {/* <Carousel
                withIndicators
                height={200}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
              >
                <Carousel.Slide>1</Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide>
                <Carousel.Slide>3</Carousel.Slide>
                
              </Carousel> */}


              <div className="text-center mt-4">
                <h2 className="text-2xl font-semibold mb-4">Ready to Dive In?</h2>
                <p className="text-gray-700 mb-4">
                  Create an account and start sharing your knowledge!
                </p>
                <div className="flex justify-center">
                <a href="Register" className="text-blue-400 hover:underline"><button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mr-4">
                    Create Account
                  </button></a>
                  <a href="Login" className="text-blue-400 hover:underline"><button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
                    Login
                  </button></a>
                </div>
              </div>
            </div>
          </section>
      </Container>
    
    </div>
  );
}
export default Landing
