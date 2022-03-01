import styled from 'styled-components';

export const FilterContainer = styled.div`
	width: 90%;
  margin: 5rem auto;
`;

export const FilterHeading = styled.h2`
  font-size: 3.5rem;
  font-weight: 400;
  text-align: center;
`;

export const FilterList = styled.div`
  display: flex;
	align-items: center;
`;

export const Filter = styled.a`
	font-size: 2.5rem;
	border: 2px solid ${({ theme }) => theme.colors.primary};
	padding: 0.5rem 1.3rem;
	border-radius: 30px;
	color: ${({ theme }) => theme.colors.primary};
`;