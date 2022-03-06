import styled from "styled-components";

export const TestimonialsPageSection = styled.div`
  width: 90%;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  grid-gap: 5rem;
`;

export const Testimonial = styled.div`
  width: 100%;
  padding: 1.5rem;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const TestimonialContent = styled.div`
  width: 100%;
  height: 30rem;
  background: lightgray;
  border-radius: 25px;
  position: relative;
`;

export const TestimonialVideo = styled.video`
  height: 100%;
  width: 100%;
`;

export const TestimonialText = styled.p`
  height: 100%;
  width: 100%;
  background: white;
  border-radius: 25px;
  font-size: 1.8rem;
  padding: 1.5rem;
`;

export const PlayBtn = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8rem;
`;

export const TestimonialClientInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const TestimonialClientImage = styled.img`
  width: 10rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const TestimonialClientName = styled.p`
  font-weight: 700;
  font-size: 2.5rem;
`;

export const TestimonialClientPosition = styled.span`
  font-size: 1.8rem;
`;

export const TestimonialClientCompany = styled.span`
  font-size: 1.8rem;
`;
