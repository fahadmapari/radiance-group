import styled from "styled-components";

export const TestimonialsPageSection = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  grid-gap: 5rem;
`;

export const Testimonial = styled.div`
  width: 55rem;
  padding: 1.5rem;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const TestimonialContent = styled.div`
  width: 100%;
  height: 30rem;
  background: lightgray;
  border-radius: 25px;
`;

export const TestimonialVideo = styled.video`
  height: 100%;
  width: 100%;
`;

export const TestimonialText = styled.p``;

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
