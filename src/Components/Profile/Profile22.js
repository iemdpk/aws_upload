import React from "react";
import styled from "styled-components";
export const StudentProfilePage1 = ({}) => {
  return (
    <StudentProfilePageRoot>
      
      <FlexColumn1>
        <FlexRow4>
          <Ellipse src={"https://file.rendit.io/n/af7UzbGEj0I5VGyKK8Ap.svg"} />
          <FlexColumn2>
            <Text5>Nick Jonas</Text5>
            <Text6>Grade 6 at California Middle School</Text6>
          </FlexColumn2>
          <Element4>
            <Element5 width={"158px"} />
            <Text7 width={"160px"}>Sponsor</Text7>
          </Element4>
          <Element6>
            <Element5 width={"202px"} />
            <Text7 width={"204px"}>Share Profile</Text7>
          </Element6>
        </FlexRow4>
        <FlexRow5>
          <Room src={"https://file.rendit.io/n/VpiWShm377ZWGV8mXEw3.svg"} />
          <Text9>California</Text9>
          <Room src={"https://file.rendit.io/n/hkg6qnGTYWNJri2gfdKW.svg"} />
          <Text10 margin={"0px 18px 0px 0px"}>Aug 01 ‘2006</Text10>
          <Room src={"https://file.rendit.io/n/cpOTcDPbhRFOVpZeb97U.svg"} />
          <Text10 margin={"0px 8px 0px 0px"}>+216549865</Text10>
          <Room src={"https://file.rendit.io/n/dsnwGIGcnamcNIwsfulX.svg"} />
          <Text12>nickjonas23@gmail.com</Text12>
        </FlexRow5>
        <FlexRow6 alignItems={"center"}>
          <FlexRow7>
            <FlexColumn3>
              <Text13>Courses Interested in</Text13>
              <NavyBlueFlexColumn alignSelf={"flex-start"}>
                <Text14>Applied Mathematics</Text14>
              </NavyBlueFlexColumn>
            </FlexColumn3>
            <NavyBlueFlexColumn1>
              <Text14>Cyber Security</Text14>
            </NavyBlueFlexColumn1>
            <NavyBlueFlexColumn alignSelf={"inherit"}>
              <Text14>Product Design</Text14>
            </NavyBlueFlexColumn>
          </FlexRow7>
          <FlexRow8>
            <FlexColumn4>
              <Text17>Total Days Attended</Text17>
              <Text18>128 Days</Text18>
            </FlexColumn4>
            <FlexColumn5>
              <Text19>Attendance Streak</Text19>
              <Text18>28 Days</Text18>
            </FlexColumn5>
          </FlexRow8>
        </FlexRow6>
        <FlexRow6 alignItems={"stretch"}>
          <FlexColumn6>
            <FlexColumn7>
              <Text21>Badges</Text21>
              <FlexRow10>
                <WhiteFlexColumn1>
                  <MilitaryMedal
                    src={"https://file.rendit.io/n/zhAEvTxXGf59rjdSsDHU.png"}
                  />
                  <Text22>Maths Wizard</Text22>
                </WhiteFlexColumn1>
                <WhiteFlexColumn1>
                  <MilitaryMedal
                    src={"https://file.rendit.io/n/VwWtKGe5tE87vfw9oj8i.png"}
                  />
                  <Text22>Computer Wizard</Text22>
                </WhiteFlexColumn1>
              </FlexRow10>
            </FlexColumn7>
            <WhiteFlexColumn3>
              <Text24>Achievements</Text24>
              <FlexRow11>
                <Bxbxsmedal
                  src={"https://file.rendit.io/n/AdTKNB5Pc1u6utYpTSiv.svg"}
                />
                <FlexColumn8>
                  <Text25>lsc la dcl adljc l</Text25>
                  <Text17>
                    Lorem ipsum adiui kjafxioashd jacivevco lkascljlka klas
                    ackjac
                  </Text17>
                </FlexColumn8>
              </FlexRow11>
              <Text26 margin={"0px 16px 16px 0px"}>26 October 2021</Text26>
              <FlexRow11>
                <Bxbxsmedal
                  src={"https://file.rendit.io/n/AdTKNB5Pc1u6utYpTSiv.svg"}
                />
                <FlexColumn8>
                  <Text25>lsc la dcl adljc l</Text25>
                  <Text17>
                    Lorem ipsum adiui kjafxioashd jacivevco lkascljlka klas
                    ackjac
                  </Text17>
                </FlexColumn8>
              </FlexRow11>
              <Text26 margin={"0px 16px 0px 0px"}>26 October 2021</Text26>
            </WhiteFlexColumn3>
          </FlexColumn6>
          <Element8>
            <Text29>College Shortlisted</Text29>
            <FlexColumn10>
              <NeonCarrotFlexRow>
                <CollegeOffers2>
                  College offers
                  <CollegeOffers color={"#aaaaaa"}>{"    "}</CollegeOffers>
                  <CollegeOffers color={"#161616"}>03</CollegeOffers>
                </CollegeOffers2>
              </NeonCarrotFlexRow>
              <FlexRow13 margin={"0px 0px 14px 0px"}>
                <Image5
                  src={"https://file.rendit.io/n/tuNAHrpZVymgeL3Ehhj0.png"}
                />
                <Text30>Harvard University</Text30>
                <Keyboardarrowright
                  src={"https://file.rendit.io/n/aYBn7gXuOk8USeJoLu2a.svg"}
                />
              </FlexRow13>
              <FlexRow13 margin={"0px 0px 14px 0px"}>
                <Image5
                  src={"https://file.rendit.io/n/J6PnmQQ5kDPKAZG7wVcd.png"}
                />
                <Text31>Stanford University</Text31>
                <Keyboardarrowright
                  src={"https://file.rendit.io/n/aYBn7gXuOk8USeJoLu2a.svg"}
                />
              </FlexRow13>
              <FlexRow13 margin={"0"}>
                <Image5
                  src={"https://file.rendit.io/n/V4Kee1ItExagGY1cBwoK.png"}
                />
                <Text32>University of Oxford</Text32>
                <Keyboardarrowright
                  src={"https://file.rendit.io/n/aYBn7gXuOk8USeJoLu2a.svg"}
                />
              </FlexRow13>
            </FlexColumn10>
          </Element8>
        </FlexRow6>
      </FlexColumn1>
    </StudentProfilePageRoot>
  );
};
const StudentProfilePageRoot = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 47px;
  margin: auto;
  min-width: 1440px;
  align-items: flex-start;
  padding: 0px 0px 156px 0px;
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
  margin: 0px 0px 72px 0px;
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
const Cilaccountlogout = styled.img`
  width: 24px;
  height: 24px;
`;
const FlexColumn1 = styled.div`
  align-self: stretch;
  width: 1247px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`;
const FlexRow2 = styled.div`
  width: 600px;
  height: 48px;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 60px 0px;
`;
const Element3 = styled.div`
  width: 317px;
  height: 46px;
  background-image: url("https://file.rendit.io/n/7GyTKkKOZzrfoHkn8vS0.svg");
  background-size: cover;
  position: relative;
  margin: 0px 22px 0px 0px;
`;
const Text2 = styled.div`
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
const Text3 = styled.div`
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
const FlexRow3 = styled.div`
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
const Text4 = styled.div`
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
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0px 1px;
  margin: 0px 0px 36px 0px;
`;
const Ellipse = styled.img`
  width: 64px;
  height: 64px;
  align-self: flex-start;
  margin: 0px 22px 0px 0px;
`;
const FlexColumn2 = styled.div`
  width: 328px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 9px;
  flex-grow: 1;
  align-items: center;
  margin: 0px 379px 0px 0px;
`;
const Text5 = styled.div`
  width: 122px;
  height: 28px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 400;
  align-self: flex-start;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Text6 = styled.div`
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  color: #aaaaaa;
`;
const Element4 = styled.div`
  width: 162px;
  height: 65px;
  position: relative;
  flex-grow: 1;
  margin: 0px 17px 0px 0px;
`;
const Element6 = styled.div`
  width: 206px;
  height: 65px;
  position: relative;
  flex-grow: 1;
`;
const FlexRow5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 1px;
  margin: 0px 0px 31px 0px;
`;
const Text9 = styled.div`
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
  margin: 0px 12px 0px 0px;
`;
const Text12 = styled.div`
  width: 193px;
  height: 28px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const FlexRow7 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  width: 794px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  border-radius: 16px;
  padding: 22px 23px 23px 23px;
`;
const FlexColumn3 = styled.div`
  align-self: stretch;
  width: 199px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  margin: 0px 13px 0px 0px;
`;
const Text13 = styled.div`
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
`;
const NavyBlueFlexColumn1 = styled.div`
  background-color: rgba(20, 169, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 0px 16px 0px 0px;
`;
const FlexRow8 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  gap: 30px;
  border-radius: 16px;
  padding: 18px 16px 18px 23px;
`;
const FlexColumn4 = styled.div`
  width: 151px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  flex-grow: 1;
  align-items: center;
`;
const FlexColumn5 = styled.div`
  width: 142px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;
const Text19 = styled.div`
  width: 142px;
  height: 24px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: #aaaaaa;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const FlexColumn6 = styled.div`
  width: 844px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 30px;
  flex-grow: 1;
  align-items: center;
`;
const FlexColumn7 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  height: 254px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 16px;
  padding: 0px 464px 0px 22px;
`;
const Text21 = styled.div`
  width: 196px;
  height: 24px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 0px 0px 1px;
`;
const FlexRow10 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;
const WhiteFlexColumn3 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  height: 232px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-radius: 16px;
  padding: 23px 332px 23px 23px;
`;
const Text24 = styled.div`
  width: 196px;
  height: 24px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  align-self: flex-start;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 0px 24px 0px;
`;
const Element8 = styled.div`
  width: 366px;
  height: 600px;
  position: relative;
  flex-grow: 1;
`;
const Text29 = styled.div`
  width: 142px;
  height: 24px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: #aaaaaa;
  position: absolute;
  top: 95px;
  left: 25px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const FlexColumn10 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  height: 314px;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 23px 22px;
`;
const NeonCarrotFlexRow = styled.div`
  background-color: rgba(247, 148, 29, 0.2);
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding: 0px 8px 0px 12px;
  margin: 0px 0px 55px 1px;
`;
const CollegeOffers2 = styled.div`
  height: 46px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Text30 = styled.div`
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  margin: 0px 86px 0px 0px;
`;
const Text31 = styled.div`
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  margin: 0px 82px 0px 0px;
`;
const Text32 = styled.div`
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  margin: 0px 76px 0px 0px;
`;
const Bytesizehome = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 72px 0px;
`;
const Search = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 24px 0px 0px;
`;
const Element5 = styled.div`
  border-width: 1px;
  border-color: #14a9ff;
  border-style: solid;
  height: 58px;
  position: absolute;
  top: 1px;
  border-radius: 8px;
  width: ${(props) => props.width};
`;
const Text7 = styled.div`
  text-align: center;
  height: 60px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  color: #14a9ff;
  position: absolute;
  top: 2px;
  left: 1px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
`;
const Room = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 8px 0px 0px;
`;
const Text10 = styled.div`
  width: 96px;
  height: 28px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: ${(props) => props.margin};
`;
const FlexRow6 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
  align-items: ${(props) => props.alignItems};
`;
const NavyBlueFlexColumn = styled.div`
  background-color: rgba(20, 169, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  align-self: ${(props) => props.alignSelf};
`;
const Text14 = styled.div`
  text-align: center;
  width: 196px;
  height: 42px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: #161616;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text17 = styled.div`
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: #aaaaaa;
`;
const Text18 = styled.div`
  width: 139px;
  height: 42px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 400;
  color: #161616;
  align-self: flex-start;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const WhiteFlexColumn1 = styled.div`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  border-style: solid;
  height: 158px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 0px 17px;
`;
const MilitaryMedal = styled.img`
  width: 100px;
  height: 100px;
`;
const Text22 = styled.div`
  text-align: center;
  width: 124px;
  height: 16px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FlexRow11 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: flex-end;
  margin: 0px 0px 7px 0px;
`;
const Bxbxsmedal = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 13px 0px;
`;
const FlexColumn8 = styled.div`
  align-self: stretch;
  width: 453px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;
const Text25 = styled.div`
  width: 148px;
  height: 24px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  align-self: flex-start;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Text26 = styled.div`
  width: 437px;
  height: 24px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: #aaaaaa;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: ${(props) => props.margin};
`;
const CollegeOffers = styled.div`
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  display: contents;
  white-space: pre-wrap;
  color: ${(props) => props.color};
`;
const FlexRow13 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.05);
  border-style: solid;
  width: 290px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding: 13px 11px 13px 13px;
  margin: ${(props) => props.margin};
`;
const Image5 = styled.img`
  width: 32px;
  height: 32px;
  margin: 0px 8px 0px 0px;
`;
const Keyboardarrowright = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-end;
  margin: 0px 0px 2px 0px;
`;