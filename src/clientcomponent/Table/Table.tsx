"use client";
import { TableHead, TableRow } from "@/atoms"
import data from '@/data/promotions.json'

export function Table() {

  console.log(data[0].name);

  return (
    <table className="table-auto rounded-t-lg w-full">
      <TableHead
        promoName="Name"
        type="Discount Type"
        discount="Discount Off"
        endDate="End Date"
        products="Products"
        promoStatus="Status"
      />
      <tbody>
        {data.map((promo, x) => {
          return (
            <TableRow
              key={x}
              promoName={promo.name}
              type={promo.discountType}
              discount={promo.discountOff}
              endDate={promo.endDate}
              products={promo.product}
              promoStatus={promo.promoStatus}
            />
          )
        })}

      </tbody>
    </table>
  )
}
