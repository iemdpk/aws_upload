import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Create2 = ({}) => {
  return (
    <OnlineLearningRoot>
      <Component>
      </Component>
      <FlexColumn1>
        <Element7>
          <WhiteFlexRow>
            <Text2>Create Lesson</Text2>
          </WhiteFlexRow>
        </Element7>
        <FlexRow5>
        <Link to="/createNewLesson">
          <NavyBlueText>Create New Lesson</NavyBlueText>
          </Link>
          <FlexRow6>
            <Image1 src={"https://file.rendit.io/n/VJSpTQDRw8nhBBu3U9tT.png"} />
            <Text6>Import from Google Classroom</Text6>
          </FlexRow6>
        </FlexRow5>
        <Text7>Lessons</Text7>
        <FlexRow7>
          <Element8>
            <CadetBlueFlexRow>
              <Image1
                src={"https://file.rendit.io/n/936mQ7hdtwXUlQTl8tXC.svg"}
              />
            </CadetBlueFlexRow>
            <Text8 placeholder={"Search"} />
            <Element9>
              <Text9 width={"78px"}>Grade (01)</Text9>
              <Keyboardarrowdown1
                src={"https://file.rendit.io/n/4i9GeELHjutq5BwYAb6x.svg"}
                left={"89px"}
              />
            </Element9>
          </Element8>
          <Element10 width={"136px"}>
            <Text9 width={"86px"}>Topic (02)</Text9>
            <Keyboardarrowdown1
              src={"https://file.rendit.io/n/4i9GeELHjutq5BwYAb6x.svg"}
              left={"97px"}
            />
          </Element10>
          <Element10 width={"152px"}>
            <Text11>Alignment (01)</Text11>
            <Keyboardarrowdown1
              src={"https://file.rendit.io/n/4i9GeELHjutq5BwYAb6x.svg"}
              left={"113px"}
            />
          </Element10>
          <Element10 width={"120px"}>
            <Text11>Subject (01)</Text11>
            <Keyboardarrowdown1
              src={"https://file.rendit.io/n/4i9GeELHjutq5BwYAb6x.svg"}
              left={"86px"}
            />
          </Element10>
          <FlexRow8>
            <Text13>Others Created</Text13>
            <Image1 src={"https://file.rendit.io/n/4i9GeELHjutq5BwYAb6x.svg"} />
          </FlexRow8>
          <Text1 height={"48px"}>Reset All</Text1>
        </FlexRow7>
        <Element13>
          <Element14>
            <FlexRow9>
              <Getapp
                src={"https://file.rendit.io/n/JuggKXjUtX2G4L7TzThn.svg"}
              />
              <Text15>Sort by</Text15>
            </FlexRow9>
            <Element15 />
          </Element14>
          <Element16>
            <FlexColumn2>
              <Element17>
                <NavyBlueFlexColumn1>
                  <FlexRow10>
                    <ExportTo>Export to </ExportTo>
                    <Image8
                      src={"https://file.rendit.io/n/uI7JQzUVcT6qk00snNjt.png"}
                    />
                  </FlexRow10>
                </NavyBlueFlexColumn1>
                <Image11
                  src={"https://file.rendit.io/n/o45iWleB8CjXubyp9m3B.svg"}
                />
                <CadetBlueFlexRow2 top={"0px"}>
                  <Text16>08</Text16>
                  <Text17>Maths</Text17>
                  <Text18>Algebra</Text18>
                  <Text19>James Arthur</Text19>
                  <Text25>Jan 01 2022</Text25>
                </CadetBlueFlexRow2>
              </Element17>
              <Element19>
                <NavyBlueFlexColumn1>
                  <FlexRow10>
                    <ExportTo>Export to </ExportTo>
                    <Image8
                      src={"https://file.rendit.io/n/uI7JQzUVcT6qk00snNjt.png"}
                    />
                  </FlexRow10>
                </NavyBlueFlexColumn1>
                <Image11
                  src={"https://file.rendit.io/n/o45iWleB8CjXubyp9m3B.svg"}
                />
                <CadetBlueFlexRow2 top={"0px"}>
                  <Text16>11</Text16>
                  <Text17>Maths</Text17>
                  <Text18>Algebra</Text18>
                  <Text19>Casey Cooper</Text19>
                  <Text25>Jan 01 2022</Text25>
                </CadetBlueFlexRow2>
              </Element19>
              </FlexColumn2>
        
            <Text41 left={"36px"}>Grade</Text41>
            <Text42 left={"160px"}>Subject</Text42>
            <Text41 left={"385px"}>Lesson</Text41>
            <Text42 left={"633px"}>Created By</Text42>
            <Text42 left={"850px"}>Date Added By</Text42>
            <Arrowrightalt
              src={"https://file.rendit.io/n/wT5sJhoi6S6eWgbXpQy3.svg"}
            />
          </Element16>
        </Element13>
      </FlexColumn1>
    </OnlineLearningRoot>
  );
};
const OnlineLearningRoot = styled.div`
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: flex-start;
  gap: 12px;
  align-items: center;
`;
const Component = styled.div`
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
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
const Fluentlibraryregular = styled.img`
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
const FlexColumn1 = styled.div`
  width: 1284px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
`;
const Element7 = styled.div`
  height: 80px;
  position: relative;
  min-width: 1284px;
  margin: 0px 0px 19px 0px;
`;
const WhiteFlexRow = styled.div`
  backdrop-filter: blur(8px);
  width: 822px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 36px 4px 36px;
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
  width: 563px;
  display: flex;
  position: absolute;
  top: 36px;
  left: 721px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FlexRow3 = styled.div`
  background-image: url("https://file.rendit.io/n/MBLLeTQePUbabGo55TdQ.svg");
  background-size: cover;
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: center;
  padding: 2px 14px 1px 10px;
  margin: 0px 14px 0px 0px;
`;
const Text3 = styled.div`
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
`;
const Text4 = styled.div`
  width: 90px;
  height: 43px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 400;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
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
const FlexRow5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  padding: 0px 36px;
  margin: 0px 0px 44px 0px;
`;
const NavyBlueText = styled.div`
  text-align: center;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #ffffff;
  background-color: #14a9ff;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 16px 32px;
`;
const FlexRow6 = styled.div`
  border-width: 1px;
  border-color: #14a9ff;
  border-style: solid;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 16px 32px;
`;
const Text6 = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #14a9ff;
`;
const Text7 = styled.div`
  width: 254px;
  height: 48px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 400;
  color: #161616;
  align-self: flex-start;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 0px 24px 36px;
`;
const FlexRow7 = styled.div`
  width: 1134px;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 26px 36px;
`;
const Element8 = styled.div`
  width: 403px;
  height: 56px;
  position: relative;
  flex-grow: 1;
  margin: 0px 22px 0px 0px;
`;
const CadetBlueFlexRow = styled.div`
  width: 208px;
  background-color: rgba(170, 170, 170, 0.1);
  display: flex;
  position: absolute;
  top: 4px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 12px 16px;
`;
const Text8 = styled.input`
  width: 216px;
  height: 56px;
  display: inline-block;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: #aaaaaa;
  position: absolute;
  left: 56px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0px;
  border-width: 0px;
  background: none;
  :: placeholder {
    color: #aaaaaa;
  }
  outline-width: 0px;
`;
const Element9 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.6);
  border-style: solid;
  width: 128px;
  height: 46px;
  position: absolute;
  top: 3px;
  left: 271px;
  border-radius: 8px;
`;
const FlexRow8 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.6);
  border-style: solid;
  width: 150px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 11px 0px;
  margin: 0px 5px 0px 0px;
`;
const Text13 = styled.div`
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
`;
const Element13 = styled.div`
  height: 474px;
  position: relative;
  min-width: 1284px;
`;
const Element14 = styled.div`
  width: 110px;
  height: 36px;
  position: absolute;
  left: 1150px;
`;
const FlexRow9 = styled.div`
  display: flex;
  position: absolute;
  top: 6px;
  left: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Text15 = styled.div`
  text-align: center;
  width: 70px;
  height: 24px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: #14a9ff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Element15 = styled.div`
  border-width: 1px;
  border-color: #14a9ff;
  border-style: solid;
  width: 108px;
  height: 34px;
  position: absolute;
  top: -1px;
  left: -1px;
  border-radius: 8px;
`;
const Element16 = styled.div`
  width: 1224px;
  height: 468px;
  position: absolute;
  top: 6px;
  left: 36px;
`;
const FlexColumn2 = styled.div`
  height: 194px;
  display: flex;
  position: absolute;
  top: 52px;
  flex-direction: column;
  justify-content: flex-end;
`;
const CadetBlueFlexRow1 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  box-shadow: 0px 1px 16px 0px rgba(22, 22, 22, 0.04);
  width: 1176px;
  background-color: rgba(170, 170, 170, 0.05);
  display: flex;
  position: absolute;
  top: -88px;
  left: -1px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 16px;
  padding: 12px 23px;
`;
const Text20 = styled.div`
  width: 146px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 19px 0px 0px;
`;
const Text23 = styled.div`
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  align-self: flex-end;
  margin: 0px 100px 2px 0px;
`;
const Element19 = styled.div`
  height: 66px;
  position: relative;
  min-width: 1224px;
  margin: 0px 0px 36px 0px;
`;
const FlexRow14 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 18px;
  align-items: center;
  padding: 0px 24px;
`;
const Arrowrightalt = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 982px;
`;
const Fluenthomeregular = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 60px 0px;
`;
const Image1 = styled.img`
  width: 24px;
  height: 24px;
`;
const Getapp = styled.img`
  width: 16px;
  height: 16px;
`;
const Text1 = styled.div`
  text-align: center;
  width: 64px;
  display: flex;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  color: #14a9ff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height};
`;
const CadetBlueFlexColumn = styled.div`
  height: 48px;
  background-color: rgba(170, 170, 170, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0px 12px;
  margin: 0px 16px 0px 0px;
`;
const Text9 = styled.div`
  height: 16px;
  display: flex;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
  position: absolute;
  top: 15px;
  left: 15px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: ${(props) => props.width};
`;
const Keyboardarrowdown1 = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 11px;
  left: ${(props) => props.left};
`;
const Element10 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.6);
  border-style: solid;
  height: 46px;
  position: relative;
  border-radius: 8px;
  margin: 0px 22px 0px 0px;
  width: ${(props) => props.width};
`;
const Text11 = styled.div`
  width: 102px;
  height: 32px;
  display: flex;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
  position: absolute;
  top: 7px;
  left: 15px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Element17 = styled.div`
  height: 66px;
  position: relative;
  min-width: 1224px;
  margin: 0px 0px 22px 0px;
`;
const Text16 = styled.div`
  text-align: center;
  width: 32px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 84px 0px 0px;
`;
const Text17 = styled.div`
  width: 100px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 124px 0px 0px;
`;
const Text18 = styled.div`
  width: 84px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 164px 0px 0px;
`;
const Text19 = styled.div`
  width: 160px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 60px 0px 0px;
`;
const NavyBlueFlexColumn = styled.div`
  background-color: #14a9ff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 8px 16px;
  margin: ${(props) => props.margin};
`;
const FlexRow10 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: start;
`;
const ExportTo = styled.div`
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #ffffff;
  white-space: pre-wrap;
`;
const Image8 = styled.img`
  width: 20px;
  height: 20px;
`;
const Image9 = styled.img`
  width: 32px;
  height: 32px;
`;
const NavyBlueFlexColumn1 = styled.div`
  background-color: #14a9ff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 14px;
  left: 1018px;
  border-radius: 8px;
  padding: 8px 16px;
`;
const Image11 = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 17px;
  left: 1168px;
`;
const CadetBlueFlexRow2 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  box-shadow: 0px 1px 16px 0px rgba(22, 22, 22, 0.04);
  width: 100%;
  background-color: rgba(170, 170, 170, 0.05);
  display: flex;
  position: absolute;
  left: -1px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 16px;
  padding: 15px 44px;
  top: ${(props) => props.top};
`;
const Text25 = styled.div`
  width: 132px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Text41 = styled.div`
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  position: absolute;
  left: ${(props) => props.left};
`;
const Text42 = styled.div`
  text-align: center;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  position: absolute;
  left: ${(props) => props.left};
`;
