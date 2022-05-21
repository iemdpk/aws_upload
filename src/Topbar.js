import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";
import {Link} from "react-router-dom";

function Topbar(props) {
  return (
    <FlexRow2>
          <Text2>Hello, Julia</Text2>
          <FlexRow3>
            <FlexRow4>
              <Text3>TUIT Coin Balance</Text3>
              <Text4>$23,336</Text4>
            </FlexRow4>
            <CadetBlueFlexColumn>
              <Fluenthomefilled
                src={"https://file.rendit.io/n/UxfGWdR3rRdaWGrxobBK.svg"}
              />
            </CadetBlueFlexColumn>
            <CadetBlueFlexColumn>
              <Fluenthomefilled
                src={"https://file.rendit.io/n/BG83qnmZhfELCes8s0QL.svg"}
              />
            </CadetBlueFlexColumn>
            <FlexRow5 gap={"8px"}>
              <Link to="/profile" style={{textDecoration:'none'}}>
              <UnsplashWFsNyI5
                src={"https://file.rendit.io/n/MLfZFe7PMDMkbfT1dqtc.png"}
              />
              </Link>
              <Link to="/profile" style={{textDecoration:'none'}}>
              <Text5>Julia Thomas</Text5>
              </Link>
            </FlexRow5>
          </FlexRow3>
        </FlexRow2>
  )
}
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
const UnsplashWFsNyI5 = styled.img`
  width: 36px;
  height: 36px;
`;
const FlexRow5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Fluenthomefilled = styled.img`
  width: 24px;
  height: 24px;
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
const Text3 = styled.div`
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top:15px;
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

Topbar.propTypes = {}

export default Topbar
