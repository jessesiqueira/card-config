import styled from 'styled-components'

export const InputContainer = styled.form`
  width: 300px;
  position: relative;
  margin-left: 600px;
  margin-top: 300px;

  @media screen and (max-width: 1400px) {
    width: 300px;
    position: relative;
    margin-left: 400px;
    margin-top: 200px;
  }
`
export const InputName = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  height: 30px;
  width: 300px;
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
export const InputCvc = styled.input`
  width: 138px;
  margin-left: 22px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  height: 30px;
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
  font-size: large;
`

export const Div = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10px;
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
export const Error = styled.div`
  width: 55px;
`

export const Span = styled.span`
  color: red;
  font-size: 10px;
  position: relative;
  bottom: 5px;
`
