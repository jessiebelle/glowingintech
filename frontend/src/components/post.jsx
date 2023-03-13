const Post = ({ id, detail_url, stockPrice, timeElapsed }) => {
  if (!company) return <div />
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{company}</h5>
          </td>
          <td>
            <h5>{ticker}</h5>
          </td>
          <td>
            <h4>{stockPrice}</h4>
          </td>
          <td>
            <p>{timeElapsed}</p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
