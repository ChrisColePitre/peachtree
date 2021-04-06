//The card that takes in object and renders UI components with it
import React from 'react'
import * as S from '../../components/styling'
import {connect} from 'react-redux'
import { getData} from './slice'

const Card = ({props}) => {//need to wire in props into thunk here (is that what parenthesis in arrow function is called?)

    return (
      <S.Card>
        <S.CardTitle>{props.title}</S.CardTitle>
        <p>{props.textBody}</p>
        <S.CardActionBox>
          <S.Button onClick = {()=>getData()}>
            Data
          </S.Button>
        </S.CardActionBox>
      </S.Card>
    )
}
const mapDispatch = { getData};

const mapState =(state) => ({
  data: state.cards.data,
  // data: selectData(state),
})



export default connect(mapState,mapDispatch)(Card); 