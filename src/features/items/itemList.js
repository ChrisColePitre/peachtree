import React from 'react'
import {connect} from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import {clickReducer, getData} from './itemsSlice'


const ItemList = ({items, data, clickReducer, getData})=> (
    <div style={{height:400, width: '100%'}}>
    {items.map(item=>{
                let id = item.id
                let name = item.name
                let age = item.age.toString()
       return(
       <div>
             <p>{id+ '  '+ name +'  ' +age}</p>
       </div>)
    })    
    }
    {!data ? null : data.map(d=>{
        let userId= d.userId
        let id = d.id
        let title = d.title
        return(<div>
            <p>{userId+ ' ' + id + ' ' + title}</p>
        </div>)
    })}
    {/* <DataGrid row={data} columns={columns} pageSize={10}/>*/}
        <button onClick={()=>clickReducer({sortDir: 'asc'})}>ASCEND</button> 
        <button onClick={()=>clickReducer({sortDir: 'desc'})}>DESCEND</button> 
        <button onClick={()=>getData()}>DATA</button> 
    </div>
    )


const selectList = (state)=> [...state.items.list];
const selectData = (state) => state.items.data;
const selectDirection = (state)=> state.items.sortDir;
const selectSortColumn = (state) => state.items.sortCol;
const selectSearchTerms = (state) => [...state.items.searchTerms];
const selectSortedData = createSelector([selectList,selectDirection, selectSortColumn],(list, sortDir, sortCol)=>{
        switch (sortDir){
            case 'desc':
                // if(!secSortCol){ 
                return list.sort((a,b)=> (a[sortCol]>b[sortCol]) ? -1 : 1);
                // }else return list.sort((a,b)=> ())
            case 'asc': 
                return list.sort((a,b)=> (a[sortCol]>b[sortCol]) ? 1 : -1);
            default:
                return list;
        }
})
const selectSecSortCol = (state) => state.items.secSortCol;
// const selectMultiSortedData = createSelector([selectSortedData, selectSecSortCol], (data, secSortCol)=>{

// })
const selectSearchedData = createSelector([selectSortedData, selectSearchTerms], (data, searchTerms)=>{
    // switch (searchTerms){
         if(searchTerms.length===1){
            console.log('searchTerms is length of 1')
            return data.c; }
        else if(searchTerms.length>1){
            console.log('searchTerms length is greater than 1')
            return data;}
        else{
            console.log('searchTerms is length of 0')
            return data;}
    // }
})

const mapStateToProps =(state) => ({
    items: selectSearchedData(state),
    data: selectData(state),
})

const mapDispatchToProps = {clickReducer, getData};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

