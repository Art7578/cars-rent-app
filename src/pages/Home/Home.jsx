import { 
  Title, 
  Container, 
  SectionOneContainer, 
  SectionOneImage, 
  SectionOneDescription, 
  SectionOneTitle, 
  SectionOneText,
  SectionTwoContainer,
  SectionTwoDescription,
  SectionTwoImage,
  SectionTwoImagesContainer,
  SectionTwoText,
  SectionTwoTitle
} from "./Home.styled";
import Slider from "components/InfiniteSlider/InfiniteSlider";

const Home = () => {
  return (
    <Container>
      <Title>Explore Your World with Our Rental Cars</Title>
      <SectionOneContainer>
        <SectionOneText>
          <SectionOneTitle>Maserati <span>GranTurismo</span></SectionOneTitle>
          <SectionOneDescription>
            Welcome to our car rental app! We offer you a unique opportunity to explore the world 
            at your own pace. Whether you need a car for a business trip or an adventurous vacation, 
            we are here to make your journey easy and convenient.
          </SectionOneDescription>
        </SectionOneText>
        <SectionOneImage/>
    </SectionOneContainer>

    <SectionTwoContainer>
        <SectionTwoText>
          <SectionTwoTitle>Go On</SectionTwoTitle>
          <SectionTwoDescription>
            Our vehicles are always in excellent condition and our wide selection of models allows you 
            to find the perfect solution for your needs. We pride ourselves on the simplicity and convenience of our app, 
            which allows you to book a car in just a few clicks.
          </SectionTwoDescription>
        </SectionTwoText>
        <SectionTwoImagesContainer>
          <SectionTwoImage src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600"/>
          <SectionTwoImage src="https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=600"/>
          <SectionTwoImage src="https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=600"/>
          <SectionTwoImage src="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </SectionTwoImagesContainer>
    </SectionTwoContainer>
    <Slider images={[
      require('../../images/img/pexels-mike-bird-244206.jpg'),
      require('../../images/img/pexels-taras-makarenko-593172.jpg'),
      require('../../images/img/pexels-pixabay-164634.jpg'),
      require('../../images/img/pexels-neil-kelly-712618.jpg'),
      require('../../images/img/pexels-lukas-žvikas-1075947.jpg'),
      require('../../images/img/pexels-riccardo-228094.jpg'),
      require('../../images/img/pexels-rangga-aditya-armien-235298.jpg')
    ]}/>
    </Container>
  );
};

export default Home;
