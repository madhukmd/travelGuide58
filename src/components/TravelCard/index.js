import {
  CardContainer,
  Image,
  Details,
  Name,
  Description,
} from './styledComponents'

const TravelCard = props => {
  const {travelDetails} = props
  const {name, imageUrl, description} = travelDetails

  return (
    <CardContainer>
      <Image src={imageUrl} alt={name} />
      <Details>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Details>
    </CardContainer>
  )
}
export default TravelCard
