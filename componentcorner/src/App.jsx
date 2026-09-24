import './App.css'
import ProductCard from './assets/components/ProductCard'
import Header from './assets/components/Header'
import Hero from './assets/components/Hero'
import Footer from './assets/components/Footer'
function App() {
  return (
    <div className="app">
      <Header
      name = 'ComponentCorner'
      page1= 'Home'
      page2= 'Contact'
      page3= 'About' 
      />
      <Hero
      title = 'Welcome to Component Corner'
      image = 'https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics'
      alt = 'Shop electronics banner'
      subtitle= 'Discover amazing products built with React components'
      callToAction='Shop Now'
      />
      <h1>Featured Products</h1>
      <ProductCard 
        name="Wireless Headphones" 
        price={99.99} 
        description="High-quality headphones with noise cancellation" 
        image="https://placehold.co/600x400"
      /> 
      <ProductCard 
        name="Smart Watch" 
        price={249.99} 
        description= "Fitness tracking smart watch with heart rate monitor"
        image="https://placehold.co/600x400" 
      /> 
      <ProductCard 
        name='Keyboard' 
        price={50.00} 
        description='Stylish, durable keyboard with rgb lighting' 
        image='https://placehold.co/600x400'
      /> 
      <Footer
        title = 'Component Corner'
        email = 'CompCorner@example.com'
        pNum = '(266) 766-3682'
        address = '123 React Street, Component City, RC 12345'
      />
    </div>
  );
}

export default App;