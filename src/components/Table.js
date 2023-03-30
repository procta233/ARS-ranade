import React,{useState} from 'react'
import PropTypes from 'prop-types'

const Table =( props) => {
    console.log(props.tableHollow);
    const [heads, setHeads] = useState(props.tableHollow.tableHeads);
  return (
    <table>
      <thead>
        <tr>
          {heads.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      {/* <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody> */}
    </table>
  )
}



export default Table