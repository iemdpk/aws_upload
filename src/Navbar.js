import React, { Component } from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Space>
        <hr />
      </Space>

      <WhiteFlexColumnRoot>
      <Link to="/">
      <LogoAsset src={"https://file.rendit.io/n/gZeLXB7dOXc7UiH8qyU2.svg"} />
      </Link>
      <CornflowerFlexRow>
        <Link to="/">
        <Fluenthomefilled
          src={"https://file.rendit.io/n/OKSigaA5BIlXxTZhIcu5.svg"}
        />
        </Link>
      </CornflowerFlexRow>
      <Link to="/library">
      <Fluentlibraryregular
        src={"https://file.rendit.io/n/J7BRSzJklIJjNi2OWMM6.svg"}
      />
      </Link>
      <Link to="/createlesson">
      <Fluentlibraryregular
        src={"https://file.rendit.io/n/H4fAqA5OE07zfjEbbluy.svg"}
      />
      </Link>
      <Link to="/createcontent">
      <Fluentlibraryregular
        src={"https://file.rendit.io/n/bNs0Uqgb1HsulvFNcJcB.svg"}
      />
      </Link>
      <Link to="/discussion">
      <Fluentlibraryregular
        src={"https://file.rendit.io/n/Hzo2frhEPEl1XFCFdwIH.svg"}
      />
      </Link>
      <Link to="/staffroom">
      <Fluentlibraryregular
        src={"https://file.rendit.io/n/f0i3J3Ukv8XwHNSI4Hnd.svg"}
      />
      </Link>
      <Link to="/profile">
      <Image4 src={"https://file.rendit.io/n/rnyk5BHj3xtqMujHSXOm.svg"} />
      </Link>
      <FlexColumn>
        <Link to="/appinstall">
        <Image5 src={"https://file.rendit.io/n/V31K8iWuoywhYMk1b6HX.svg"} />
         </Link>
        <FlexRow>
          <FlexRow1>
            <Getapp src={"https://file.rendit.io/n/F4xRgr02KfMt3K9lm7De.svg"} />
            <Text1>Install App</Text1>
          </FlexRow1>
        </FlexRow>
      </FlexColumn>
      <Link to="/logout">
      <Fluenthomefilled
        src={"https://file.rendit.io/n/NIif1dJTnti1oEzT57kf.svg"}
      />
         </Link>

    </WhiteFlexColumnRoot>
    </div>
  )
}
const WhiteFlexColumnRoot = styled.div`
  width:120px;
  background-color: #ffffff;
  display: flex;
  position:fixed;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding: 12px 12px 48px 12px;
`;
const Space = styled.div`
  width:120px;
  height:0.1px;
  overflow:hidden;
  background-color:red;
  
`;
const LogoAsset = styled.img`
  width: 56px;
  height: 56px;
  margin: 0px 0px 60px 0px;
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
const Fluenthomefilled = styled.img`
  width: 24px;
  height: 24px;
`;
const Fluentlibraryregular = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 60px 0px;
`;
