import { Variant } from "@/utils/types";

interface Props {
  variants: Variant[];
}

const VariantTable: React.FC<Props> = ({ variants }) => {
  const totalAvailable = variants.reduce(
    (sum, variant) => sum + variant.available,
    0
  );
  const priceRange = {
    min: Math.min(
      ...variants.map((v) =>
        typeof v.price === "number" ? v.price : parseFloat(v.price)
      )
    ),
    max: Math.max(
      ...variants.map((v) =>
        typeof v.price === "number" ? v.price : parseFloat(v.price)
      )
    ),
  };

  return (
    <div>
      <table className="border-collapse border border-slate-500 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-slate-600 p-2">Size</th>
            <th className="border border-slate-600 p-2">Color</th>
            <th className="border border-slate-600 p-2">Price</th>
            <th className="border border-slate-600 p-2">Available</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((variant, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="border border-slate-700 p-2">{variant.size}</td>
              <td className="border border-slate-700 p-2">{variant.color}</td>
              <td className="border border-slate-700 p-2">{variant.price}</td>
              <td className="border border-slate-700 p-2">
                {variant.available}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <div className="mb-2">
          <span className="font-semibold">Total Available: </span>
          <span>{totalAvailable}</span>
        </div>
        <div>
          <span className="font-semibold">Price Range: </span>
          <span>{`${priceRange.min} - ${priceRange.max}`}</span>
        </div>
      </div>
    </div>
  );
};

export default VariantTable;
