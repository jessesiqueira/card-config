import styled from 'styled-components'

export const HomeComponent = styled.div`
  height: 100vh;
  background-color: aliceblue;
  display: flex;
`
export const BackGround = styled.div`
  background-image: url('../../public/interactive-card-details-form-main/images/bg-main-desktop.png');
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
  background-image: url('../../public/interactive-card-details-form-main/images/bg-card-front.png');
  background-repeat: no-repeat;
  background-size: cover;
`
export const CardBack = styled.div`
  width: 447px;
  height: 245px;
  position: absolute;
  margin-left: 230px;
  margin-top: 470px;
  background-image: url('../../public/interactive-card-details-form-main/images/bg-card-back.png');
  background-repeat: no-repeat;
  background-size: cover;
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
`
export const InputContainer = styled.form`
  width: 300px;
  position: relative;
  margin-left: 600px;
  margin-top: 300px;
`

export const InputName = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  height: 30px;
  width: 300px;
`

export const InputCardNumber = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  height: 30px;
  width: 300px;
`

export const ContainerInputData = styled.div`
  display: flex;
`

export const InputDateM = styled.input`
  width: 60px;
  position: relative;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  height: 30px;
`
export const InputDateY = styled.input`
  width: 60px;
  position: relative;
  margin-left: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  height: 30px;
`

export const InputCvc = styled.input`
  width: 138px;
  margin-left: 22px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  height: 30px;
`
export const Label = styled.label`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
`
export const LabelCvc = styled.label`
  margin-left: 62px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
`
export const Button = styled.button`
  margin-top: 20px;
  align-items: center;
  width: 100%;
  height: 40px;
  color: aliceblue;
  background-color: #23092f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
export const Span = styled.span`
  color: red;
  font-size: 10px;
  position: relative;
  bottom: 5px;
`
export const Div = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10PX;
`
