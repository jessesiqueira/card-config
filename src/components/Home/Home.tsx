import {
  HomeComponent,
  BackGround,
  CardFront,
  CardBack,
  InfoCardFront,
  InfoContainer,
  UserName,
  UserDate,
  UserCvc,
  ContainerInputData,
  InputCardNumber,
  InputContainer,
  InputDateM,
  InputDateY,
  InputName,
  InputCvc,
  Label,
  LabelCvc,
  Button,
  Span,
  Div
} from './style'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface IFormInputs {
  name: string
  cardNumber: string
  numberDateM: string
  numberDateY: string
  cvc: string
}

export default function Home() {
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000')
  const [userName, setUserName] = useState('YOUR NAME')
  const [userDateM, setUserDateM] = useState('00')
  const [userDateY, setUserDateY] = useState('00')
  const [cvc, setCvc] = useState('000')

  const schema = yup
    .object({
      name: yup.string().required(),
      cardNumber: yup.number().positive().integer().required(),
      numberDateM: yup.number().positive().integer().required(),
      numberDateY: yup.number().positive().integer().required(),
      cvc: yup.number().positive().integer().required()
    })
    .required()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  const handleChanger = (e: ChangeEvent<HTMLInputElement> | undefined) => {
    if (e?.target.value !== '') {
      setCardNumber(e.target.value)
    } else if (e?.target.value === '') {
      setCardNumber('0000 0000 0000 0000')
    }
    if (e !== undefined && e.target.value !== '') {
      const cleanValue = e.target.value
        .replace(/[^0-9]/, '')
        .replaceAll(' ', '')
      const newValue = cleanValue.match(/.{1,4}/g)?.join(' ')
      const finalValue = newValue ?? cleanValue
      setValue('cardNumber', finalValue)
      console.log(newValue)
    }
  }
  const hadleChangerName = (e: ChangeEvent<HTMLInputElement> | undefined) => {
    if (e?.target.value !== '') {
      setUserName(e.target.value)
    } else if (e?.target.value === '') {
      setUserName('YOUR NAME')
    }
  }

  const handlerChangerDateM = (
    e: ChangeEvent<HTMLInputElement> | undefined
  ) => {
    if (e?.target.value !== '') {
      setUserDateM(e.target.value)
    } else if (e?.target.value === '') {
      setUserDateM('00')
    }
    if (e !== undefined && e.target.value !== '') {
      const cleanValue = e.target.value
        .replace(/[^0-9]/, '')
        .replaceAll(' ', '')
      const newValue = cleanValue.match(/.{1,4}/g)?.join(' ')
      const finalValue = newValue ?? cleanValue
      setValue('numberDateM', finalValue)
      console.log(newValue)
    }
  }
  const handlerChangerDateY = (e) => {
    if (e?.target.value !== '') {
      setUserDateY(e.target.value)
    } else if (e?.target.value === '') {
      setUserDateY('00')
    }
    if (e !== undefined && e.target.value !== '') {
      const cleanValue = e.target.value
        .replace(/[^0-9]/, '')
        .replaceAll(' ', '')
      const newValue = cleanValue.match(/.{1,4}/g)?.join(' ')
      const finalValue = newValue ?? cleanValue
      setValue('numberDateY', finalValue)
      console.log(newValue)
    }
  }
  const handlerChangerCvc = (e) => {
    if (e.target.value !== ''){
      setCvc(e.target.value)
    } else if (e.target.value === ''){
      setCvc('000')
    }
    if (e !== undefined && e.target.value !== '') {
      const cleanValue = e.target.value
        .replace(/[^0-9]/, '')
        .replaceAll(' ', '')
      const newValue = cleanValue.match(/.{1,4}/g)?.join(' ')
      const finalValue = newValue ?? cleanValue
      setValue('cvc', finalValue)
      console.log(newValue)
    }
  }

  function onSubmit(userData: string | number) {
    console.log(userData)
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
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="InputName">CARDHOLDER NAME</Label>
        <br />
        <InputName
          {...register('name', { required: true })}
          onChange={hadleChangerName}
          type="text"
          placeholder="e.g. Jesse Siqueira"
        />
        {errors.name != null && <Span>Campo obrigatório</Span>}

        <br />
        <Label htmlFor="InputCardNumber">CARD NUMBER</Label>
        <br />
        <InputCardNumber
          maxLength={19}
          {...register('cardNumber', { required: true })}
          onChange={handleChanger}
          placeholder="e.g. 1234 5678 9101 1121"
        />
        {errors.cardNumber != null && <Span>Campo obrigatório</Span>}

        <br />
        <Label htmlFor="InputDateM">EX. DATE (MM/YY)</Label>
        <LabelCvc htmlFor="InputCvc">CVC</LabelCvc>
        <ContainerInputData>
          <br />
          <InputDateM
            maxLength={2}
            {...register('numberDateM', { required: true })}
            onChange={handlerChangerDateM}
            placeholder="MM"
          />

          <InputDateY
            maxLength={2}
            {...register('numberDateY', { required: true })}
            onChange={handlerChangerDateY}
            placeholder="YY"
          />

          <InputCvc
            maxLength={3}
            {...register('cvc', { required: true })}
            placeholder="e.g. 123"
            onChange={handlerChangerCvc}
          />
        </ContainerInputData>
        <Div>
          {errors.numberDateM != null && <Span>Obrigatório</Span>}
          {errors.numberDateY != null && <Span>Obrigatório</Span>}
          {errors.cvc != null && <Span>Obrigatório</Span>}
        </Div>
        <Button type="submit">Confirme</Button>
      </InputContainer>
    </HomeComponent>
  )
}
