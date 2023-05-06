import styled from 'styled-components'

export const CardContainer = styled.li`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  transition: 0.5s;
  :hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px 5px #334155;
  }
  @media screen and (max-width: 567px) {
    width: 90%;
  }
`
export const Image = styled.img`
  width: 100%;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 10px;
`
export const Name = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #475569;
  margin: 8px 0;
  font-weight: bold;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  margin: 0;
  margin-bottom: 20px;
  @media screen and (max-width: 567px) {
    margin-bottom: 10px;
  }
`
