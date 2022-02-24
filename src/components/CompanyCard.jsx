import {
  Card,
  CompanyName,
  Info,
  InfoBox,
  Logo,
  LogoContainer,
  MoreInfo,
} from "./styles/CompaniesSection";

function CompanyCard({ name, logo, info, infoLink }) {
  return (
    <Card>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <CompanyName>{name}</CompanyName>

      <InfoBox>
        <Info>{info}</Info>
        <MoreInfo>Know More</MoreInfo>
      </InfoBox>
    </Card>
  );
}

export default CompanyCard;
