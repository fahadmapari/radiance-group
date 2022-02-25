import {
  AcheivementBackground,
  AcheivementContainer,
  AcheivementIcon,
  AcheivementList,
  AcheivementName,
  AcheivementNumber,
  AchievementSectionContainer,
  Heading,
} from "./styles/AchievementSection";

import buildingIcon from "../assets/icons/building-icon.png";

function AchievementSection() {
  return (
    <AchievementSectionContainer>
      <Heading>Acheivements</Heading>
      <AcheivementList>
        <Acheivement icon={buildingIcon} name="Projects" number="250+" />
        <Acheivement icon={buildingIcon} name="Projects" number="250+" />
        <Acheivement icon={buildingIcon} name="Projects" number="250+" />
        <Acheivement icon={buildingIcon} name="Projects" number="250+" />
        <Acheivement icon={buildingIcon} name="Projects" number="250+" />
      </AcheivementList>

      <AcheivementBackground />
    </AchievementSectionContainer>
  );
}

function Acheivement({ icon, name, number }) {
  return (
    <AcheivementContainer>
      <AcheivementIcon src={icon} />
      <AcheivementNumber>{number}</AcheivementNumber>
      <AcheivementName>{name}</AcheivementName>
    </AcheivementContainer>
  );
}

export default AchievementSection;
