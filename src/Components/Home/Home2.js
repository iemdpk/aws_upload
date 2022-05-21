import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import "../../App.css";
export const Home2 = ({}) => {
  return (
    <HomeRoot>
      <FlexColumn1>
        <FlexRow6>
          <FlexColumn2>
            <Element3>
              <Link to="#" style={{textDecoration:'none'}}>
              <Text6>Connect Mining Account</Text6>
              </Link>
              <FlexColumn3>
                <FlexColumn4>
                  <Text7>Tuit Coin Balance</Text7>
                  <FlexRow5 gap={"12px"}>
                    <Text8>$21,000</Text8>
                    <Arrowupward
                      src={"https://file.rendit.io/n/ciaLPenUYLtD2FFErZXM.svg"}
                    />
                  </FlexRow5>
                </FlexColumn4>
              </FlexColumn3>
              <Paragraph>
                Connect your mining account to earn TUIT Coins
              </Paragraph>
            </Element3>
            {/* This is Flex */}
            <CadetBlueFlexRow>
              <FlexColumn5>
                <Text9 className="create">Create New Content</Text9>
                <FlexRow8>
                  <Link to="questionPaper" style={{textDecoration:'none'}}>
                  <Text10
                    backgroundImage={
                      "linear-gradient(169deg, #7acfff 0%,#024164 150%)"
                  }
                  >
                    Question Paper
                  </Text10>
                  </Link>
                  <Link to="/articles" style={{textDecoration:'none'}}>
                  <Text10
                    backgroundImage={
                      "linear-gradient(159deg, #cc8ff2 0%,rgba(82, 0,133, 0.93) 103%)"
                    }
                  >
                    Articles
                  </Text10>
                  </Link>
                </FlexRow8>
              </FlexColumn5>
              <Link  to="/videos" style={{textDecoration:'none'}}>
              <Text10
                style={{marginLeft:10}}
                backgroundImage={
                  "linear-gradient(166deg, #ff8b7b 0%,#500e05 155%)"
                }
              >
                Videos
              </Text10>
              </Link>
              <Link to="/others" style={{textDecoration:'none'}}>
              <Text10
                style={{marginLeft:10}}
                backgroundImage={
                  "linear-gradient(171deg, #fddb60 0%,#493902 140%,rgba(254, 219,96, 0) 140%)"
                }
              >
                Others
              </Text10>
              </Link>
            </CadetBlueFlexRow>
            <FlexColumn6>
              <FlexRow2>
                <Text9>Latest Videos</Text9>
                <Link to="/videos" style={{textDecoration:'none'}}>
                <Text15>View All</Text15>
                </Link>
              </FlexRow2>
              <FlexRow10 gap={"24px"}>
                <FlexColumn7>
                  <Element4>
                    <UnsplashzsLfDck>
                      <UnsplashWFsNyI5
                        src={
                          "https://file.rendit.io/n/Lm93cpQzvGpU8v1AAcwq.svg"
                        }
                      />
                      <Union>
                        {[
                          {
                            src: "https://file.rendit.io/n/EXHfRFcoK9xqANAW3Ibe.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/cnRPY84mNiaPmaE1QJOR.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/S1YFA26y3x0yBs9YOevk.svg",
                          },
                        ].map((data) => (
                          <Bxbxtime src={data.src} />
                        ))}
                      </Union>
                    </UnsplashzsLfDck>
                    <Text16>Real Numbers and Their Operations</Text16>
                    <Morevert
                      src={"https://file.rendit.io/n/hz4Tsnf3FaCbGrEPaVKR.svg"}
                    />
                    <Text17>6h ago</Text17>
                  </Element4>
                  <FlexRow5 gap={"53px"}>
                    <FlexRow10 gap={"4px"}>
                      <NeonCarrotFlexColumn>
                        <Text18 width={"32px"}>Maths</Text18>
                      </NeonCarrotFlexColumn>
                      <NeonCarrotFlexColumn>
                        <Text18 width={"36px"}>Algebra</Text18>
                      </NeonCarrotFlexColumn>
                      <Element5>
                        <Carboninformation
                          src={
                            "https://file.rendit.io/n/RAfbKLNzY5Kqpi3uvoUL.svg"
                          }
                        />
                        <NeonCarrotFlexRow>
                          <Text18 width={"25px"}>ICSE</Text18>
                        </NeonCarrotFlexRow>
                      </Element5>
                    </FlexRow10>
                    <FlexRow1>
                      <Text21>By Julia Michael</Text21>
                      <Getapp
                        src={
                          "https://file.rendit.io/n/rYTmO01fxZ7hcSPxUq7l.png"
                        }
                      />
                    </FlexRow1>
                  </FlexRow5>
                </FlexColumn7>
                <FlexColumn7>
                  <Element4>
                    <UnsplashzsLfDck>
                      <UnsplashWFsNyI5
                        src={
                          "https://file.rendit.io/n/Lm93cpQzvGpU8v1AAcwq.svg"
                        }
                      />
                      <Union>
                        {[
                          {
                            src: "https://file.rendit.io/n/EXHfRFcoK9xqANAW3Ibe.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/cnRPY84mNiaPmaE1QJOR.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/S1YFA26y3x0yBs9YOevk.svg",
                          },
                        ].map((data) => (
                          <Bxbxtime src={data.src} />
                        ))}
                      </Union>
                    </UnsplashzsLfDck>
                    <Text16>Real Numbers and Their Operations</Text16>
                    <Morevert
                      src={"https://file.rendit.io/n/hz4Tsnf3FaCbGrEPaVKR.svg"}
                    />
                    <Text17>6h ago</Text17>
                  </Element4>
                  <FlexRow5 gap={"53px"}>
                    <FlexRow10 gap={"4px"}>
                      <NeonCarrotFlexColumn>
                        <Text18 width={"32px"}>Maths</Text18>
                      </NeonCarrotFlexColumn>
                      <NeonCarrotFlexColumn>
                        <Text18 width={"36px"}>Algebra</Text18>
                      </NeonCarrotFlexColumn>
                      <Element5>
                        <Carboninformation
                          src={
                            "https://file.rendit.io/n/RAfbKLNzY5Kqpi3uvoUL.svg"
                          }
                        />
                        <NeonCarrotFlexRow>
                          <Text18 width={"25px"}>ICSE</Text18>
                        </NeonCarrotFlexRow>
                      </Element5>
                    </FlexRow10>
                    <FlexRow1>
                      <Text21>By Julia Michael</Text21>
                      <Getapp
                        src={
                          "https://file.rendit.io/n/rYTmO01fxZ7hcSPxUq7l.png"
                        }
                      />
                    </FlexRow1>
                  </FlexRow5>
                </FlexColumn7>
                <FlexColumn7>
                  <Element4>
                    <UnsplashzsLfDck>
                      <UnsplashWFsNyI5
                        src={
                          "https://file.rendit.io/n/Lm93cpQzvGpU8v1AAcwq.svg"
                        }
                      />
                      <Union>
                        {[
                          {
                            src: "https://file.rendit.io/n/EXHfRFcoK9xqANAW3Ibe.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/cnRPY84mNiaPmaE1QJOR.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/S1YFA26y3x0yBs9YOevk.svg",
                          },
                        ].map((data) => (
                          <Bxbxtime src={data.src} />
                        ))}
                      </Union>
                    </UnsplashzsLfDck>
                    <Text16>Real Numbers and Their Operations</Text16>
                    <Morevert
                      src={"https://file.rendit.io/n/hz4Tsnf3FaCbGrEPaVKR.svg"}
                    />
                    <Text17>6h ago</Text17>
                  </Element4>
                  <FlexRow5 gap={"53px"}>
                    <FlexRow10 gap={"4px"}>
                      <NeonCarrotFlexColumn>
                        <Text18 width={"32px"}>Maths</Text18>
                      </NeonCarrotFlexColumn>
                      <NeonCarrotFlexColumn>
                        <Text18 width={"36px"}>Algebra</Text18>
                      </NeonCarrotFlexColumn>
                      <Element5>
                        <Carboninformation
                          src={
                            "https://file.rendit.io/n/RAfbKLNzY5Kqpi3uvoUL.svg"
                          }
                        />
                        <NeonCarrotFlexRow>
                          <Text18 width={"25px"}>ICSE</Text18>
                        </NeonCarrotFlexRow>
                      </Element5>
                    </FlexRow10>
                    <FlexRow1>
                      <Text21>By Julia Michael</Text21>
                      <Getapp
                        src={
                          "https://file.rendit.io/n/rYTmO01fxZ7hcSPxUq7l.png"
                        }
                      />
                    </FlexRow1>
                  </FlexRow5>
                </FlexColumn7>
              </FlexRow10>
            </FlexColumn6>
          </FlexColumn2>

          <FlexColumn10>
            <FlexRow20>
              <FlexColumn11>
                <FlexRow5 gap={"97px"}>
                  <Requests>Requests{"  "}(12)</Requests>
                  <Text34>View All</Text34>
                </FlexRow5>
                <FlexColumn12>
                  <FlexColumn13>
                    <FlexRow22>
                      <Paragraph1 position={"relative"}>
                        John requested you to answer his question
                      </Paragraph1>
                      <Text35>2m ago</Text35>
                    </FlexRow22>
                    <Paragraph2>
                      Why animals cannot do photosynthesis even .....
                    </Paragraph2>
                    <FlexRow23>
                      <FlexColumn14>
                        <Text1 width={"103px"}>View Question</Text1>
                      </FlexColumn14>
                      <Text37>Ignore</Text37>
                    </FlexRow23>
                    <CadetBlueRectangle />
                  </FlexColumn13>
                  <FlexColumn13>
                    <FlexRow22>
                      <Paragraph1 position={"relative"}>
                        John requested you to answer his question
                      </Paragraph1>
                      <Text35>2m ago</Text35>
                    </FlexRow22>
                    <Paragraph2>
                      Why animals cannot do photosynthesis even .....
                    </Paragraph2>
                    <FlexRow23>
                      <FlexColumn14>
                        <Text1 width={"103px"}>View Question</Text1>
                      </FlexColumn14>
                      <Text37>Ignore</Text37>
                    </FlexRow23>
                    <CadetBlueRectangle />
                  </FlexColumn13>
                  <FlexColumn13>
                    <FlexRow22>
                      <Paragraph1 position={"relative"}>
                        John requested you to answer his question
                      </Paragraph1>
                      <Text35>2m ago</Text35>
                    </FlexRow22>
                    <Paragraph2>
                      Why animals cannot do photosynthesis even .....
                    </Paragraph2>
                    <FlexRow23>
                      <FlexColumn14>
                        <Text1 width={"103px"}>View Question</Text1>
                      </FlexColumn14>
                      <Text37>Ignore</Text37>
                    </FlexRow23>
                    <CadetBlueRectangle />
                  </FlexColumn13>
                  
                </FlexColumn12>
              </FlexColumn11>
              <CadetBlueRectangle4 />
            </FlexRow20>
            <WhiteFlexColumn1>
              <FlexRow28>
                <Text50>Latest Stories</Text50>
                <Text51>View All</Text51>
              </FlexRow28>
              <FlexRow29>
                <Image8
                  src={"https://file.rendit.io/n/zIpPWB8dCPSMfmrkWkS9.png"}
                />
                <Image8
                  src={"https://file.rendit.io/n/E9iAqmgsayLyIz6B17Y5.png"}
                />
              </FlexRow29>
              <FlexRow30>
                <FlexRow5 gap={"4px"}>
                  <Bxbxtime
                    src={"https://file.rendit.io/n/1MI6jFSkr56nNFtru8Xt.png"}
                  />
                  <Text52>Julia Michael</Text52>
                </FlexRow5>
                <FlexRow5 gap={"4px"}>
                  <Bxbxtime
                    src={"https://file.rendit.io/n/1MI6jFSkr56nNFtru8Xt.png"}
                  />
                  <Text52>Julia Michael</Text52>
                </FlexRow5>
              </FlexRow30>
              <FlexRow5 gap={"32px"}>
                <Paragraph11>
                  Learn: How to earn more Scholarship Coins
                </Paragraph11>
                <Paragraph12>
                  Microsoft announces <br />1 Million Dollar scholarship for
                  young students.
                </Paragraph12>
              </FlexRow5>
            </WhiteFlexColumn1>
          </FlexColumn10>
        </FlexRow6>
      </FlexColumn1>
    </HomeRoot>
  );
};
const HomeRoot = styled.div`
  display: flex;
  flex-direction: row;
  `;
const WhiteFlexColumn = styled.div`
  box-shadow: 0px 8px 24px 0px rgba(22, 22, 22, 0.04);
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
  margin: 0px 0px 59px 0px;
`;
const CornflowerFlexRow = styled.div`
  width: 64px;
  background-color: #89d4ff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 13px 0px 11px 0px;
  margin: 0px 0px 61px 0px;
`;
const Image3 = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 96px 0px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 88px 0px;
`;
const Image4 = styled.img`
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
const FlexColumn1 = styled.div`
  width: 1250px;
  display: flex;
  flex-direction: column;
  gap: 51px;
  flex-grow: 1;
  padding: 36px 0px 25px 0px;
`;
const Text2 = styled.div`
  width: 378px;
  height: 72px;
  display: flex;
  font-size: 32px;
  font-family: Open Sans;
  font-weight: 400;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left:50px;
`;
const FlexRow3 = styled.div`
  width: 563px;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FlexRow4 = styled.div`
  background-image: url("https://file.rendit.io/n/bEYGiPnyoIQyZOA9C3H4.svg");
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
const FlexRow6 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
`;
const FlexColumn2 = styled.div`
  width: 824px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  align-items: center;
  padding: 1px 0px;
`;
const Element3 = styled.div`
  width: 814px;
  height: 217px;
  position: relative;
  margin: 0px 0px 43px 1px;
  
`;
const Text6 = styled.div`
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 700;
  text-transform: capitalize;
  color: #ffffff;
  background-image: linear-gradient(148deg, #14a9ff 0%, #024063 294%);
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 108px;
  left: 429px;
  border-radius: 16px;
  padding: 16px 24px;
`;
const FlexColumn3 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  background: linear-gradient(146.47deg, rgba(100, 180, 226, 0.5) 13.76%, rgba(157, 90, 199, 0.5) 46.4%, rgba(216, 112, 98, 0.5) 79.04%, rgba(209, 179, 73, 0.5) 112.21%);
  display: flex;
  position: absolute;
  top: -1px;
  left: -1px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 31px 31px 46px 31px;
`;
const FlexColumn4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  justify-content: center;
  align-items: center;
`;
const Text7 = styled.div`
  width: 238px;
  height: 56px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Text8 = styled.div`
  font-size: 48px;
  font-family: Open Sans;
  font-weight: 400;
`;
const Arrowupward = styled.img`
  width: 48px;
  height: 48px;
  align-self: flex-start;
  margin: 8px 0px 0px 0px;
`;
const Paragraph = styled.div`
  text-align: center;
  width: 495px;
  height: 40px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
  position: absolute;
  top: 28px;
  left: 319px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CadetBlueFlexRow = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  background-color: rgba(170, 170, 170, 0.05);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  border-radius: 16px;
  padding: 30px;
  margin: 0px 0px 42px -45px;
`;
const FlexColumn5 = styled.div`
  align-self: stretch;
  width: 426px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  flex-grow: 1;
  align-items: flex-start;
`;
const FlexRow8 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-right:0;
  padding-right: 0;
`;
const FlexColumn6 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
`;
const Text15 = styled.div`
  text-align: right;
  width: 81px;
  height: 20px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #14a9ff;
  flex-direction: column;
  align-items: end;
  justify-content: center;
`;
const FlexColumn10 = styled.div`
  width: 394px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;
const FlexRow20 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  width: 391px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 16px;
  padding: 28px;
`;
const FlexColumn11 = styled.div`
  align-self: stretch;
  width: 332px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;
const Requests = styled.div`
  width: 177px;
  height: 32px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.8);
  flex-direction: column;
  align-items: start;
  justify-content: center;
  white-space: pre-wrap;
`;
const Text34 = styled.div`
  text-align: right;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #14a9ff;
  align-self: flex-end;
  margin: 0px 0px 4px 0px;
`;
const FlexColumn12 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
`;
const Element10 = styled.div`
  width: 332px;
  height: 32px;
  position: relative;
`;
const Paragraph9 = styled.div`
  width: 279px;
  height: 24px;
  display: flex;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  color: #aaaaaa;
  position: absolute;
  top: 153px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const CadetBlueRectangle3 = styled.div`
  width: 332px;
  height: 1px;
  background-color: rgba(170, 170, 170, 0.05);
  position: absolute;
  top: 128px;
`;
const CadetBlueRectangle4 = styled.div`
  width: 4px;
  height: 24px;
  background-color: rgba(170, 170, 170, 0.2);
  border-radius: 50px;
  margin: 55px 0px 0px 0px;
`;
const WhiteFlexColumn1 = styled.div`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  border-style: solid;
  height: 228px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 16px;
  padding: 11px 27px 11px 31px;
`;
const FlexRow28 = styled.div`
  width: 332px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 22px 0px;
`;
const Text50 = styled.div`
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
`;
const Text51 = styled.div`
  text-align: right;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #14a9ff;
  align-self: flex-start;
`;
const FlexRow29 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 12px 0px;
`;
const FlexRow30 = styled.div`
  width: 249px;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 4px 0px;
`;
const Paragraph11 = styled.div`
  width: 144px;
  height: 44px;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 18px;
  color: rgba(34, 33, 91, 0.6);
  align-self: flex-start;
`;
const Paragraph12 = styled.div`
  width: 156px;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 16px;
  color: rgba(34, 33, 91, 0.6);
`;
const Fluenthomefilled = styled.img`
  width: 24px;
  height: 24px;
`;
const Bicameravideo = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 72px 0px;
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
  height: 16px;
  display: flex;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  color: #14a9ff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
const FlexRow5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const UnsplashWFsNyI5 = styled.img`
  width: 36px;
  height: 36px;
`;
const Text9 = styled.div`
  width: 371px;
  height: 32px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 400;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Text10 = styled.div`
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 700;
  text-transform: capitalize;
  color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 32px;
  background-image: ${(props) => props.backgroundImage};
`;
const FlexRow10 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const FlexColumn7 = styled.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
`;
const Element4 = styled.div`
  height: 24px;
  position: relative;
  min-width: 258px;
`;
const UnsplashzsLfDck = styled.div`
  width: 242px;
  height: 158px;
  background-image: url("https://file.rendit.io/n/9KjdhA9G2hojl9d2H56I.png");
  background-size: cover;
  position: absolute;
  top: -171px;
  left: -1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 18px;
  align-items: flex-start;
  padding: 61px 7px 7px 7px;
`;
const Union = styled.div`
  width: 73px;
  background-image: url("https://file.rendit.io/n/smD9oOJOwIo3XV5nLHJE.svg");
  background-size: cover;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
  align-items: center;
  padding: 6px;
`;
const Bxbxtime = styled.img`
  width: 12px;
  height: 12px;
`;
const Text16 = styled.div`
  width: 204px;
  height: 24px;
  display: flex;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.8);
  position: absolute;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Morevert = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 4px;
  left: 242px;
`;
const Text17 = styled.div`
  width: 26px;
  height: 12px;
  display: flex;
  font-size: 8px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
  position: absolute;
  top: 6px;
  left: 219px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const NeonCarrotFlexColumn = styled.div`
  background-color: rgba(247, 148, 29, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;
const Text18 = styled.div`
  text-align: center;
  height: 16px;
  display: flex;
  font-size: 8px;
  font-family: Open Sans;
  font-weight: 400;
  color: #f7941d;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
`;
const Element5 = styled.div`
  width: 36px;
  height: 16px;
  position: relative;
  flex-grow: 1;
`;
const Carboninformation = styled.img`
  width: 8px;
  height: 8px;
  position: absolute;
  top: 4px;
  left: 24px;
`;
const NeonCarrotFlexRow = styled.div`
  width: 36px;
  background-color: rgba(247, 148, 29, 0.05);
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
`;
const Text21 = styled.div`
  text-align: center;
  width: 77px;
  height: 16px;
  display: flex;
  font-size: 10px;
  font-family: Open Sans;
  font-weight: 400;
  color: #aaaaaa;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FlexColumn13 = styled.div`
  height: 129px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FlexRow22 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 9px 0px;
`;
const Paragraph1 = styled.div`
  width: 279px;
  height: 24px;
  display: flex;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  color: #aaaaaa;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  position: ${(props) => props.position};
`;
const Text35 = styled.div`
  text-align: right;
  width: 53px;
  height: 24px;
  display: flex;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(170, 170, 170, 0.8);
  flex-direction: column;
  align-items: end;
  justify-content: center;
`;
const Paragraph2 = styled.div`
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.8);
  width: 332px;
  height: 22px;
  margin: 0px 0px 18px 0px;
`;
const FlexRow23 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
  padding: 0px 1px;
  margin: 0px 0px 25px 0px;
`;
const FlexColumn14 = styled.div`
  border-width: 1px;
  border-color: #14a9ff;
  border-style: solid;
  width: 107px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0px 5px;
`;
const Text37 = styled.div`
  text-align: center;
  width: 69px;
  height: 16px;
  display: flex;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  color: #aaaaaa;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CadetBlueRectangle = styled.div`
  width: 332px;
  height: 1px;
  background-color: rgba(170, 170, 170, 0.05);
`;
const Paragraph8 = styled.div`
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.8);
  position: absolute;
  top: ${(props) => props.top};
`;
const Text44 = styled.div`
  text-align: right;
  width: 53px;
  height: 24px;
  display: flex;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(170, 170, 170, 0.8);
  position: absolute;
  left: 279px;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  top: ${(props) => props.top};
`;
const FlexColumn19 = styled.div`
  border-width: 1px;
  border-color: #14a9ff;
  border-style: solid;
  height: 30px;
  display: flex;
  position: absolute;
  left: -1px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0px 7px;
  top: ${(props) => props.top};
`;
const Text46 = styled.div`
  text-align: center;
  width: 69px;
  height: 16px;
  display: flex;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  color: #aaaaaa;
  position: absolute;
  left: 123px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: ${(props) => props.top};
`;
const Image8 = styled.img`
  width: 156px;
  height: 82px;
`;
const Text52 = styled.div`
  width: 57px;
  height: 16px;
  display: flex;
  font-size: 10px;
  font-family: Open Sans;
  font-weight: 400;
  color: #aaaaaa;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;