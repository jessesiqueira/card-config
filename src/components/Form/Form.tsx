/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  InputContainer,
  InputName,
  Label,
  LabelCvc,
  InputCvc,
  Button,
  Span,
  ContainerInputData,
  Div,
  InputCardNumber,
  InputDateM,
  InputDateY,
  Error
} from './style'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ChangeEvent } from 'react'

export interface InputProps {
  name: string
  cardNumber: string
  numberDateM: string
  numberDateY: string
  cvc: string
}

interface IFormInputs {
  setUserName: any
  setUserDateM: any
  setUserDateY: any
  setCvc: any
  setCardNumber: any
  onSubmit: (userData: SubmitHandler<IFormInputs>) => void
}

export function Form(props: IFormInputs) {
  const schema = yup
    .object({
      name: yup.string().required(),
      cardNumber: yup.number().required().min(19),
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
  } = useForm<InputProps>({
    resolver: yupResolver(schema)
  })

  const handleChanger = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target.value !== '') {
      props.setCardNumber(e.target.value)
    } else if (e?.target.value === '') {
      props.setCardNumber('0000 0000 0000 0000')
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
  const hadleChangerName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target.value !== '') {
      props.setUserName(e.target.value)
    } else if (e?.target.value === '') {
      props.setUserName('YOUR NAME')
    }
  }

  const handlerChangerDateM = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target.value !== '') {
      props.setUserDateM(e.target.value)
    } else if (e?.target.value === '') {
      props.setUserDateM('00')
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
  const handlerChangerDateY = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target.value !== '') {
      props.setUserDateY(e.target.value)
    } else if (e?.target.value === '') {
      props.setUserDateY('00')
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
  const handlerChangerCvc = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      props.setCvc(e.target.value)
    } else if (e.target.value === '') {
      props.setCvc('000')
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

  return (
    <InputContainer onSubmit={handleSubmit(props.onSubmit)}>
      <Label htmlFor="InputName">CARDHOLDER NAME</Label>
      <br />
      <InputName
        {...register('name', { required: true, pattern: /^[A-Za-z]+$/i })}
        onChange={hadleChangerName}
        type="text"
        placeholder="Yor Name..."
        maxLength={16}
      />
      {errors.name != null && <Span>Campo obrigatório</Span>}

      <br />
      <Label htmlFor="InputCardNumber">CARD NUMBER</Label>
      <br />
      <InputCardNumber
        maxLength={19}
        minLength={19}
        {...register('cardNumber', { required: true })}
        onChange={handleChanger}
        placeholder="Only Numbers..."
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
        <Error>{errors.numberDateM != null && <Span>Obrigatório</Span>}</Error>
        <Error>{errors.numberDateY != null && <Span>Obrigatório</Span>}</Error>
        <Error>{errors.cvc != null && <Span>Obrigatório</Span>}</Error>
      </Div>
      <Button type="submit">Confirme</Button>
    </InputContainer>
  )
}
