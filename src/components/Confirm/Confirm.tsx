import { ContainerConfirm, Title, Description, Image, Button } from './style'

export default function Confirm() {
  return (
    <ContainerConfirm>
      <Image
        src="../../public/interactive-card-details-form-main/images/icon-complete.svg"
        alt="confirmação"
      />
      <Title>THANK YOU!</Title>
      <Description>{`We've added your card details`}</Description>
      <Button type="submit">Continue</Button>
    </ContainerConfirm>
  )
}
