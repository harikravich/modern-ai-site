import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faRobot, faGlobe, faLightbulb, faPuzzlePiece, faChartLine } from '@fortawesome/free-solid-svg-icons';
import logoImage from './assets/unifycx-logo.webp';

const images = [
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
];

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    background-color: #FFFFFF;
    color: #333333;
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 2%;
  }
`;

const Logo = styled.img`
  height: 2.5rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.875rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  &:hover {
    color: #0056b3;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HeroSection = styled.section`
  display: flex;
  min-height: 100vh;
  align-items: center;
  padding: 6.25rem 5% 3.125rem;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: background-image 1s ease-in-out;
  @media (max-width: 768px) {
    padding: 5rem 5% 2rem;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
  }
`;

const HeroContent = styled.div`
  max-width: 37.5rem;
  position: relative;
  z-index: 1;
  color: #FFFFFF;
  animation: ${fadeIn} 1s ease-in-out;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.875rem;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: #0056b3;
  color: #FFFFFF;
  padding: 0.75rem 1.5rem;
  border-radius: 0.3125rem;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #003d82;
  }
`;

const Section = styled.section`
  padding: 6.25rem 5%;
  background-color: ${props => props.backgroundColor || '#f8f9fa'};
  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.625rem;
  text-align: center;
  margin-bottom: 3.75rem;
  color: #2c3e50;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 75rem;
  margin: 0 auto;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: #ffffff;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 0.9375rem 1.875rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  &:hover {
    transform: translateY(-0.625rem);
    box-shadow: 0 1.25rem 2.5rem rgba(0, 0, 0, 0.2);
  }
`;

const FeatureIcon = styled.div`
  font-size: 4rem;
  color: #3498db;
  margin-bottom: 1.875rem;
  transition: transform 0.3s ease;
  ${FeatureCard}:hover & {
    transform: scale(1.1);
  }
`;

const FeatureContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 1.5rem;
`;

const FeatureLink = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  margin-top: auto;
  transition: color 0.3s ease;
  &:hover {
    color: #2980b9;
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 75rem;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background-color: #ffffff;
  border-radius: 1.25rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 0.625rem 1.25rem rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 0.625rem;
`;

const StatDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
`;

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo src={logoImage} alt="UnifyCX Logo" />
        <Nav>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
      </Header>
      <HeroSection backgroundImage={images[currentImageIndex]}>
        <HeroContent>
          <HeroTitle>Human-Powered, Tech-Enabled Customer Experience Platform</HeroTitle>
          <HeroSubtitle>UnifyCX combines an industry-leading, global support team with AI technology to increase efficiency and deliver an award-winning customer experience.</HeroSubtitle>
          <CTAButton href="#book-demo">Book a Demo</CTAButton>
        </HeroContent>
      </HeroSection>
      <Section backgroundColor="#f8f9fa">
        <SectionTitle>How we are different</SectionTitle>
        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>
              <FontAwesomeIcon icon={faUsers} />
            </FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Agents at the Core</FeatureTitle>
              <FeatureDescription>Our AI is designed to empower agents, making their work easier, more engaging, and more impactful, leading to superior customer experiences.</FeatureDescription>
              <FeatureLink href="#">Learn more</FeatureLink>
            </FeatureContent>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FontAwesomeIcon icon={faRobot} />
            </FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Integrated AI and Human Expertise</FeatureTitle>
              <FeatureDescription>UnifyCX offers a true blend of AI and human expertise. We deliver a complete solution that combines advanced AI with top-tier CX delivery for real-world results.</FeatureDescription>
              <FeatureLink href="#">Learn more</FeatureLink>
            </FeatureContent>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FontAwesomeIcon icon={faGlobe} />
            </FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Global Impact, Local Commitment</FeatureTitle>
              <FeatureDescription>We are a global company, investing in our agents and communities worldwide, ensuring our global presence drives positive change beyond business.</FeatureDescription>
              <FeatureLink href="#">Learn more</FeatureLink>
            </FeatureContent>
          </FeatureCard>
        </FeatureGrid>
      </Section>
      <Section backgroundColor="#ffffff">
        <SectionTitle>A Platform Built to Help Agents Work Smarter and Faster</SectionTitle>
        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>
              <FontAwesomeIcon icon={faLightbulb} />
            </FeatureIcon>
            <FeatureContent>
              <FeatureTitle>AI-Powered Insights</FeatureTitle>
              <FeatureDescription>Leverage advanced AI to provide agents with real-time insights and recommendations.</FeatureDescription>
              <FeatureLink href="#">Learn more</FeatureLink>
            </FeatureContent>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FontAwesomeIcon icon={faPuzzlePiece} />
            </FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Seamless Integration</FeatureTitle>
              <FeatureDescription>Easily integrate with existing systems and workflows for a unified experience.</FeatureDescription>
              <FeatureLink href="#">Learn more</FeatureLink>
            </FeatureContent>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FontAwesomeIcon icon={faChartLine} />
            </FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Advanced Analytics</FeatureTitle>
              <FeatureDescription>Gain deep insights into customer interactions and agent performance.</FeatureDescription>
              <FeatureLink href="#">Learn more</FeatureLink>
            </FeatureContent>
          </FeatureCard>
        </FeatureGrid>
      </Section>
      <Section>
        <SectionTitle>Proven Success</SectionTitle>
        <StatGrid>
          <StatCard>
            <StatNumber>7,500+</StatNumber>
            <StatDescription>Global Employees</StatDescription>
          </StatCard>
          <StatCard>
            <StatNumber>50+</StatNumber>
            <StatDescription>Countries Served</StatDescription>
          </StatCard>
          <StatCard>
            <StatNumber>24/7</StatNumber>
            <StatDescription>Customer Support</StatDescription>
          </StatCard>
        </StatGrid>
      </Section>
    </>
  );
}

export default App;
