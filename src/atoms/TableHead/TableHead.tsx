export const TableHead = ({
  promoName,
  type,
  discount,
  endDate,
  products,
  promoStatus
}: {
  promoName: string,
  type: string,
  discount: string,
  endDate: string,
  products: string,
  promoStatus: string
}) => {
  return (
    <thead>
      <tr>
        <th className="bg-[#5c5d5f] text-white rounded-tl-lg px-5 py-2">{promoName}</th>
        <th className="bg-[#5c5d5f] text-white">{type}</th>
        <th className="bg-[#5c5d5f] text-white">{discount}</th>
        <th className="bg-[#5c5d5f] text-white">{endDate}</th>
        <th className="bg-[#5c5d5f] text-white">{products}</th>
        <th className="bg-[#5c5d5f] text-white">{promoStatus}</th>
        <th className="bg-[#5c5d5f] text-white rounded-tr-lg">&nbsp;</th>
      </tr>
    </thead>
  )
}
