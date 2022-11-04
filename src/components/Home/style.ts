import styled from 'styled-components'
import bgMain from '../../images/bg-main-desktop.png'
import bgCardFront from '../../images/bg-card-front.png'
import bgCardBack from '../../images/bg-card-back.png'

export const HomeComponent = styled.div`
  height: 100vh;
  background-color: aliceblue;
  display: flex;
`
export const BackGround = styled.div`
  background-image: url(${bgMain});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 470px;
  height: 100vh;
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
`
export const InfoCardFront = styled.p`
  position: relative;
  margin-top: 100px;
  margin-left: 30px;
  font-size: 30px;
  color: aliceblue;
`
export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  color: aliceblue;
  margin-top: 70px;
  margin-left: 30px;
  gap: 220px;
`
export const UserName = styled.p``

export const UserDate = styled.p``

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
`
