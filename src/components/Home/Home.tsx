import {
  HomeComponent,
  BackGround,
  CardFront,
  CardBack,
  InfoCardFront,
  InfoContainer,
  UserName,
  UserDate,
  UserCvc
} from './style'
import { Form, InputProps } from '../Form/Form'
import Confirm from '../Confirm/Confirm'
import { useState } from 'react'
export default function Home() {
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000')
  const [userName, setUserName] = useState('YOUR NAME')
  const [userDateM, setUserDateM] = useState('00')
  const [userDateY, setUserDateY] = useState('00')
  const [cvc, setCvc] = useState('000')
  const [confirm, setConfirm] = useState(false)

  function onSubmit(userData: InputProps) {
    setConfirm(true)
    console.log(setConfirm)
  }
  return (
    <HomeComponent>
      <BackGround>
        <CardFront>
          <InfoCardFront>{cardNumber}</InfoCardFront>
          <InfoContainer>
            <UserName>{userName}</UserName>
            <UserDate>
              {userDateM}/{userDateY}
            </UserDate>
          </InfoContainer>
        </CardFront>
        <CardBack>
          <UserCvc>{cvc}</UserCvc>
        </CardBack>
      </BackGround>
      {confirm ? (
        <Confirm setConfirm={setConfirm}/>
      ) : (
        <Form
          onSubmit={onSubmit}
          setCardNumber={setCardNumber}
          setUserName={setUserName}
          setUserDateM={setUserDateM}
          setUserDateY={setUserDateY}
          setCvc={setCvc}
        />
      )}
    </HomeComponent>
  )
}
