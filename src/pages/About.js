import React from "react";
import "shared/scss/About.scss";
import styled from "styled-components";
import { Logo, Play, LikeFill } from "media/svg/Svg";
import Tripper from "media/image/about-tripper.jpg";
import TrilsImage1 from "media/image/about-trils.jpg";
import TrilsImage2 from "media/image/about-trils2.jpg";
import Park from "media/image/park2.png";
import Hoon from "media/image/hoon.png";
import Chan from "media/image/chan.jpg";
import Jin from "media/image/jin.png";
import Min from "media/image/min.png";
import Jisoo from "media/image/jisoo.png";
import Yoon from "media/image/yoon.png";
import Sally from "media/image/Sally.png";
import Fred from "media/image/Fred.png";
import Trilog2 from "media/image/Trilog_detail.png";

const About = () => {
  const lazyLoad = (target) => {
    const io = new IntersectionObserver((e, o) => {
      e.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target; // DOM
          const src = img.getAttribute("data-lazy");
          img.setAttribute("src", src);
          o.disconnect();
        }
      });
    });
    io.observe(target);
  };

  const parallax = (target) => {
    const io = new IntersectionObserver((e, o) => {
      e.forEach((entry) => {
        if (entry.isIntersecting) {
          const div = entry.target; // DOM
          const arr = div.classList;

          if (arr.contains("up")) {
            div.classList.add("showUp");
          } else if (arr.contains("left")) {
            div.classList.add("showLeft");
          } else {
            div.classList.add("showRight");
          }

          o.disconnect();
        }
      });
    });
    io.observe(target);
  };

  React.useEffect(() => {
    const imgs = document.querySelectorAll("img");
    imgs.forEach(lazyLoad);

    const targets = document.querySelectorAll(".animate");
    targets.forEach(parallax);
  }, []);

  return (
    <AboutContainer>
      <IntroWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Description>
          <div>????????? ???????????? ?????? ?????? ?????? ?????????,</div>
          <div>????????? ?????? ?????? ?????? ????????????????</div>
          <div>????????? ????????????, ????????? ?????? ??????, TRAVELER!</div>
          <div>
            ?????? ???????????? ?????? ??????, <span>TRIPORT??????</span>?????????.
          </div>
        </Description>
        <TripperWrapper className="animate up">
          <img data-lazy={Tripper} />
        </TripperWrapper>
      </IntroWrapper>
      <TrilsWrapper>
        <CenterWrapper>
          <TitleWrapper>
            <span>Trils</span>
          </TitleWrapper>
          <DivideWrapper>
            <LeftWrapper>
              <Info>
                <div>???????????? ??????!</div>
                <div>
                  ????????? ????????? <span>Trils</span>??? ???????????????.
                </div>
                <div>?????? ??? ????????? ???????????????, ??????? ???????????????!</div>
                <div>
                  <span>Trilog</span>??? ?????? ???????????? ??????????????? ?????????..!????
                </div>
              </Info>
              <CardWrapper className="animate left">
                <User>
                  <img data-lazy={Sally} />
                  <span>Sally</span>
                </User>
                <TrilsCard url={TrilsImage2}>
                  <Play />
                </TrilsCard>
                <LikeWrapper>
                  <LikeFill />
                  <span>?????????+13</span>
                  <Tag>#?????????</Tag>
                  <Tag>#??????</Tag>
                  <Tag>#?????????</Tag>
                </LikeWrapper>
              </CardWrapper>
            </LeftWrapper>
            <RightWrapper>
              <CardWrapper className="animate right">
                <User>
                  <img data-lazy={Fred} />
                  <span>Fred</span>
                </User>
                <TrilsCard url={TrilsImage1}>
                  <Play />
                </TrilsCard>
                <LikeWrapper>
                  <LikeFill />
                  <span>?????????+7</span>
                  <Tag>#?????????</Tag>
                  <Tag>#??????</Tag>
                  <Tag>#??????</Tag>
                </LikeWrapper>
              </CardWrapper>
            </RightWrapper>
          </DivideWrapper>
        </CenterWrapper>
      </TrilsWrapper>
      <TrilogWrapper>
        <CenterWrapper>
          <TitleWrapper>
            <span>Trilog</span>
          </TitleWrapper>
          <Info>
            <div>???????????? ??????!</div>
            <div>??? ???????????? ?????? ??????, ????????? ?????? ??? ?????????.</div>
            <div>
              <span>'????????? ??????'</span>??? ????????? ????????? ????????? ??? ????????????!
            </div>
            <div>?????? ????????? TRAVELER?????? ?????????????????? ????????????.????</div>
          </Info>
          <ImgWrapper className="animate up">
            <img data-lazy={Trilog2} />
          </ImgWrapper>
        </CenterWrapper>
      </TrilogWrapper>
      <MemberWrapper>
        <CenterWrapper>
          <TitleWrapper>
            <span>Triport ??? ??????</span>
          </TitleWrapper>
          <SectionWrapper>
            <span>??????</span>
          </SectionWrapper>
          <div>
            <MemberCard className="animate right">
              <MemberImg data-lazy={Park} />
              <MemberText>
                <NameTag>
                  <Name>?????????</Name>
                  <FeatureTag>?????????</FeatureTag>
                  <FeatureTag>????????????</FeatureTag>
                  <FeatureTag>???????????????</FeatureTag>
                  <FeatureTag>AWS</FeatureTag>
                </NameTag>
                <div>
                  ???????????? ????????? ???????????? ????????? ????????? ??????????????????!???? <br />
                  TRIPORT ??????????????? ?????? ???????????? ??????, ?????? ????????? ????????????
                  ?????? ????????? ????????? ????????? ????????? ???????????? ????????????. ?????????
                  ???????????? ?????????, ?????? ???????????? ????????? ???????????? ?????? TRIPORT??????
                  ?????? ????????? ?????????! BUG, VOC ??? ???????????? ?????????
                  ??????????????????.????????
                  <br />
                  Have a good TRIPORT!????
                </div>
                <div>
                  <BlueTag>github:</BlueTag>{" "}
                  <a href="https://github.com/iamzin" target="_blank">
                    https://github.com/iamzin
                  </a>
                </div>
                <div>
                  <BlueTag>blog:</BlueTag>{" "}
                  <a href="https://iamzin.github.io/" target="_blank">
                    https://iamzin.github.io/
                  </a>
                </div>
                <div>
                  <BlueTag>email:</BlueTag> eunzin.park@gmail.com
                </div>
              </MemberText>
            </MemberCard>
            <MemberCard className="animate right">
              <MemberImg data-lazy={Hoon} />
              <MemberText>
                <NameTag>
                  <Name>?????????</Name>
                  <FeatureTag>Trils</FeatureTag>
                  <FeatureTag>?????????</FeatureTag>
                </NameTag>
                <div>
                  ??????????????? ????????? ??????????????????. ????????? ???????????? ?????? ???
                  ???????????? ????????? ????????? ??????????????? ?????? ???????????? ?????? ????????? ???
                  ?????? ????????? ??? ???????????? ??????????????? ????????? ????????? ??? ?????????
                  ?????? ??? ????????? ????????? ??? ??????????????? ???????????? ???????????????.
                  ???????????????.
                </div>
                <div>
                  <BlueTag>github:</BlueTag>{" "}
                  <a href="https://github.com/kbyunghoon" target="_blank">
                    https://github.com/kbyunghoon
                  </a>
                </div>
                <div>
                  <BlueTag>blog:</BlueTag>{" "}
                  <a href="https://velog.io/@kbhoon" target="_blank">
                    https://velog.io/@kbhoon
                  </a>
                </div>
                <div>
                  <BlueTag>email:</BlueTag> kbhthl11@gmail.com
                </div>
              </MemberText>
            </MemberCard>
          </div>
          <SectionWrapper>
            <span>???????????????</span>
          </SectionWrapper>
          <div>
            <MemberCard className="animate left">
              <MemberImg data-lazy={Chan} />
              <MemberText>
                <NameTag>
                  <Name>?????????</Name>
                  <FeatureTag>Trilog</FeatureTag>
                  <FeatureTag>About</FeatureTag>
                  <FeatureTag>AWS</FeatureTag>
                </NameTag>
                <div>
                  ?????? ???????????? FE?????????, ??????????????????!???? ????????? ???????????????!
                </div>
                <div>
                  <BlueTag>github:</BlueTag>{" "}
                  <a href="https://github.com/rayrayj92" target="_blank">
                    https://github.com/rayrayj92
                  </a>
                </div>
                <div>
                  <BlueTag>blog:</BlueTag>{" "}
                  <a href="https://kodepaper.tistory.com/" target="_blank">
                    https://kodepaper.tistory.com/
                  </a>
                </div>
                <div>
                  <BlueTag>email:</BlueTag> ops3199@outlook.kr
                </div>
              </MemberText>
            </MemberCard>
            <MemberCard className="animate left">
              <MemberImg data-lazy={Min} />
              <MemberText>
                <NameTag>
                  <Name>?????????</Name>
                  <FeatureTag>?????????</FeatureTag>
                  <FeatureTag>????????????</FeatureTag>
                  <FeatureTag>???????????????</FeatureTag>
                </NameTag>
                <div>
                  TRIPORT??? ?????? ????????? ?????? ???????????? ?????????????????? :)
                  <br />
                  ??????, Traveler ?????????! ?????? Happy TRIPORT~ ??????????
                </div>
                <div>
                  <BlueTag>github:</BlueTag>{" "}
                  <a href="https://github.com/pmk2424" target="_blank">
                    https://github.com/pmk2424
                  </a>
                </div>
                <div>
                  <BlueTag>blog:</BlueTag>{" "}
                  <a href="https://velog.io/@pmk4236" target="_blank">
                    https://velog.io/@pmk4236
                  </a>
                </div>
                <div>
                  <BlueTag>email:</BlueTag> pmk42360@gmail.com
                </div>
              </MemberText>
            </MemberCard>
          </div>
          <SectionWrapper>
            <span>?????????</span>
          </SectionWrapper>
          <div>
            <MemberCard className="animate right">
              <MemberImg data-lazy={Yoon} />
              <MemberText>
                <NameTag>
                  <Name>?????????</Name>
                  <FeatureTag>Trils</FeatureTag>
                  <FeatureTag>AWS</FeatureTag>
                </NameTag>
                <div>
                  ???????????? ???????????? ?????? ?????? ?????? ?????????????????? ?????????????
                  <br />??? ????????? ????????? ???????????? ???????????? ???????????? ????????? ???
                  ???????????? ???????????????????
                </div>
                <div>
                  <BlueTag>github:</BlueTag>{" "}
                  <a href="https://github.com/beadoer1" target="_blank">
                    https://github.com/beadoer1
                  </a>
                </div>
                <div>
                  <BlueTag>blog:</BlueTag>{" "}
                  <a href="https://beadoer1.github.io/" target="_blank">
                    https://beadoer1.github.io/
                  </a>
                </div>
                <div>
                  <BlueTag>email:</BlueTag> beadoer1@gmail.com
                </div>
              </MemberText>
            </MemberCard>
            <MemberCard className="animate right">
              <MemberImg data-lazy={Jin} />
              <MemberText>
                <NameTag>
                  <Name>?????????</Name>
                  <FeatureTag>Trilog</FeatureTag>
                  <FeatureTag>???????????????</FeatureTag>
                  <FeatureTag>AWS</FeatureTag>
                </NameTag>
                <div>
                  ???? ???????????? ????????? ???????????? ???????????? ?????? ?????????????????? ?????????.{" "}
                  <br />
                  Triport??? ?????? ????????? ?????? ?????? ??????????????? ????????? ?????????
                  ??????????????? ??????????????? ??? ??? ??????????????? ???????????????! ????
                </div>
                <div>
                  <BlueTag>github:</BlueTag>{" "}
                  <a href="https://github.com/cowlsdnr77" target="_blank">
                    https://github.com/cowlsdnr77
                  </a>
                </div>
                <div>
                  <BlueTag>blog:</BlueTag>{" "}
                  <a href="https://velog.io/@cowlsdnr77" target="_blank">
                    https://velog.io/@cowlsdnr77
                  </a>
                </div>
                <div>
                  <BlueTag>email:</BlueTag> cowlsdnr77@naver.com
                </div>
              </MemberText>
            </MemberCard>
          </div>
          <SectionWrapper>
            <span>?????????</span>
          </SectionWrapper>
          <div>
            <MemberCard className="animate right">
              <MemberImg data-lazy={Jisoo} />
              <MemberText>
                <NameTag>
                  <Name>?????????</Name>
                  <FeatureTag>????????????</FeatureTag>
                  <FeatureTag>Adobe XD</FeatureTag>
                </NameTag>
                <div>
                  <BlueTag>portfolio:</BlueTag>{" "}
                  <a
                    href="https://jisooahn3582.wixsite.com/my-site"
                    target="_blank"
                  >
                    https://jisooahn3582.wixsite.com/my-site
                  </a>
                </div>
                <div>
                  <BlueTag>email:</BlueTag> js3582@naver.com
                </div>
              </MemberText>
            </MemberCard>
          </div>
        </CenterWrapper>
      </MemberWrapper>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IntroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 100px;
`;

const LogoWrapper = styled.div`
  width: 100%;
  font-family: paybooc-Bold;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: end;

  & svg {
    width: 268px;

    @media (max-width: 768px) {
      width: 200px;
    }

    @media (max-width: 600px) {
      width: 150px;
    }
  }

  & span {
    margin-left: 12px;
  }

  @media (max-width: 980px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-family: paybooc-Light;
  font-size: 20px;
  margin-top: 50px;

  & div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1.2rem 0;
  }

  & span {
    font-family: paybooc-bold;
    color: #2b61e1;
  }

  @media (max-width: 980px) {
    font-size: 19px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const TripperWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 100px 0;
  max-width: 100%;

  & img {
    width: 31.25rem;
    height: 28.875rem;

    @media (max-width: 980px) {
      width: 25rem;
      height: 23.125rem;
    }

    @media (max-width: 768px) {
      width: 18.75rem;
      height: 17.375rem;
    }

    @media (max-width: 600px) {
      width: 12.5rem;
      height: 11.563rem;
    }
  }
`;

const TrilsWrapper = styled.div`
    width: 100%;
    height: 1200px;
    background-color: #F2F6FF;
`;

const CenterWrapper = styled.div`
  width: 900px;
  margin: 0 auto;

  @media (max-width: 980px) {
    width: 100%;
    height: 100vh;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: 70px;

  & span {
    font-family: paybooc-bold;
    font-size: 1.875rem;
    color: #2b61e1;

    @media (max-width: 980px) {
      font-size: 1.75rem;
      margin-left: 1.25rem;
    }

    @media (max-width: 768px) {
      font-size: 1.563rem;
      margin-left: 3.125rem;
    }

    @media (max-width: 600px) {
      font-size: 1.375rem;
      margin-left: 1.25rem;
    }
  }
`;

const DivideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const LeftWrapper = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 980px) {
    width: 100%;
  }
`;

const Info = styled.div`
  font-family: paybooc-Light;
  font-size: 1.25rem;
  margin: 1.875rem 0 3.438rem 0;

  & div {
    margin: 1.2rem 0;
  }

  & span {
    font-family: paybooc-bold;
    color: #2b61e1;
  }

  @media (max-width: 980px) {
    font-size: 1.188rem;
    margin-left: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-left: 3.125rem;
  }

  @media (max-width: 600px) {
    font-size: 0.938rem;
    margin-left: 1.25rem;
  }
`;

const CardWrapper = styled.div`
  position: relative;

  @media (max-width: 980px) {
    margin-left: 1.25rem;
  }

  @media (max-width: 768px) {
    margin-left: 3.125rem;
  }

  @media (max-width: 600px) {
    margin-left: 1.25rem;
  }
`;

const User = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  display: flex;
  align-items: center;

  & img {
    border-radius: 50%;
    width: 2.188rem;
    margin-right: 0.5rem;
  }
`;

const TrilsCard = styled.div`
  width: 25rem;
  height: 43.75rem;
  background: url(${(props) => props.url}) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  & svg {
    width: 7.5rem;
  }

  @media (max-width: 980px) {
    width: 18.75rem;
    height: 31.25rem;
  }
`;

const LikeWrapper = styled.div`
  display: flex;
  align-items: center;

    & svg {
        width: 3.125rem;

        @media (max-width: 980px) {
            width: 2.5rem;
        }
    }
  }

  & span {
    margin: 0 0.5rem;

        @media (max-width: 980px) {
            font-size: 0.875rem;
        }
    }
  }
`;

const Tag = styled.span`
  font-family: paybooc-bold;
  color: #2b61e1;
`;

const RightWrapper = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 1.875rem;

  @media (max-width: 980px) {
    margin-right: 1.25rem;
  }

  @media (max-width: 768px) {
    margin-right: 3.125rem;
  }

  @media (max-width: 690px) {
    display: none;
  }
`;

const TrilogWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ImgWrapper = styled.div`
    margin-top: 3.125rem;

    & img {
        width: 56.25rem;

        @media (max-width: 980px) {
            width: 37.5rem;
            margin-left: 1.25rem;
        }
        
        @media (max-width: 768px) {
            width: 25rem;
            margin-left: 3.125rem;
        }
    
        @media (max-width: 600px) {
            width: 18.75rem;
            margin-left: 1.25rem;
        }
    }

    @media (max-width: 768px) {
      width: 400px;
      margin-left: 50px;
    }

    @media (max-width: 600px) {
      width: 300px;
      margin-left: 20px;
    }
  }
`;

const MemberWrapper = styled.div`
  width: 100%;
  min-height: 2700px;
`;

const SectionWrapper = styled.div`
  width: 100%;
  margin: 3.125rem 0;

  & span {
    font-family: paybooc-bold;
    font-size: 18px;
    color: #2b61e1;

    @media (max-width: 980px) {
      margin-left: 1.25rem;
    }

    @media (max-width: 768px) {
      margin-left: 3.125rem;
    }

    @media (max-width: 600px) {
      margin-left: 1.25rem;
    }
  }
`;

const MemberCard = styled.div`
    width: 56.25rem;
    height: 17.5rem;
    box-shadow: 0px 3px 6px #2B61E143;
    border-radius: 10px;
    margin: 1.875rem 0;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        width: 90%;
        height: 100%;
        margin: 1.875rem auto;
        flex-direction: column;
        font-size: 12px;
    }
  }
`;

const MemberImg = styled.img`
  width: 130px;
  height: 130px;
  margin: 30px;
`;

const MemberText = styled.div`
  width: 37.5rem;

  & div {
    margin: 0.5rem 0;

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 12px;
    box-sizing: border-box;
    padding: 0 20px;
  }
`;

const NameTag = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Name = styled.span`
  font-family: paybooc-bold;
  font-size: 20px;
  color: #5a5a5a;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FeatureTag = styled.span`
  font-family: paybooc-Light;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  margin: 0 0.25rem;
  border: 1px solid #2b61e1;
  border-radius: 10px;
  background-color: #2b61e1;
  color: #fff;

  @media (max-width: 768px) {
    padding: 0.1rem 0.5rem;
    font-size: 0.55rem;
  }
`;

const BlueTag = styled.span`
  color: #2b61e1;
`;

export default About;
