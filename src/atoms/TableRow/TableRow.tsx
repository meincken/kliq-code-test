import './tablerow.css'

export const TableRow = ({
  promoName,
  type,
  discount,
  endDate,
  products,
  promoStatus
} : {
  promoName: string,
  type: string,
  discount: string,
  endDate: string,
  products: string,
  promoStatus: string
}) => {

  const productTag = products.toLowerCase().replace(/ /g, "");
  const statusTag = promoStatus.toLowerCase().replace(/ /g, "");

  return (
    <tr>
      <td className="flex items-center py-4 px-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.333" d="M4.667 10 8 13.333 11.333 10M4.667 6 8 2.667 11.333 6"/></svg>

        {promoName}
      </td>
      <td>{type}</td>
      <td>{discount}</td>
      <td>{endDate}</td>
      <td>
        <span className={`tag ${productTag}`}>{products}</span>
      </td>
      <td>
        <span className={`status ${statusTag}`}>
          <svg className='pr-0.5 inline-block' width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5.33337" cy="5" r="5" fill="#1C3838"/>
          </svg>
          {promoStatus}
        </span>
      </td>
      <td>...</td>
    </tr>
  )
}
