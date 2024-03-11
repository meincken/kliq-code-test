import { TableHead, TableRow } from "@/atoms"

export const Table = () => {
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
        <TableRow
          promoName="Subscription name"
          type="Premium"
          discount="300-£GDP"
          endDate="dd/mm/yy"
          products="Meal plan"
          promoStatus="active"
        />
        <TableRow
          promoName="Subscription name"
          type="Premium"
          discount="40%"
          endDate="dd/mm/yy"
          products="Course"
          promoStatus="active"
        />
        <TableRow
          promoName="Subscription name"
          type="Premium"
          discount="300 - €EUR"
          endDate="dd/mm/yy"
          products="Meal plan"
          promoStatus="active"
        />
        <TableRow
          promoName="Subscription name"
          type="Premium"
          discount="300-$USD"
          endDate="dd/mm/yy"
          products="Meal plan"
          promoStatus="active"
        />
        <TableRow
          promoName="Subscription name"
          type="Premium"
          discount="40%"
          endDate="dd/mm/yy"
          products="Meal plan"
          promoStatus="active"
        />
      </tbody>
    </table>
  )
}
