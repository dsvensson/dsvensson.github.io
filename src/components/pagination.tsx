import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

interface PaginationProps {
  numPages: number
  currentPage: number
  ellipsis: number
}

const Navigation = styled.ul`
  display: flex;
  flex-rap: wrap;
  justify-content: center;
  list-style: none;
  font-size: 22px;
  margin-top: ${({ theme }) => theme.magic * 2}rem;
  margin-bottom: ${({ theme }) => (theme.magic * 7) / 5}rem;
  margin-left: -${({ theme }) => theme.magic * 2}rem;
  margin-right: -${({ theme }) => theme.magic * 2}rem;
`

const Item = styled.li`
  padding: 0.7rem;
  margin: 0.5rem;
  padding-bottom: 0;
`

const SelectedItem = styled(Item)`
  border-bottom: 0.2rem solid black;
`

const Pagination: React.SFC<PaginationProps> = ({
  numPages,
  currentPage,
  ellipsis,
}): JSX.Element => {
  let elements = []
  for (let i = 1; i <= numPages; i++) {
    if (i == currentPage) {
      if (i == 1) {
        elements.push(
          <SelectedItem key={`pagination1`}>
            <Link to={`/#listing`}>{i}</Link>
          </SelectedItem>,
        )
      } else {
        elements.push(
          <SelectedItem key={`pagination${i}`}>
            <Link to={`/${i}#listing`}>{i}</Link>
          </SelectedItem>,
        )
      }
    } else {
      if (i == 1) {
        elements.push(
          <Item key={`pagination1`}>
            <Link to={`/#listing`}>{i}</Link>
          </Item>,
        )
      } else {
        elements.push(
          <Item key={`pagination${i}`}>
            <Link to={`/${i}#listing`}>{i}</Link>
          </Item>,
        )
      }
    }
  }

  return <Navigation>{elements}</Navigation>
}

export default Pagination
