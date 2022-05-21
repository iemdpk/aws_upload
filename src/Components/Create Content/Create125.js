import React from "react";
import styled from "styled-components";
export const OnlineLearning1 = ({}) => {
  return (
    <OnlineLearningRoot>
      <Component>
      </Component>
      <FlexColumn1>
        <Element2>
          <WhiteFlexRow>
            <Text2>Articles</Text2>
          </WhiteFlexRow>
        </Element2>
        <FlexColumn2>
          <FlexRow4>
            <Text6>Create New Article</Text6>
            <Eparrowdown
              src={"https://file.rendit.io/n/KUKHx0FqamLezp7Pz0dZ.svg"}
            />
            <Text7>Research Paper</Text7>
          </FlexRow4>
          <FlexRow5>
            <Element4>
              <Text8 width={"64px"}>Subject</Text8>
              <FlexRow6>
                <Text9 width={"154px"}>Language Arts</Text9>
              </FlexRow6>
            </Element4>
            <Element5>
              <Text8 width={"50px"}>Topic</Text8>
              <FlexRow7>
                <Text9 width={"189px"}>Number Analysis</Text9>
              </FlexRow7>
            </Element5>
            <FlexRow3 gap={"8px"}>
              <Text12>Tags</Text12>
              <NavyBlueFlexRow>
                <Text9 width={"44px"}>#K12</Text9>
              </NavyBlueFlexRow>
            </FlexRow3>
          </FlexRow5>
          <FlexColumn3>
            <CadetBlueFlexColumn>
              <Paragraph height={"50px"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lacus, cras mi mauris malesuada venenatis, cras. Laoreet sed id
                diam, netus neque. Viverra tristique ultrices euismod feugiat
                quis ut. Ac gravida vitae a enim iaculis.
              </Paragraph>
              <Image6
                src={"https://file.rendit.io/n/oTKDuVpL5rRfwK7JkRn8.svg"}
              />
            </CadetBlueFlexColumn>
            <Image7 src={"https://file.rendit.io/n/9GY0XTOh4zLileU0jZDO.svg"} />
            <CadetBlueFlexColumn1>
              <Paragraph height={"212px"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum arcu lectus vulputate amet, in. Id senectus a tellus
                posuere mauris, sed sed ullamcorper. Convallis vitae, mattis
                sapien, pharetra eleifend convallis eget vestibulum blandit.
                Donec fames lorem scelerisque ut duis dignissim. Ut sapien
                platea non massa pretium, adipiscing ultrices. Nisl vel non urna
                eros lectus enim. Facilisis aliquet id non amet. Et luctus
                pulvinar eleifend gravida. Gravida risus tincidunt tellus,
                viverra nunc pharetra, lobortis.
                <br />
                Pellentesque ultrices nascetur pellentesque sagittis feugiat
                facilisis eget varius. Mattis hendrerit suspendisse est elit
                amet consectetur felis. Vulputate massa aenean egestas dignissim
                iaculis fermentum. Mauris varius id id nibh non, et ligula
                pellentesque cursus. Tristique pretium consequat porttitor quis
                rhoncus maecenas quam et euismod. Semper pellentesque ipsum
                tortor hendrerit malesuada sit tristique. Risus, faucibus ipsum,
                ullamcorper pellentesque feugiat sagittis ipsum. Mauris sem
                ullamcorper vitae auctor felis. Duis tincidunt vitae eros, est
                sed ut donec eget suspendisse.
                <br />
                <br />
                Praesent tellus platea mauris curabitur arcu. Adipiscing ut
                ornare egestas nisi, id volutpat ut nec. Sociis elit mattis
                integer nec lectus semper donec. Quis magna malesuada neque at
                tristique ut aliquet.{" "}
              </Paragraph>
              <Image6
                src={"https://file.rendit.io/n/oTKDuVpL5rRfwK7JkRn8.svg"}
              />
            </CadetBlueFlexColumn1>
            <Image7 src={"https://file.rendit.io/n/9GY0XTOh4zLileU0jZDO.svg"} />
            <NavyBlueText>Publish</NavyBlueText>
          </FlexColumn3>
        </FlexColumn2>
      </FlexColumn1>
    </OnlineLearningRoot>
  );
};
const OnlineLearningRoot = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: auto;
  min-width: 1440px;
  align-items: center;
`;
const Component = styled.div`
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WhiteFlexColumn = styled.div`
  height: 944px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 12px 48px 12px;
`;
const LogoAsset = styled.img`
  width: 56px;
  height: 56px;
  margin: 0px 0px 72px 0px;
`;
const Image1 = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 48px 0px;
`;
const CornflowerFlexRow = styled.div`
  width: 64px;
  background-color: #89d4ff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 12px 0px;
  margin: 0px 0px 48px 0px;
`;
const Image4 = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 100px 0px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 60px 0px;
`;
const Image5 = styled.img`
  width: 60px;
  height: 54px;
`;
const FlexRow = styled.div`
  width: 48px;
  height: 4px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 16px 24px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Getapp = styled.img`
  width: 16px;
  height: 16px;
`;
const Text1 = styled.div`
  text-align: center;
  width: 64px;
  height: 16px;
  display: flex;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  color: #14a9ff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FlexColumn1 = styled.div`
  width: 1294px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 28px;
  flex-grow: 1;
  align-items: flex-end;
`;
const Element2 = styled.div`
  align-self: stretch;
  height: 196px;
  position: relative;
  min-width: 1294px;
`;
const WhiteFlexRow = styled.div`
  backdrop-filter: blur(8px);
  width: 798px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 144px 48px 4px 48px;
`;
const Text2 = styled.div`
  width: 254px;
  height: 48px;
  display: flex;
  font-size: 32px;
  font-family: Open Sans;
  font-weight: 400;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const FlexRow2 = styled.div`
  width: 600px;
  height: 48px;
  display: flex;
  position: absolute;
  top: 36px;
  left: 694px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Element3 = styled.div`
  width: 317px;
  height: 46px;
  background-image: url("https://file.rendit.io/n/wmtBpnF5BgFTuLG36pTI.svg");
  background-size: cover;
  position: relative;
  margin: 0px 22px 0px 0px;
`;
const Text3 = styled.div`
  width: 90px;
  height: 43px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 400;
  color: #161616;
  position: absolute;
  top: 2px;
  left: 213px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Text4 = styled.div`
  width: 219px;
  height: 43px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: #161616;
  position: absolute;
  top: 2px;
  left: 16px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const UnsplashWFsNyI = styled.img`
  width: 36px;
  height: 36px;
`;
const Text5 = styled.div`
  width: 112px;
  height: 24px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const FlexColumn2 = styled.div`
  height: 752px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 22px 0px 0px;
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 42px 0px;
`;
const Text6 = styled.div`
  width: 208px;
  height: 32px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.8);
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 12px 0px 0px;
`;
const Eparrowdown = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 8px 0px 0px;
`;
const Text7 = styled.div`
  width: 200px;
  height: 32px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.8);
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const FlexRow5 = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  gap: 36px;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 32px 0px;
`;
const Element4 = styled.div`
  width: 257px;
  height: 40px;
  position: relative;
`;
const FlexRow6 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  width: 184px;
  display: flex;
  position: absolute;
  top: -1px;
  left: 70px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 3px 0px;
`;
const Element5 = styled.div`
  width: 279px;
  height: 40px;
  position: relative;
`;
const FlexRow7 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  width: 219px;
  display: flex;
  position: absolute;
  top: -1px;
  left: 57px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 3px 0px;
`;
const Text12 = styled.div`
  width: 44px;
  height: 32px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  align-self: flex-end;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 0px 3px 0px;
`;
const NavyBlueFlexRow = styled.div`
  width: 76px;
  background-color: rgba(20, 169, 255, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 4px 0px;
`;
const FlexColumn3 = styled.div`
  height: 606px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const CadetBlueFlexColumn = styled.div`
  height: 120px;
  background-color: rgba(170, 170, 170, 0.05);
  display: flex;
  align-self: center;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0px 16px;
  margin: 0px 0px 16px 0px;
`;
const CadetBlueFlexColumn1 = styled.div`
  height: 286px;
  background-color: rgba(170, 170, 170, 0.05);
  display: flex;
  align-self: center;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0px 16px;
  margin: 0px 0px 16px 0px;
`;
const NavyBlueText = styled.div`
  text-align: center;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 700;
  text-transform: capitalize;
  color: #ffffff;
  width: 200px;
  height: 27px;
  background-color: #14a9ff;
  flex-direction: row;
  justify-content: center;
  border-radius: 16px;
  padding: 16px 0px 13px 0px;
`;
const Fluenthomeregular = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 60px 0px;
`;
const Ioncreate = styled.img`
  width: 24px;
  height: 24px;
`;
const Search = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 24px 0px 0px;
`;
const FlexRow3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Text8 = styled.div`
  height: 32px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  position: absolute;
  top: 4px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: ${(props) => props.width};
`;
const Text9 = styled.div`
  text-align: center;
  height: 32px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  color: #14a9ff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
`;
const Paragraph = styled.div`
  width: 1192px;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  height: ${(props) => props.height};
`;
const Image6 = styled.img`
  width: 408px;
  height: 24px;
  align-self: flex-start;
`;
const Image7 = styled.img`
  width: 120px;
  height: 24px;
  margin: 0px 0px 32px 0px;
`;
