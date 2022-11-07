import styled from 'styled-components'
import bgMain from '../../images/bg-main-desktop.png'
import bgCardFront from '../../images/bg-card-front.png'
import bgCardBack from '../../images/bg-card-back.png'
import bgMainMb from '../../images/bg-main-mobile.png'

export const HomeComponent = styled.div`
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  @media screen and (max-width: 896px) {
    height: 100%;
    width: 100%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 660px) {
    height: 100vh;
    width: 100%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
  }
`
export const BackGround = styled.div`
  background-image: url(${bgMain});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 470px;
  height: 100vh;

  @media screen and (max-width: 890px) {
    background-image: url(${bgMainMb});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    height: 300px;
  }
`
export const CardFront = styled.div`
  width: 447px;
  height: 245px;
  position: absolute;
  margin-left: 150px;
  margin-top: 180px;
  background-image: url(${bgCardFront});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1400px) {
    width: 447px;
    height: 245px;
    position: absolute;
    margin-left: 150px;
    margin-top: 100px;
    background-image: url(${bgCardFront});
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (max-width: 890px) {
    width: 292px;
    height: 160px;
    position: absolute;
    margin-left: 15px;
    z-index: calc(1);
    margin-top: 180px;
    background-image: url(${bgCardFront});
    background-repeat: no-repeat;
    background-size: cover;
  }
`
export const CardBack = styled.div`
  width: 447px;
  height: 245px;
  position: absolute;
  margin-left: 230px;
  margin-top: 470px;
  background-image: url(${bgCardBack});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1400px) {
    width: 447px;
    height: 245px;
    position: relative;
    margin-left: 230px;
    margin-top: 370px;
    background-image: url(${bgCardBack});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media screen and (max-width: 890px) {
    width: 292px;
    height: 160px;
    position: absolute;
    margin-left: 80px;
    margin-top: 89px;
    background-image: url(${bgCardBack});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media screen and (max-width: 660px) {
    width: 292px;
    height: 160px;
    position: absolute;
    margin-left: 80px;
    margin-top: 89px;
    background-image: url(${bgCardBack});
    background-repeat: no-repeat;
    background-size: cover;
  }
`
export const InfoCardFront = styled.p`
  position: relative;
  margin-top: 100px;
  margin-left: 30px;
  font-size: 30px;
  color: aliceblue;

  @media screen and (max-width: 850px) {
    position: relative;
    margin-top: 70px;
    margin-left: 60px;
    font-size: 17px;
    color: aliceblue;
  }
`
export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  color: aliceblue;
  font-size: 15px;
  margin-top: 40px;
  margin-left: 26px;
  gap: 110px;
`
export const UserName = styled.p`
  @media screen and (max-width: 890px) {
  }
`

export const UserDate = styled.p`
  @media screen and (max-width: 890px) {
  }
`

export const UserCvc = styled.p`
  color: aliceblue;
  position: relative;
  margin-top: 110px;
  margin-left: 360px;
  @media screen and (max-width: 1400px) {
    color: aliceblue;
    top: 110px;
    position: relative;
    margin-top: 10px;
    margin-left: 360px;
  }

  @media screen and (max-width: 890px) {
    color: aliceblue;
    top: 60px;
    position: relative;
    margin-top: 8px;
    margin-left: 230px;
    font-size: 16px;
  }
`
