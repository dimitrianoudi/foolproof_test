import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./components/shared/header";
import Hero from "./components/hero";
import Section from "./layout/section";
import Wrapper from "./layout/wrapper";
import LaunchCard from "./components/lauch-card";

const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;

  .grid {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ContentSelector = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  button {
    border: none;
    padding: 10px;
    min-width: 100px;
    margin-right: 10px;
  }
`;

const Grid = styled.div`
  display: flex; 
  direction row;
  min-height: 200px;
`;


const Col = styled.div`
  display: flex; 
  width: 33%;
`;

const Pagination = styled.div`
  text-align: center;
  button {
    border: none;
    margin-right: 20px;
    padding: 10px;
    min-width: 100px;
  }
`;

function App() {
  const [data, setData] = useState({ launches: [] });
  const [loading, setLoading] = useState(true);
  const [launches, setLaunches] = useState([]);
  const [limit, setLimit] = useState(15);
  const [skip, setSkip] = useState(0);  

  const nextPage = () => {
    setSkip(skip + limit)
  }
  const previousPage = () => {
    setSkip(skip - limit)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios( {
        method: 'post',
        url: 'https://api.spacexdata.com/v4/launches/query',
        data: {
          options: {
            limit: limit,
            offset: skip,
          } 
        }
    });

      console.log(result.data);

      setData({ launches: result.data.docs });
      setLoading(false);
    };
    fetchData();
  }, [skip]);

  return (
    <MainWrapper>
      <Header />
      <Section>
        <Hero />
      </Section>
      <Section>
        <ContentSelector>
          <button>launches</button>
          <button>rockets</button>
        </ContentSelector>
      </Section>
      <Section>
        {loading && <div>loading....</div>}

        {!loading && (
          <Grid>
            <Wrapper>
              <div className="grid">
                {data.launches.map((item, index) => (
                    <Col>
                      <LaunchCard
                        key={index.toString()}
                        image={item.links.patch.small}
                        title={item.name}
                        description={item.details}
                      />
                    </Col>
                ))}
              </div>
              <Pagination>
                <button onClick={ previousPage }> Previous Page </button>
                <button onClick={ nextPage}> Next Page </button> 
              </Pagination>
            </Wrapper>
          </Grid>
        )}
      </Section>
    </MainWrapper>
  );




}

export default App;
