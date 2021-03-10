import React,{useMemo} from 'react'
import {useTable} from 'react-table'
import { getAllJobs } from '../../services/jobs/getAllJobs'
import { COLUMNS } from './Columns'
import '../Columns/Table.module.css'



export default function Table() {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(()=>{ 
    getAllJobs().then(jobs=>{
      return jobs
    })
  },[]) 

  console.log(data)

  const tableInstance = useTable({
    columns,
    data
  })

 const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow
 } =tableInstance 
  return (
    <table {...getTableProps}>
     
        <thead>
          {
            headerGroups.map(headerGroup=>(
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.header.map(column=>(
                     <th {...column.getHeaderProps()}>
                       {
                         column.render('header')
                       }
                     </th>
                  ))
                }
          
          </tr>
            ))
          }
          
        </thead>
        <tbody {...getTableBodyProps}>
          {
            rows.map(row=>{
              prepareRow(row)
              return(
                <tr {...row.getRowProps()}>
            {
             row.cells.map(cell=>{
               return <td {...cell.getCellProps()}>
                 {cell.render('cell')}
               </td>
             })
             }
          </tr> 
              )
            })
          }
       
        </tbody>
      
    </table>
  )
}
