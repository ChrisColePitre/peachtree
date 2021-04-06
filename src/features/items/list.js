import React from 'react'
import {connect} from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import {clickReducer} from './slice'
import * as S from '../../components/styling'


const ItemList = ({items, data, clickReducer, getData})=> (
    <S.Card>
        <S.CardTitle>My Data Sorting Example</S.CardTitle>
        <p>This example shows you a Redux resource in action! It uses specific features of redux-toolkit, RTK, to dynamically sort the data based on the button clicks. The potential use for this goes way beyond the crude table below, but again, gotta find the most cost effective hosting solutions.</p>
        <S.CardContentBox>
            <S.Table>
                {items.map(item=>{
                            let id = item.id
                            let name = item.name
                            let age = item.age.toString()
                return(
                    <S.Row>
                <S.FauxDataTableCell>
                        <p>{id}</p>
                </S.FauxDataTableCell>
                <S.FauxDataTableCell>
                        <p>{name}</p>
                </S.FauxDataTableCell>
                <S.FauxDataTableCell>
                        <p>{age}</p>
                </S.FauxDataTableCell>
                </S.Row>)
                })    
                }
            </S.Table>
        </S.CardContentBox>
        <S.CardActionBox>
            <S.Button onClick={()=>clickReducer({sortDir: 'asc'})}>ASCEND</S.Button> 
            <S.Button onClick={()=>clickReducer({sortDir: 'desc'})}>DESCEND</S.Button> 
            <S.Button onClick={()=>clickReducer({sortDir: 'res'})}>RESET</S.Button>  
        </S.CardActionBox>
    </S.Card>
    )


const selectList = (state)=> [...state.items.list];
// const selectData = (state) => state.items.data;
const selectDirection = (state)=> state.items.sortDir;
const selectSortColumn = (state) => state.items.sortCol;
// const selectSearchTerms = (state) => [...state.items.searchTerms];
const selectSortedData = createSelector([selectList,selectDirection, selectSortColumn],(list, sortDir, sortCol)=>{
        switch (sortDir){
            case 'desc':
                // if(!secSortCol){ 
                return list.sort((a,b)=> (a[sortCol]>b[sortCol]) ? -1 : 1);
                // }else return list.sort((a,b)=> ())
            case 'asc': 
                return list.sort((a,b)=> (a[sortCol]>b[sortCol]) ? 1 : -1);
            case 'res':
                return list;
            default:
                return list;
        }
})
// const selectSecSortCol = (state) => state.items.secSortCol;
// // const selectMultiSortedData = createSelector([selectSortedData, selectSecSortCol], (data, secSortCol)=>{

// })
// const selectSearchedData = createSelector([selectSortedData, selectSearchTerms], (data, searchTerms)=>{
//     // switch (searchTerms){
//          if(searchTerms.length===1){
//             console.log('searchTerms is length of 1')
//             return data.c; }
//         else if(searchTerms.length>1){
//             console.log('searchTerms length is greater than 1')
//             return data;}
//         else{
//             console.log('searchTerms is length of 0')
//             return data;}
//     // }
// })

const mapStateToProps =(state) => ({
    items: selectSortedData(state),
    // data: selectData(state),
})

const mapDispatchToProps = {clickReducer};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

