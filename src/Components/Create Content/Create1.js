import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const Create1 = ({}) => {
  return (
    <DesktopRoot>
      <Component>
      </Component>
      <FlexColumn1>
        <Text2>Create Content</Text2>
        <CornflowerFlexColumn backgroundColor={"rgba(121, 206,253, 0.05)"}>
          <FlexRow2>
            <Text3>Question Paper</Text3>
            <FlexColumn2
              boxShadow={
                "0px 4px 12px 0px\n                rgba(22, 22,22, 0.1)"
              }
            >
              <FlexColumn3
                backgroundImage={
                  "linear-gradient(180deg, #7bd0ff 0%,#2d749c 100%)"
                }
              > <Link to="/newquestion"><CreateNew>Create New </CreateNew></Link>
              </FlexColumn3>
            </FlexColumn2>
          </FlexRow2>
          <FlexRow3 alignSelf={"stretch"}>
            <Text4>Weekly Analysis</Text4>
            <Element6 width={"287px"}>
              <Text5>Total Question paper created</Text5>
              <Text6 left={"243px"}>22</Text6>
              <Element7 width={"283px"} />
            </Element6>
          </FlexRow3>
          <FlexRow4
            backgroundImage={
              'url("https://file.rendit.io/n/vqrpRqGKGWSTfvSQcbnp.svg")'
            }
          >
            <Ellipse
              src={"https://file.rendit.io/n/QVJ6e5qQ99ohbKLNpXXr.svg"}
            />
            <Ellipse1
              src={"https://file.rendit.io/n/QVJ6e5qQ99ohbKLNpXXr.svg"}
            />
            <Ellipse2
              src={"https://file.rendit.io/n/QVJ6e5qQ99ohbKLNpXXr.svg"}
            />
            <Ellipse3
              src={"https://file.rendit.io/n/QVJ6e5qQ99ohbKLNpXXr.svg"}
            />
            <Ellipse4
              src={"https://file.rendit.io/n/QVJ6e5qQ99ohbKLNpXXr.svg"}
            />
            <Ellipse5
              src={"https://file.rendit.io/n/QVJ6e5qQ99ohbKLNpXXr.svg"}
            />
            <Ellipse6
              src={"https://file.rendit.io/n/QVJ6e5qQ99ohbKLNpXXr.svg"}
            />
          </FlexRow4>
          <FlexRow5 alignSelf={"stretch"}>
            {[
              {
                childText: "Sun",
              },
              {
                childText: "Mon",
              },
              {
                childText: "Tue",
              },
              {
                childText: "Wed",
              },
              {
                childText: "Thu",
              },
              {
                childText: "Fri",
              },
              {
                childText: "Sat",
              },
            ].map((data) => (
              <Text7>{data.childText}</Text7>
            ))}
          </FlexRow5>
        </CornflowerFlexColumn>
        <BittersweetFlexColumn>
          <FlexRow6 gap={"152px"}>
            <Text14>Slideshow</Text14>
            <FlexColumn4
              backgroundImage={
                "linear-gradient(180deg, #ff8c7c 0%,#9c4539 100%)"
              }
            >
              <Link to="/newslideshow"><CreateNew>Create New </CreateNew></Link>
            </FlexColumn4>
          </FlexRow6>
          <FlexRow7>
            <Text4>Weekly Analysis</Text4>
            <Element6 width={"259px"}>
              <Text17>Total Sldeshows created</Text17>
              <Text6 left={"215px"}>22</Text6>
              <Element7 width={"255px"} />
            </Element6>
          </FlexRow7>
          <FlexRow8>
            <Ellipse
              src={"https://file.rendit.io/n/m2eOnMoaaz10AwDTrlj6.svg"}
            />
            <Ellipse1
              src={"https://file.rendit.io/n/m2eOnMoaaz10AwDTrlj6.svg"}
            />
            <Ellipse2
              src={"https://file.rendit.io/n/m2eOnMoaaz10AwDTrlj6.svg"}
            />
            <Ellipse3
              src={"https://file.rendit.io/n/m2eOnMoaaz10AwDTrlj6.svg"}
            />
            <Ellipse4
              src={"https://file.rendit.io/n/m2eOnMoaaz10AwDTrlj6.svg"}
            />
            <Ellipse5
              src={"https://file.rendit.io/n/m2eOnMoaaz10AwDTrlj6.svg"}
            />
            <Ellipse6
              src={"https://file.rendit.io/n/m2eOnMoaaz10AwDTrlj6.svg"}
            />
          </FlexRow8>
          <FlexRow9>
            {[
              {
                childText: "Sun",
              },
              {
                childText: "Mon",
              },
              {
                childText: "Tue",
              },
              {
                childText: "Wed",
              },
              {
                childText: "Thu",
              },
              {
                childText: "Fri",
              },
              {
                childText: "Sat",
              },
            ].map((data) => (
              <Text7>{data.childText}</Text7>
            ))}
          </FlexRow9>
        </BittersweetFlexColumn>
      </FlexColumn1>
      <FlexColumn5>
      <FlexRow10></FlexRow10>
        <CornflowerFlexColumn backgroundColor={"rgba(203, 142,242, 0.05)"}>
          <FlexRow2>
            <Text14>Videos</Text14>
            <FlexColumn2
              boxShadow={"0px 4px 12px 0px\n                rgba(0, 0,0, 0.1)"}
            >
              <FlexColumn3
                backgroundImage={
                  "linear-gradient(180deg, #ba7be2 0%,#752ba1 100%)"
                }
              >
                <Link to="/newvideo"><CreateNew>Create New </CreateNew></Link>
              </FlexColumn3>
            </FlexColumn2>
          </FlexRow2>
          <FlexRow3 alignSelf={"stretch"}>
            <Text4>Weekly Analysis</Text4>
            <Element6 width={"219px"}>
              <Text31 left={"1px"}>Total Videos created</Text31>
              <Text6 left={"175px"}>22</Text6>
              <Element7 width={"215px"} />
            </Element6>
          </FlexRow3>
          <FlexRow4
            backgroundImage={
              'url("https://file.rendit.io/n/NfmQCTHmmUwQIRnmBQiZ.svg")'
            }
          >
            <Ellipse
              src={"https://file.rendit.io/n/I8H95vREA0peFu1iA7vF.svg"}
            />
            <Ellipse1
              src={"https://file.rendit.io/n/I8H95vREA0peFu1iA7vF.svg"}
            />
            <Ellipse2
              src={"https://file.rendit.io/n/I8H95vREA0peFu1iA7vF.svg"}
            />
            <Ellipse3
              src={"https://file.rendit.io/n/I8H95vREA0peFu1iA7vF.svg"}
            />
            <Ellipse4
              src={"https://file.rendit.io/n/I8H95vREA0peFu1iA7vF.svg"}
            />
            <Ellipse5
              src={"https://file.rendit.io/n/I8H95vREA0peFu1iA7vF.svg"}
            />
            <Ellipse6
              src={"https://file.rendit.io/n/I8H95vREA0peFu1iA7vF.svg"}
            />
          </FlexRow4>
          <FlexRow5 alignSelf={"stretch"}>
            {[
              {
                childText: "Sun",
              },
              {
                childText: "Mon",
              },
              {
                childText: "Tue",
              },
              {
                childText: "Wed",
              },
              {
                childText: "Thu",
              },
              {
                childText: "Fri",
              },
              {
                childText: "Sat",
              },
            ].map((data) => (
              <Text7>{data.childText}</Text7>
            ))}
          </FlexRow5>
        </CornflowerFlexColumn>
        <DandelionFlexColumn>
          <FlexRow6 gap={"150px"}>
            <Text14>Articles</Text14>
            <FlexColumn4
              backgroundImage={
                "linear-gradient(180deg, #fad75e 0%,#8e7726 100%)"
              }
            >
              <Link to="/newarticle"><CreateNew>Create New </CreateNew></Link>
            </FlexColumn4>
          </FlexRow6>
          <FlexRow3 alignSelf={"inherit"}>
            <Text4>Weekly Analysis</Text4>
            <Element6 width={"230px"}>
              <Text31 left={"12px"}>Total Articles created</Text31>
              <Text6 left={"186px"}>22</Text6>
              <Element7 width={"226px"} />
            </Element6>
          </FlexRow3>
          <FlexRow18>
            <Ellipse
              src={"https://file.rendit.io/n/FnQ23ZhA7ksj4Rke0nbx.svg"}
            />
            <Ellipse1
              src={"https://file.rendit.io/n/FnQ23ZhA7ksj4Rke0nbx.svg"}
            />
            <Ellipse2
              src={"https://file.rendit.io/n/FnQ23ZhA7ksj4Rke0nbx.svg"}
            />
            <Ellipse3
              src={"https://file.rendit.io/n/FnQ23ZhA7ksj4Rke0nbx.svg"}
            />
            <Ellipse4
              src={"https://file.rendit.io/n/FnQ23ZhA7ksj4Rke0nbx.svg"}
            />
            <Ellipse5
              src={"https://file.rendit.io/n/FnQ23ZhA7ksj4Rke0nbx.svg"}
            />
            <Ellipse6
              src={"https://file.rendit.io/n/FnQ23ZhA7ksj4Rke0nbx.svg"}
            />
          </FlexRow18>
          <FlexRow5 alignSelf={"inherit"}>
            {[
              {
                childText: "Sun",
              },
              {
                childText: "Mon",
              },
              {
                childText: "Tue",
              },
              {
                childText: "Wed",
              },
              {
                childText: "Thu",
              },
              {
                childText: "Fri",
              },
              {
                childText: "Sat",
              },
            ].map((data) => (
              <Text7>{data.childText}</Text7>
            ))}
          </FlexRow5>
        </DandelionFlexColumn>
      </FlexColumn5>
    </DesktopRoot>
  );
};
const DesktopRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 48px;
  min-width: 1440px;
  position:relative;
  top:-100px;
`;
const Component = styled.div`
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-self: center;
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
  width: 588px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  align-items: center;
  padding: 54px 0px;
`;
const Text2 = styled.div`
  width: 254px;
  height: 48px;
  display: flex;
  font-size: 32px;
  font-family: Open Sans;
  font-weight: 400;
  color: #161616;
  align-self: flex-start;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 0px 32px 0px;
`;
const Text3 = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 600;
  text-transform: capitalize;
  color: #161616;
`;
const Text5 = styled.div`
  text-align: center;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.6);
  position: absolute;
  top: 10px;
  left: 15px;
`;
const BittersweetFlexColumn = styled.div`
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
  height: 307px;
  background-color: rgba(254, 138, 123, 0.05);
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 24px 23px 20px 24px;
`;
const FlexRow7 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 138px;
  align-items: flex-start;
  margin: 0px 0px 21px 0px;
`;
const Text17 = styled.div`
  text-align: right;
  width: 187px;
  height: 20px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.6);
  position: absolute;
  top: 11px;
  left: 20px;
  flex-direction: column;
  align-items: end;
  justify-content: center;
`;
const FlexRow8 = styled.div`
  width: 432px;
  height: 85px;
  background-image: url("https://file.rendit.io/n/1BJO2JBggCpvKTQXXuka.svg");
  background-size: cover;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1px 57px 40px 49px;
  margin: 0px 1px 7px 0px;
`;
const FlexRow9 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  padding: 0px 45px 0px 39px;
`;
const FlexColumn5 = styled.div`
  width: 610px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  padding: 36px 0px 54px 0px;
`;
const FlexRow10 = styled.div`
  width: 600px;
  height: 48px;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 136px 0px;
`;
const Element10 = styled.div`
  width: 317px;
  height: 46px;
  background-image: url("https://file.rendit.io/n/sqWYGJsFrxLM9XEp3hy0.svg");
  background-size: cover;
  position: relative;
  margin: 0px 22px 0px 0px;
`;
const Text26 = styled.div`
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
const Text27 = styled.div`
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
const FlexRow11 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;
const UnsplashWFsNyI = styled.img`
  width: 36px;
  height: 36px;
`;
const Text28 = styled.div`
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
const DandelionFlexColumn = styled.div`
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
  height: 307px;
  background-color: rgba(239, 206, 89, 0.05);
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 24px 23px 20px 26px;
`;
const FlexRow18 = styled.div`
  width: 432px;
  height: 85px;
  background-image: url("https://file.rendit.io/n/JLihjS7qUDvGZw4bPwMQ.svg");
  background-size: cover;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 57px 40px 49px;
  margin: 0px 0px 7px 0px;
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
const CornflowerFlexColumn = styled.div`
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
  height: 307px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 24px;
  padding: 24px 23px 20px 26px;
  margin: 0px 0px 48px 0px;
  background-color: ${(props) => props.backgroundColor};
`;
const FlexRow2 = styled.div`
  width: 538px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 36px 0px;
`;
const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.boxShadow};
`;
const FlexColumn3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-image: ${(props) => props.backgroundImage};
`;
const CreateNew = styled.div`
  text-align: center;
  width: 172px;
  height: 60px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 700;
  text-transform: capitalize;
  color: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
`;
const FlexRow3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 22px 0px;
  align-self: ${(props) => props.alignSelf};
`;
const Text4 = styled.div`
  width: 140px;
  height: 31px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 5px 0px 0px 0px;
`;
const Element6 = styled.div`
  align-self: stretch;
  height: 42px;
  position: relative;
  flex-grow: 1;
  width: ${(props) => props.width};
`;
const Text6 = styled.div`
  text-align: center;
  width: 34px;
  height: 40px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 700;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.6);
  position: absolute;
  top: 1px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: ${(props) => props.left};
`;
const Element7 = styled.div`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  border-style: solid;
  height: 38px;
  position: absolute;
  border-radius: 8px;
  width: ${(props) => props.width};
`;
const FlexRow4 = styled.div`
  width: 432px;
  height: 85px;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 57px 40px 49px;
  margin: 0px 0px 7px 0px;
  background-image: ${(props) => props.backgroundImage};
`;
const Ellipse = styled.img`
  width: 8px;
  height: 8px;
  margin: 20px 64px 0px 0px;
`;
const Ellipse1 = styled.img`
  width: 8px;
  height: 8px;
  align-self: flex-end;
  margin: 0px 60px 15px 0px;
`;
const Ellipse2 = styled.img`
  width: 8px;
  height: 8px;
  margin: 31px 65px 0px 0px;
`;
const Ellipse3 = styled.img`
  width: 8px;
  height: 8px;
  align-self: flex-end;
  margin: 0px 59px 5px 0px;
`;
const Ellipse4 = styled.img`
  width: 8px;
  height: 8px;
  margin: 0px 67px 0px 0px;
`;
const Ellipse5 = styled.img`
  width: 8px;
  height: 8px;
  align-self: flex-end;
  margin: 0px 61px 0px 0px;
`;
const Ellipse6 = styled.img`
  width: 8px;
  height: 8px;
  margin: 2px 0px 0px 0px;
`;
const FlexRow5 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  padding: 0px 45px 0px 37px;
  align-self: ${(props) => props.alignSelf};
`;
const Text7 = styled.div`
  text-align: center;
  width: 31px;
  height: 15px;
  display: flex;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FlexRow6 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 36px 0px;
  gap: ${(props) => props.gap};
`;
const Text14 = styled.div`
  width: 216px;
  height: 60px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 600;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const FlexColumn4 = styled.div`
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-image: ${(props) => props.backgroundImage};
`;
const Search = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 24px 0px 0px;
`;
const Text31 = styled.div`
  text-align: right;
  width: 166px;
  height: 20px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.6);
  position: absolute;
  top: 11px;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  left: ${(props) => props.left};
`;
