import React from "react";
import styled from "styled-components";
import { device } from "../../helpers";
import Image from "../image";
import Lockup from "../lockup";

const LaunchCardWrapper = styled.div`
  display: block;
  margin-bottom: 30px;
  margin-left: 20px;
  width: 100%;
`;

const LaunchCardContainer = styled.div`
  padding: 10px;
  max-width: 600px;
  margin: 10px auto;
`;

const ImagContainer = styled.div`
  padding: 40px 20px;
  background-color: #b3c7cc;
  position: relative;
  margin-top: auto;

  img {
    height: 100px;
    width: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  padding: 20px;
  background-color: #f6f7f7;
  flex: 1;
  padding-bottom: 0px;
  min-height: 100px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  &:hover {
    overflow: visible;
  }
`;

function LaunchCard(props) {
  return (
    <LaunchCardWrapper>
      <LaunchCardContainer>
        <Content>
          <Lockup text={props.description} tag="h3" title={props.title} />
        </Content>
        <ImagContainer>
          <Image url={props.image} />
        </ImagContainer>
        {/* Youtube Link ? */}
      </LaunchCardContainer>
    </LaunchCardWrapper>
  );
}

export default LaunchCard;
