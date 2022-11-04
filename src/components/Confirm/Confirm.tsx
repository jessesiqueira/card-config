import { ContainerConfirm, Title, Description, Image, Button } from './style'
import icon from '../../images/icon-complete.svg'

export default function Confirm(props: any) {
  return (
    <ContainerConfirm>
      <Image src={icon} alt="confirmação" />
      <Title>THANK YOU!</Title>
      <Description>{`We've added your card details`}</Description>
      <Button type="submit" onClick={() => props.setConfirm(false)}>
        Continue
      </Button>
      <img src="" alt="" />
    </ContainerConfirm>
  )
}
