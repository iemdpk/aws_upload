import React,{useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export function Library2(){

  const[style,setStyle]=useState('rgba(170, 170, 170, 0.1)');

  const a=()=>{
    setStyle('rgba(170, 170, 170, 0.1)');
  }
  const b=()=>{
    setStyle('rgba(170, 170, 170, 0.1)');
  }
  const c=()=>{
    setStyle('rgba(170, 170, 170, 0.1)');
  }
  const d=()=>{
    setStyle('rgba(170, 170, 170, 0.1)');
  }

  const all=()=>{
    setStyle("clicked");
    b();c();d();
  }
  const trend=()=>{
    setStyle("clicked");
    a();c();d();
  }
  const recom=()=>{
    setStyle("clicked");
    a();b();d();
  }
  const latest=()=>{
    setStyle("clicked");
    a();b();c();
  }

  return (
    <LibraryRoot>
      <FlexColumn1>
        <div className="increase">
        <Element2>
          <WhiteFlexRow>
            <Text2>Library</Text2>
          </WhiteFlexRow>
        </Element2>
        <FlexRow6>
          <FlexColumn2>
            <FlexRow7>
              <NavyBlueFlexRow>
              <div className="two">
                <div className="dropdown">
                <button class="dropbtn">Videos</button>
                    <div class="dropdown-content">
                        <Link to="/articles">Articles</Link>
                        <Link to="/questionPaper">Question Paper</Link>
                        <Link to="/others">Slideshows</Link>
                    </div>
                 </div>
              </div>
                <Fluentlibraryfilled
                  src={"https://file.rendit.io/n/igaTtWOXDOsMYLiCqhKC.svg"}
                />
              </NavyBlueFlexRow>
              <CadetBlueRectangle />
              <button className="select all a">
              <NavyBlueText>All</NavyBlueText></button>
              <button className="select trend b">
              <CadetBlueText margin={"0px 17px 0px 0px"}>Trending</CadetBlueText></button>
              <button className="select recom c">
              <CadetBlueText margin={"0px 15px 0px 0px"}>Recommended</CadetBlueText></button>
              <button className="select latest d">
              <CadetBlueText margin={"0"}>Latest</CadetBlueText></button>
            </FlexRow7>
            <FlexRow8>
              <Element3>
                <CadetBlueFlexRow>
                  <Fluentlibraryfilled
                    src={"https://file.rendit.io/n/I252EQfufGJKjGqZBijq.svg"}
                  />
                </CadetBlueFlexRow>
                <Text7 placeholder={"Search"} />
                <Element4>
                  <Text8 width={"78px"}>Grade (01)</Text8>
                  <Keyboardarrowdown4
                    src={"https://file.rendit.io/n/JRjgEvnzbk3DrDKqZGWz.svg"}
                    left={"89px"}
                  />
                </Element4>
              </Element3>
              <Element5>
                <Text8 width={"86px"}>Topic (02)</Text8>
                <Keyboardarrowdown4
                  src={"https://file.rendit.io/n/JRjgEvnzbk3DrDKqZGWz.svg"}
                  left={"97px"}
                />
              </Element5>
              <Element6>
                <Text10>Alignment (01)</Text10>
                <Keyboardarrowdown4
                  src={"https://file.rendit.io/n/JRjgEvnzbk3DrDKqZGWz.svg"}
                  left={"113px"}
                />
              </Element6>
              <Text1 height={"48px"}>Reset All</Text1>
            </FlexRow8>
            <FlexRow9>
              <FlexColumn3>
                <FlexColumn4>
                  <Element7>
                    <UnsplashzsLfDck>
                      <UnsplashWFsNyI7
                        src={
                          "https://file.rendit.io/n/ZllNb7rCScRcfezCqHAP.svg"
                        }
                      />
                      <Union>
                        {[
                          {
                            src: "https://file.rendit.io/n/ihuyTucSPGSXqrS81wIU.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/YnQsosgyBZnRtOIAcCVm.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/FFUGWbvSXtsGSFx2S1Kb.svg",
                          },
                        ].map((data) => (
                          <Bxbxtime src={data.src} />
                        ))}
                      </Union>
                    </UnsplashzsLfDck>
                    <Text12>Real Numbers and Their Operations</Text12>
                    <Morevert
                      src={"https://file.rendit.io/n/iBzXHROBw4ZuN1KMK5TV.svg"}
                      left={"242px"}
                    />
                    <Text13>6h ago</Text13>
                  </Element7>
                  <FlexRow5 gap={"53px"}>
                    <FlexRow11>
                      <NeonCarrotFlexColumn>
                        <Text14 width={"32px"}>Maths</Text14>
                      </NeonCarrotFlexColumn>
                      <NeonCarrotFlexColumn>
                        <Text14 width={"36px"}>Algebra</Text14>
                      </NeonCarrotFlexColumn>
                      <Element8>
                        <Carboninformation
                          src={
                            "https://file.rendit.io/n/isBfgXaL42K5LojTCV9z.svg"
                          }
                        />
                        <NeonCarrotFlexRow>
                          <Text14 width={"25px"}>ICSE</Text14>
                        </NeonCarrotFlexRow>
                      </Element8>
                    </FlexRow11>
                    <FlexRow2>
                      <Text17>By Julia Michael</Text17>
                      <Image1
                        src={
                          "https://file.rendit.io/n/FeBkT7Ii6RoYhXXoFF9q.png"
                        }
                      />
                    </FlexRow2>
                  </FlexRow5>
                </FlexColumn4>
                <FlexColumn4>
                  <Element7>
                    <UnsplashzsLfDck>
                      <UnsplashWFsNyI7
                        src={
                          "https://file.rendit.io/n/ZllNb7rCScRcfezCqHAP.svg"
                        }
                      />
                      <Union>
                        {[
                          {
                            src: "https://file.rendit.io/n/ihuyTucSPGSXqrS81wIU.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/YnQsosgyBZnRtOIAcCVm.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/FFUGWbvSXtsGSFx2S1Kb.svg",
                          },
                        ].map((data) => (
                          <Bxbxtime src={data.src} />
                        ))}
                      </Union>
                    </UnsplashzsLfDck>
                    <Text12>Real Numbers and Their Operations</Text12>
                    <Morevert
                      src={"https://file.rendit.io/n/iBzXHROBw4ZuN1KMK5TV.svg"}
                      left={"242px"}
                    />
                    <Text13>6h ago</Text13>
                  </Element7>
                  <FlexRow5 gap={"53px"}>
                    <FlexRow11>
                      <NeonCarrotFlexColumn>
                        <Text14 width={"32px"}>Maths</Text14>
                      </NeonCarrotFlexColumn>
                      <NeonCarrotFlexColumn>
                        <Text14 width={"36px"}>Algebra</Text14>
                      </NeonCarrotFlexColumn>
                      <Element8>
                        <Carboninformation
                          src={
                            "https://file.rendit.io/n/isBfgXaL42K5LojTCV9z.svg"
                          }
                        />
                        <NeonCarrotFlexRow>
                          <Text14 width={"25px"}>ICSE</Text14>
                        </NeonCarrotFlexRow>
                      </Element8>
                    </FlexRow11>
                    <FlexRow2>
                      <Text17>By Julia Michael</Text17>
                      <Image1
                        src={
                          "https://file.rendit.io/n/FeBkT7Ii6RoYhXXoFF9q.png"
                        }
                      />
                    </FlexRow2>
                  </FlexRow5>
                </FlexColumn4>
              </FlexColumn3>
              <FlexColumn3>
                <FlexColumn4>
                  <Element7>
                    <UnsplashzsLfDck>
                      <UnsplashWFsNyI7
                        src={
                          "https://file.rendit.io/n/ZllNb7rCScRcfezCqHAP.svg"
                        }
                      />
                      <Union>
                        {[
                          {
                            src: "https://file.rendit.io/n/ihuyTucSPGSXqrS81wIU.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/YnQsosgyBZnRtOIAcCVm.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/FFUGWbvSXtsGSFx2S1Kb.svg",
                          },
                        ].map((data) => (
                          <Bxbxtime src={data.src} />
                        ))}
                      </Union>
                    </UnsplashzsLfDck>
                    <Text12>Real Numbers and Their Operations</Text12>
                    <Morevert
                      src={"https://file.rendit.io/n/iBzXHROBw4ZuN1KMK5TV.svg"}
                      left={"242px"}
                    />
                    <Text13>6h ago</Text13>
                  </Element7>
                  <FlexRow5 gap={"53px"}>
                    <FlexRow11>
                      <NeonCarrotFlexColumn>
                        <Text14 width={"32px"}>Maths</Text14>
                      </NeonCarrotFlexColumn>
                      <NeonCarrotFlexColumn>
                        <Text14 width={"36px"}>Algebra</Text14>
                      </NeonCarrotFlexColumn>
                      <Element8>
                        <Carboninformation
                          src={
                            "https://file.rendit.io/n/isBfgXaL42K5LojTCV9z.svg"
                          }
                        />
                        <NeonCarrotFlexRow>
                          <Text14 width={"25px"}>ICSE</Text14>
                        </NeonCarrotFlexRow>
                      </Element8>
                    </FlexRow11>
                    <FlexRow2>
                      <Text17>By Julia Michael</Text17>
                      <Image1
                        src={
                          "https://file.rendit.io/n/FeBkT7Ii6RoYhXXoFF9q.png"
                        }
                      />
                    </FlexRow2>
                  </FlexRow5>
                </FlexColumn4>
                <FlexColumn4>
                  <Element7>
                    <UnsplashzsLfDck>
                      <UnsplashWFsNyI7
                        src={
                          "https://file.rendit.io/n/ZllNb7rCScRcfezCqHAP.svg"
                        }
                      />
                      <Union>
                        {[
                          {
                            src: "https://file.rendit.io/n/ihuyTucSPGSXqrS81wIU.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/YnQsosgyBZnRtOIAcCVm.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/FFUGWbvSXtsGSFx2S1Kb.svg",
                          },
                        ].map((data) => (
                          <Bxbxtime src={data.src} />
                        ))}
                      </Union>
                    </UnsplashzsLfDck>
                    <Text12>Real Numbers and Their Operations</Text12>
                    <Morevert
                      src={"https://file.rendit.io/n/iBzXHROBw4ZuN1KMK5TV.svg"}
                      left={"242px"}
                    />
                    <Text13>6h ago</Text13>
                  </Element7>
                  <FlexRow5 gap={"53px"}>
                    <FlexRow11>
                      <NeonCarrotFlexColumn>
                        <Text14 width={"32px"}>Maths</Text14>
                      </NeonCarrotFlexColumn>
                      <NeonCarrotFlexColumn>
                        <Text14 width={"36px"}>Algebra</Text14>
                      </NeonCarrotFlexColumn>
                      <Element8>
                        <Carboninformation
                          src={
                            "https://file.rendit.io/n/isBfgXaL42K5LojTCV9z.svg"
                          }
                        />
                        <NeonCarrotFlexRow>
                          <Text14 width={"25px"}>ICSE</Text14>
                        </NeonCarrotFlexRow>
                      </Element8>
                    </FlexRow11>
                    <FlexRow2>
                      <Text17>By Julia Michael</Text17>
                      <Image1
                        src={
                          "https://file.rendit.io/n/FeBkT7Ii6RoYhXXoFF9q.png"
                        }
                      />
                    </FlexRow2>
                  </FlexRow5>
                </FlexColumn4>
              </FlexColumn3>
              <FlexColumn3>
                <FlexColumn4>
                  <Element7>
                    <UnsplashzsLfDck>
                      <UnsplashWFsNyI7
                        src={
                          "https://file.rendit.io/n/ZllNb7rCScRcfezCqHAP.svg"
                        }
                      />
                      <Union>
                        {[
                          {
                            src: "https://file.rendit.io/n/ihuyTucSPGSXqrS81wIU.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/YnQsosgyBZnRtOIAcCVm.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/FFUGWbvSXtsGSFx2S1Kb.svg",
                          },
                        ].map((data) => (
                          <Bxbxtime src={data.src} />
                        ))}
                      </Union>
                    </UnsplashzsLfDck>
                    <Text12>Real Numbers and Their Operations</Text12>
                    <Morevert
                      src={"https://file.rendit.io/n/iBzXHROBw4ZuN1KMK5TV.svg"}
                      left={"242px"}
                    />
                    <Text13>6h ago</Text13>
                  </Element7>
                  <FlexRow5 gap={"53px"}>
                    <FlexRow11>
                      <NeonCarrotFlexColumn>
                        <Text14 width={"32px"}>Maths</Text14>
                      </NeonCarrotFlexColumn>
                      <NeonCarrotFlexColumn>
                        <Text14 width={"36px"}>Algebra</Text14>
                      </NeonCarrotFlexColumn>
                      <Element8>
                        <Carboninformation
                          src={
                            "https://file.rendit.io/n/isBfgXaL42K5LojTCV9z.svg"
                          }
                        />
                        <NeonCarrotFlexRow>
                          <Text14 width={"25px"}>ICSE</Text14>
                        </NeonCarrotFlexRow>
                      </Element8>
                    </FlexRow11>
                    <FlexRow2>
                      <Text17>By Julia Michael</Text17>
                      <Image1
                        src={
                          "https://file.rendit.io/n/FeBkT7Ii6RoYhXXoFF9q.png"
                        }
                      />
                    </FlexRow2>
                  </FlexRow5>
                </FlexColumn4>
                <FlexColumn4>
                  <Element7>
                    <UnsplashzsLfDck>
                      <UnsplashWFsNyI7
                        src={
                          "https://file.rendit.io/n/ZllNb7rCScRcfezCqHAP.svg"
                        }
                      />
                      <Union>
                        {[
                          {
                            src: "https://file.rendit.io/n/ihuyTucSPGSXqrS81wIU.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/YnQsosgyBZnRtOIAcCVm.svg",
                          },
                          {
                            src: "https://file.rendit.io/n/FFUGWbvSXtsGSFx2S1Kb.svg",
                          },
                        ].map((data) => (
                          <Bxbxtime src={data.src} />
                        ))}
                      </Union>
                    </UnsplashzsLfDck>
                    <Text12>Real Numbers and Their Operations</Text12>
                    <Morevert
                      src={"https://file.rendit.io/n/iBzXHROBw4ZuN1KMK5TV.svg"}
                      left={"242px"}
                    />
                    <Text13>6h ago</Text13>
                  </Element7>
                  <FlexRow5 gap={"53px"}>
                    <FlexRow11>
                      <NeonCarrotFlexColumn>
                        <Text14 width={"32px"}>Maths</Text14>
                      </NeonCarrotFlexColumn>
                      <NeonCarrotFlexColumn>
                        <Text14 width={"36px"}>Algebra</Text14>
                      </NeonCarrotFlexColumn>
                      <Element8>
                        <Carboninformation
                          src={
                            "https://file.rendit.io/n/isBfgXaL42K5LojTCV9z.svg"
                          }
                        />
                        <NeonCarrotFlexRow>
                          <Text14 width={"25px"}>ICSE</Text14>
                        </NeonCarrotFlexRow>
                      </Element8>
                    </FlexRow11>
                    <FlexRow2>
                      <Text17>By Julia Michael</Text17>
                      <Image1
                        src={
                          "https://file.rendit.io/n/FeBkT7Ii6RoYhXXoFF9q.png"
                        }
                      />
                    </FlexRow2>
                  </FlexRow5>
                </FlexColumn4>
              </FlexColumn3>
            </FlexRow9>
          </FlexColumn2>
          <FlexColumn12>
            <FlexColumn13>
              <FlexRow28>
                <YourPlaylists>Your Playlists{"  "}(21)</YourPlaylists>
                <Fluentlibraryfilled
                  src={"https://file.rendit.io/n/CuuR7FN9CHVUgi4KPeqP.svg"}
                />
              </FlexRow28>
              <NavyBlueFlexRow1 gap={"161px"}>
                <Algebra6 width={"111px"}>Algebra </Algebra6>
                <Fluentlibraryfilled
                  src={"https://file.rendit.io/n/ONCgnJRNvNNhxKpyrJVO.svg"}
                />
              </NavyBlueFlexRow1>
              <NavyBlueFlexRow1 gap={"105px"}>
                <Algebra6 width={"167px"}>Forces and Motion</Algebra6>
                <Fluentlibraryfilled
                  src={"https://file.rendit.io/n/ONCgnJRNvNNhxKpyrJVO.svg"}
                />
              </NavyBlueFlexRow1>
              <NavyBlueFlexRow1 gap={"138px"}>
                <Algebra6 width={"134px"}>Ancient Egypt</Algebra6>
                <Fluentlibraryfilled
                  src={"https://file.rendit.io/n/ONCgnJRNvNNhxKpyrJVO.svg"}
                />
              </NavyBlueFlexRow1>
              <NavyBlueFlexRow1 gap={"161px"}>
                <Algebra6 width={"111px"}>Algebra </Algebra6>
                <Fluentlibraryfilled
                  src={"https://file.rendit.io/n/ONCgnJRNvNNhxKpyrJVO.svg"}
                />
              </NavyBlueFlexRow1>
              <NavyBlueFlexRow1 gap={"105px"}>
                <Algebra6 width={"167px"}>Forces and Motion</Algebra6>
                <Fluentlibraryfilled
                  src={"https://file.rendit.io/n/ONCgnJRNvNNhxKpyrJVO.svg"}
                />
              </NavyBlueFlexRow1>
              <NavyBlueFlexRow6>
                <Algebra6 width={"134px"}>Ancient Egypt</Algebra6>
                <Fluentlibraryfilled
                  src={"https://file.rendit.io/n/ONCgnJRNvNNhxKpyrJVO.svg"}
                />
              </NavyBlueFlexRow6>
              <FlexRow2>
                <Text52>View more</Text52>
                <Image1
                  src={"https://file.rendit.io/n/jxdbt2UQv8K9hSbCjWnu.svg"}
                />
              </FlexRow2>
            </FlexColumn13>
            <Element19>
              <YourVideos>Your Videos </YourVideos>
              <FlexColumn14>
                <FlexRow5 gap={"21px"}>
                  <UnsplashGzDrmSYQg
                    src={"https://file.rendit.io/n/lbBuvTjfhzYupZSmnTto.png"}
                  />
                  <FlexColumn15>
                    <Element20>
                      <Text12>Real Numbers and Their Operations</Text12>
                      <Morevert
                        src={
                          "https://file.rendit.io/n/iBzXHROBw4ZuN1KMK5TV.svg"
                        }
                        left={"196px"}
                      />
                    </Element20>
                    <FlexRow31>
                      <FlexRow11>
                        <NeonCarrotFlexColumn>
                          <Text14 width={"32px"}>Maths</Text14>
                        </NeonCarrotFlexColumn>
                        <NeonCarrotFlexColumn>
                          <Text14 width={"36px"}>Algebra</Text14>
                        </NeonCarrotFlexColumn>
                        <Element8>
                          <Carboninformation
                            src={
                              "https://file.rendit.io/n/isBfgXaL42K5LojTCV9z.svg"
                            }
                          />
                          <NeonCarrotFlexRow>
                            <Text14 width={"25px"}>ICSE</Text14>
                          </NeonCarrotFlexRow>
                        </Element8>
                      </FlexRow11>
                      <Text57>6h ago</Text57>
                    </FlexRow31>
                    <FlexRow5 gap={"29px"}>
                      <FlexRow2>
                        <Text58>By Julia Michael</Text58>
                        <Image1
                          src={
                            "https://file.rendit.io/n/FeBkT7Ii6RoYhXXoFF9q.png"
                          }
                        />
                      </FlexRow2>
                      <Element22>
                        <Union6>
                          {[
                            {
                              src: "https://file.rendit.io/n/ihuyTucSPGSXqrS81wIU.svg",
                            },
                            {
                              src: "https://file.rendit.io/n/YnQsosgyBZnRtOIAcCVm.svg",
                            },
                            {
                              src: "https://file.rendit.io/n/FFUGWbvSXtsGSFx2S1Kb.svg",
                            },
                          ].map((data) => (
                            <Bxbxtime src={data.src} />
                          ))}
                        </Union6>
                        <CadetBlueRectangle1 />
                      </Element22>
                    </FlexRow5>
                  </FlexColumn15>
                </FlexRow5>
                <FlexRow35>
                  <Text52>View more</Text52>
                  <Image1
                    src={"https://file.rendit.io/n/jxdbt2UQv8K9hSbCjWnu.svg"}
                  />
                </FlexRow35>
              </FlexColumn14>
            </Element19>
          </FlexColumn12>
        </FlexRow6>
        </div>
      </FlexColumn1>
    </LibraryRoot>
  );
};
const LibraryRoot = styled.div`
  background-color: #ffffff;
`;
const Video = styled.div`
  box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.1);
  width: 120px;
  height: 1024px;
  overflow: hidden;
  position: relative;
`;
const FlexRow = styled.div`
  width: 48px;
  height: 4px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 828px;
  left: 12px;
  border-radius: 8px;
  padding: 16px 24px;
`;
const Component = styled.div`
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  position: absolute;
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
const Fluenthomeregular1 = styled.img`
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
const Image8 = styled.img`
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
const Image9 = styled.img`
  width: 60px;
  height: 54px;
`;
const FlexRow1 = styled.div`
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
  width: 1287px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 31px;
  flex-grow: 1;
`;
const Element2 = styled.div`
  height: 80px;
  position: relative;
  min-width: 1287px;
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
  padding: 20px 36px 4px 36px;
`;
const Text2 = styled.div`
  width: 254px;
  height: 48px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 400;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const FlexRow3 = styled.div`
  width: 563px;
  display: flex;
  position: absolute;
  top: 36px;
  left: 721px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FlexRow4 = styled.div`
  background-image: url("https://file.rendit.io/n/Yh9ogwaPNIme3WO8B0B4.svg");
  background-size: cover;
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  padding: 2px 14px 1px 10px;
  margin: 0px 14px 0px 0px;
`;
const Text3 = styled.div`
  width: 125px;
  height: 43px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
  flex-direction: column;
  align-items: start;
  justify-content: center;
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
  justify-content: flex-end;
  gap: 31px;
`;
const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1px 0px;
`;
const FlexRow7 = styled.div`
  width: 828px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 37px 0px;
`;
const NavyBlueFlexRow = styled.div`
  background-color: #14a9ff;
  display: flex;
  flex-direction: row;
  gap: 0px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 2px 1px;
  margin: 0px 22px 0px 0px;
`;
const Text6 = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  color: #ffffff;
`;
const CadetBlueRectangle = styled.div`
  width: 2px;
  height: 40px;
  background-color: rgba(170, 170, 170, 0.5);
  align-self: flex-start;
  border-radius: 100px;
  margin: 4px 26px 0px 0px;
`;
const NavyBlueText = styled.div`
  text-align: center;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.8);
  background-color: rgba(20, 169, 255, 0.2);
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 12px 32px;
  margin: 0px 23px 0px 0px;
`;
const FlexRow8 = styled.div`
  width: 822px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 36px 0px;
`;
const Element3 = styled.div`
  width: 403px;
  height: 48px;
  position: relative;
  flex-grow: 1;
  margin: 0px 22px 0px 0px;
`;
const CadetBlueFlexRow = styled.div`
  width: 208px;
  background-color: rgba(170, 170, 170, 0.1);
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 12px 16px;
`;
const Text7 = styled.input`
  width: 216px;
  height: 48px;
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
const Element4 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.6);
  border-style: solid;
  width: 128px;
  height: 46px;
  position: absolute;
  top: -1px;
  left: 271px;
  border-radius: 8px;
`;
const Element5 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.6);
  border-style: solid;
  width: 136px;
  height: 46px;
  position: relative;
  border-radius: 8px;
  margin: 0px 22px 0px 0px;
`;
const Element6 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.6);
  border-style: solid;
  width: 152px;
  height: 46px;
  position: relative;
  border-radius: 8px;
  margin: 0px 15px 0px 0px;
`;
const Text10 = styled.div`
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
const FlexRow9 = styled.div`
  display: flex;
  align-self: center;
  flex-direction: row;
  gap: 32px;
  justify-content: space-between;
`;
const FlexColumn12 = styled.div`
  width: 382px;
  display: flex;
  flex-direction: column;
  gap: 31px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;
const FlexColumn13 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  height: 466px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 15px 23px;
`;
const FlexRow28 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 16px 0px;
`;
const YourPlaylists = styled.div`
  width: 175px;
  height: 48px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.8);
  flex-direction: column;
  align-items: start;
  justify-content: center;
  white-space: pre-wrap;
`;
const NavyBlueFlexRow6 = styled.div`
  width: 308px;
  background-color: rgba(20, 169, 255, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 138px;
  align-items: center;
  border-radius: 8px;
  padding: 0px 12px;
  margin: 0px 0px 18px 0px;
`;
const Element19 = styled.div`
  width: 380px;
  height: 228px;
  position: relative;
`;
const YourVideos = styled.div`
  width: 288px;
  height: 48px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.8);
  position: absolute;
  top: 16px;
  left: 27px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  white-space: pre-wrap;
`;
const FlexColumn14 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  height: 222px;
  display: flex;
  position: absolute;
  top: -1px;
  left: -1px;
  flex-direction: column;
  justify-content: flex-end;
  gap: 24px;
  align-items: center;
  border-radius: 16px;
  padding: 23px 35px 23px 26px;
`;
const UnsplashGzDrmSYQg = styled.img`
  width: 84px;
  height: 84px;
`;
const FlexColumn15 = styled.div`
  width: 212px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  flex-grow: 1;
`;
const Element20 = styled.div`
  height: 24px;
  position: relative;
  min-width: 212px;
`;
const FlexRow31 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 71px;
  align-items: center;
`;
const Text57 = styled.div`
  text-align: right;
  width: 26px;
  height: 12px;
  display: flex;
  font-size: 8px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
  flex-direction: column;
  align-items: end;
  justify-content: center;
`;
const Text58 = styled.div`
  width: 77px;
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
const Element22 = styled.div`
  width: 90px;
  height: 24px;
  position: relative;
  flex-grow: 1;
`;
const Union6 = styled.div`
  background-image: url("undefined");
  background-size: cover;
  position: absolute;
  left: 2px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  padding: 6px 9px 6px 8px;
`;
const CadetBlueRectangle1 = styled.div`
  width: 90px;
  height: 24px;
  background-color: rgba(170, 170, 170, 0.1);
  position: absolute;
  border-radius: 8px;
`;
const FlexRow35 = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 103px 0px 0px;
`;
const Cilaccountlogout = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 48px;
  top: ${(props) => props.top};
`;
const Image1 = styled.img`
  width: 16px;
  height: 16px;
`;
const Fluentlibraryfilled = styled.img`
  width: 24px;
  height: 24px;
`;
const Image5 = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 60px 0px;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
const FlexRow5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const UnsplashWFsNyI7 = styled.img`
  width: 36px;
  height: 36px;
`;
const CadetBlueText = styled.div`
  text-align: center;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.8);
  background-color: rgba(170, 170, 170, 0.1);
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 12px 32px;
  margin: ${(props) => props.margin};
`;
const Text8 = styled.div`
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
const Keyboardarrowdown4 = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 11px;
  left: ${(props) => props.left};
`;
const FlexColumn3 = styled.div`
  width: 258px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;
const FlexColumn4 = styled.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
`;
const Element7 = styled.div`
  height: 24px;
  position: relative;
  min-width: 258px;
`;
const UnsplashzsLfDck = styled.div`
  width: 242px;
  height: 171px;
  background-image: url("https://file.rendit.io/n/xzBx1QF2Wx4phyZzWcaT.png");
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
  background-image: url("https://file.rendit.io/n/fLpEnjT7pzQ0BxPsIInR.svg");
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
const Text12 = styled.div`
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
  left: ${(props) => props.left};
`;
const Text13 = styled.div`
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
const FlexRow11 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
`;
const NeonCarrotFlexColumn = styled.div`
  background-color: rgba(247, 148, 29, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;
const Text14 = styled.div`
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
const Element8 = styled.div`
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
const Text17 = styled.div`
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
const NavyBlueFlexRow1 = styled.div`
  width: 308px;
  background-color: rgba(20, 169, 255, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  padding: 0px 12px;
  margin: 0px 0px 16px 0px;
  gap: ${(props) => props.gap};
`;
const Algebra6 = styled.div`
  height: 48px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  white-space: pre-wrap;
  width: ${(props) => props.width};
`;
const Text52 = styled.div`
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.6);
`;
