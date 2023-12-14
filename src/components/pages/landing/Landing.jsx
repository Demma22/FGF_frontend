import { useState } from 'react';
import { Header } from '../../Header';
import { Header2 } from '../../Header2';
import { Container } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
// import { Carousel } from '@mantine/carousel';
//import '@mantine/carousel/styles.css';
import "./Landing.css"
import { Layout } from '../../Layout';
import Footer from '../../Footer/Footer';
// import performSlideAnimation from './landing';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const natureImages = [
    'imgs/kobs.jpeg',
    'imgs/cork.jpeg',
    'imgs/dance.jpeg',
    'imgs/cow.jpeg',
    'imgs/leopard.jpeg',
    'imgs/aloevera.jpeg',
    'imgs/rhino.jpeg',
    'imgs/tomato.jpeg',
    
    // Add more image URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px', // Adjust spacing between images
    
    beforeChange: (current, next) => setCurrentSlide(next),
  };


  return (
    <div>
      <Header2 />
      <Container fluid className='container container-fluid flex' id='landing_text'>
      
          {/* Hero Section */}
          <section className="text-white py-20 ml-0 mr-0 sm:ml-9 sm:mr-9 mt-5" id='top_bar'>
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4"> The FGF Platform </h1>
            <p className="text-lg leading-relaxed">
              "A rich tapestry of animals, plants, and cultures. Our mission is to combat the loss of cultural knowledge and to foster a deeper connection with the world around us.
              On this platform, you'll discover a wealth of information about a wide array of subjects, complete with captivating images that bring these topics to life. Whether you're here to learn or conduct research, our comprehensive resources are accessible to all users.
              We're united in our commitment to safeguarding our natural surroundings for the benefit of future generations. Together, we can ensure that the beauty and diversity of our world endure for years to come."
            </p>
          </div>
        </section>  
      </Container>

      <Container className='container' container-fluid='true' id='landing_text'>  
          {/* Cards Section */}
          <section className="py-5 card-container">
            <div className="container mx-auto flex flex-wrap justify-center lg:space-x-10">
              {/* Card 1 - Animals */}
              <div className="bg-white rounded-lg shadow-lg p-1 w-full md:w-1/2 lg:w-1/4 mb-4">
                <img
                  src="imgs/kobs.jpeg"  // Replace with the actual image URL
                  alt="Animals"
                  className="w-full object-cover rounded-t-lg mb-4 card-image"
                />
                <h2 className="text-2xl font-semibold mb-2">Animals</h2>
                <p className="text-gray-700">Discover fascinating facts about animals found in Uganda.</p>
                <a href="ListAnimal" className="text-blue-400 hover:underline"> See More.... </a>
              </div>

              {/* Card 2 - Plants */}
              <div className="bg-white rounded-lg shadow-lg p-1 w-full md:w-1/2 lg:w-1/4 mb-4">
                <img
                  src="imgs/aloevera.jpeg" 
                  alt="Plants"
                  className="w-full object-cover rounded-t-lg mb-4 card-image"
                />
                <h2 className="text-2xl font-semibold mb-2">Plants</h2>
                <p className="text-gray-700">Explore the beauty and diversity of plant life on our planet.</p>
                <a href="ListPlant" className="text-blue-400 hover:underline"> See More.... </a>
              </div>

              {/* Card 3 - Culture */}
              <div className="bg-white rounded-lg shadow-lg p-1 w-full md:w-1/2 lg:w-1/4 mb-4">
                <img
                  src="imgs/dance.jpeg" 
                  alt="Culture"
                  className="w-full object-cover rounded-t-lg mb-4 card-image"
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
          <p className="text-gray-600 mb-10" id = 'crt'>
            Unlock a world of exclusive features and captivating content by signing up for an account. With your own account, 
            you can log in at any time to embark on research journeys, expand your knowledge, and immerse yourself in the rich tapestry of information about our environment, culture, and the steps we can take to ensure a brighter future for generations to come. If you share our mission of nurturing our culture and surroundings, we invite you to{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>{' '}
            and join us in our collective efforts.
          </p>
        </div>

        <section className="text-white py-20 ml-0 mr-0 sm:ml-9 sm:mr-9 mt-5" id='top_bar'>
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-semibold mb-4">Contribute Information</h1>
            <p className="text-lg leading-relaxed">
              
            Share your knowledge and contribute to our community's growth. We appreciate your contribution 
            of vital information, 
            and with a registered account, you can always contribute to this platform's purpose. 
            You can also provide more insights or corrections to already existing information. 
            Contribution in any language is welcome. Information provided will be published and 
            accessible to all users.{' '}
            </p>
 
          </div>
        </section>
        <div>

        </div>
        <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          
        <section className="container mx-auto p-0">
          <Slider {...settings}>
            {natureImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Nature ${index + 1}`}
                  className="w-full h-auto rounded-lg mx-auto sm:w-2/3 lg:w-full"
                  style={{ width: '95%', objectFit: 'cover'  }} 
                />
              </div>
            ))}
          </Slider>
         </section>

              <div className="text-center mt-4">
                <h2 className="text-2xl font-semibold mb-4">Ready to Dive In?</h2>
                <p className="text-gray-700 mb-4">
                  Create an account and start sharing your knowledge!
                </p>
                <div className="flex flex-col justify-center items-center sm:flex-row">
                <a href="Register" className="mb-2 sm:mr-4 sm:mb-0">
                  <button className="hover:bg-green-100 text-white justify-center font-bold py-1 px-4 rounded mr-4 w-60" id='reg'
                  >
                    Create Account
                  </button>
                </a>
                  <a href="Login" className="text-blue-400">
                    <button className="hover:bg-green-100 text-white justify-center  font-bold py-1 px-4 rounded mr-4 w-60" id='reg'>
                    Login
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gray-white py-10">
            </section>
      </Container>
     
      
      <Footer />
    </div>
  );
}
export default Landing
