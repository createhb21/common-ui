import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import Skeleton from './Skeleton';
import Profile from '../../assets/thumbnail.png';

const Base = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
  padding: 50px;
  box-sizing: border-box;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  border-radius: 4px;
  box-sizing: border-box;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  box-sizing: border-box;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-sizing: border-box;
`;
const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;
const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;
const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
  word-break: break-all;
`;

const Placeholder: React.FC = () => (
  // <Item /> 에 대응하는 Placeholder 제작
  <Container>
    <ImageWrapper>
      <Skeleton width={320} height={220} />
    </ImageWrapper>
    <Info>
      <Skeleton width={150} height={29} rounded />
      <div style={{ height: '8px' }} />
      <Skeleton width={200} height={19} rounded />
    </Info>
  </Container>
);

const Item: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={Profile} />
      </ImageWrapper>
      <Info>
        <Title>Me taking a snapshot</Title>
        <Description>Hello world, It's good-day</Description>
      </Info>
    </Container>
  );
};

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // 임의로 로딩 상태 표현
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Base>
      {loading
        ? Array.from({ length: 25 }).map((_, idx) => <Placeholder key={idx} />)
        : Array.from({ length: 25 }).map((_, idx) => <Item key={idx} />)}
    </Base>
  );
}

export default App;
