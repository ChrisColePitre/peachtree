//The card that takes in object and renders UI components with it
import React from 'react'
import * as S from '../../components/styling'


const Card = ({props}) => {//need to wire in props into thunk here (is that what parenthesis in arrow function is called?)

    return (
      <S.Card>
        <S.CardTitle>{props.title}</S.CardTitle>
        <p>{props.textBody}</p>
        <S.CardActionBox>
          <S.Button>
            Reset
          </S.Button>
        </S.CardActionBox>
      </S.Card>
    )
}

export default Card; 