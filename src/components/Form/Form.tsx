/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  InputContainer,
  InputName,
  Label,
  LabelCvc,
  InputCvc,
  Button,
  ContainerInputData,
  Div,
  InputCardNumber,
  InputDateM,
  InputDateY,
  Error,
  Span
} from './style'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ChangeEvent } from 'react'
import { name } from '../../utils/validation'

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
  onSubmit: (userData: InputProps) => void
}

export function Form(props: IFormInputs) {
  const schema = yup
    .object({
      name: yup
        .string()
        .required('Required field')
        .matches(name, 'Only Letters'),
      cardNumber: yup
        .string()
        .required('Required field')
        .min(19, '19 Characters Required'),
      numberDateM: yup.string().required('Required').min(2, '2 Min.'),
      numberDateY: yup.string().required('Required').min(2, '2 Min.'),
      cvc: yup.string().required('Required').min(3, '3 Min.')
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

  function onError(error: any) {
    console.log('error', error)
  }

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
    }
  }

  return (
    <InputContainer onSubmit={handleSubmit(props.onSubmit, onError)}>
      <Label htmlFor="InputName">CARDHOLDER NAME</Label>
      <br />
      <InputName
        {...register('name', { required: true, pattern: /^[A-Za-z]+$/i })}
        onChange={hadleChangerName}
        type="text"
        placeholder="Yor Name..."
        maxLength={16}
      />
      {errors.name != null && <Span>{errors.name.message}</Span>}

      <br />
      <Label htmlFor="InputCardNumber">CARD NUMBER</Label>
      <br />
      <InputCardNumber
        maxLength={19}
        minLength={19}
        type="tel"
        {...register('cardNumber', { required: true })}
        onChange={handleChanger}
        placeholder="Only Numbers..."
      />
      {errors.cardNumber != null && <Span>{errors.cardNumber.message}</Span>}

      <br />
      <Label htmlFor="InputDateM">EX. DATE (MM/YY)</Label>
      <LabelCvc htmlFor="InputCvc">CVC</LabelCvc>
      <ContainerInputData>
        <br />
        <InputDateM
          maxLength={2}
          type="tel"
          {...register('numberDateM', { required: true })}
          onChange={handlerChangerDateM}
          placeholder="MM"
        />

        <InputDateY
          maxLength={2}
          type="tel"
          {...register('numberDateY', { required: true })}
          onChange={handlerChangerDateY}
          placeholder="YY"
        />

        <InputCvc
          maxLength={3}
          type="tel"
          {...register('cvc', { required: true })}
          placeholder="e.g. 123"
          onChange={handlerChangerCvc}
        />
      </ContainerInputData>
      <Div>
        <Error>
          {errors.numberDateM != null && (
            <Span>{errors.numberDateM.message}</Span>
          )}
        </Error>
        <Error>
          {errors.numberDateY != null && (
            <Span>{errors.numberDateY.message}</Span>
          )}
        </Error>
        <Error>{errors.cvc != null && <Span>{errors.cvc.message}</Span>}</Error>
      </Div>
      <Button type="submit">Confirme</Button>
    </InputContainer>
  )
}
