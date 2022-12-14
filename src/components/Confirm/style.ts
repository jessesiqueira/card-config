import styled from 'styled-components'

export const ContainerConfirm = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 300px;
  position: relative;
  margin-left: 600px;
  margin-top: 250px;
  align-items: center;

  @media screen and (max-width: 1400px) {
    color: aliceblue;
    position: relative;
    margin-top: 120px;
    margin-left: 390px;
  }
  @media screen and (max-width: 898px) {
    width: 300px;
    position: relative;
    margin-top: 200px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`
export const Title = styled.h1`
  color: #23092f;
`
export const Description = styled.h2`
  color: #adadad;
  font-size: 16px;
  margin-top: 30px;
`
export const Image = styled.img`
  width: 80px;
  padding-bottom: 20px;
`

export const Button = styled.button`
  margin-top: 30px;
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
