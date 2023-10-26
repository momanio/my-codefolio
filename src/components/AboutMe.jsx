import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectData } from '../pages/homeSlice';
import { Element } from 'react-scroll';
// Data
import { EduInfo, UniversityInfo, moreInfo } from '../data';
// Components
import { Col, Container, Row } from 'react-bootstrap';
import { Title } from './globalStyledComponents';
import UniLogo from '../images/LOGO_JUST.png';

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function AboutMe() {
  const { avatar_url, bio } = useSelector(selectData);

  return (
    <Element name={'About'} id='about'>
      <StyledAboutMe className='section'>
        <Container>
          <Container className='d-flex'>
            <Title>
              <h2>About Me</h2>
              <div className='underline'></div>
            </Title>
          </Container>
          <Row className='align-items-center mt-5'>
            <Col className='d-flex flex-column text-center'>
              <Container>
                <p>{bio}</p>
                {moreInfo && <p>{moreInfo}</p>}
              </Container>
            </Col>
            <Col className='d-none d-md-block text-center'>
              <img
                src={avatar_url}
                alt='GitHub Avatar'
                loading='lazy'
                className='mx-auto rounded-circle'
                style={{ width: '15rem', height: '15rem' }}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Container className='d-flex'>
            <Title>
              <h2>Education</h2>
              <div className='underline'></div>
            </Title>
          </Container>
          <Row className='align-items-center mt-5'>
            <Col className='d-flex flex-column text-center'>
              <Container>
                {EduInfo && <p>{EduInfo}</p>}
                {UniversityInfo && <p>{UniversityInfo}</p>}
                <p>Graduation Year: 2019</p>
              </Container>
            </Col>
            <Col className='d-none d-md-block text-center'>
              <img
                src={UniLogo}
                alt='JUST Logo'
                loading='lazy'
                className='mx-auto rounded-circle'
                style={{ width: '15rem', height: '15rem' }}
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
