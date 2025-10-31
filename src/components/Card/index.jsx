import React from 'react'
import { CardContainer, Content, HasInfo, PostInfo, UserInfo, UserPicture } from './styles'
import { FiThumbsUp } from 'react-icons/fi'
const Card = () => {
  return (
    <CardContainer>
      <Content>
        <UserInfo>
          <UserPicture src='https://avatars.githubusercontent.com/u/179970243?v=4'/>
          <div>
            <h4>
              Rafael Alexandre
            </h4>
            <p>Dono da Amazon</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto Kodan</h4>
          <p>Samuel tem que ajeitar aqui</p>
        </PostInfo>
        <HasInfo>
          <h4>#Socorro</h4>
          <p>
            <FiThumbsUp/> 193
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }