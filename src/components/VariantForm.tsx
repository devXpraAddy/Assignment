import { Dispatch, SetStateAction, useState } from "react";
import { Variant } from "@/utils/types";

interface Props {
  variants: Variant[];
  setVariants: Dispatch<SetStateAction<Variant[]>>;
  groupBy: "Size" | "Color";
  setGroupBy: Dispatch<SetStateAction<"Size" | "Color">>;
}

const VariantForm: React.FC<Props> = ({
  variants,
  setVariants,
  groupBy,
  setGroupBy,
}) => {
  const [newColor, setNewColor] = useState("");
  const [newSize, setNewSize] = useState("");

  const handlePriceChange = (index: number, price: string | number) => {
    const newVariants = [...variants];
    newVariants[index].price = price;
    setVariants(newVariants);
  };

  const handleAvailableChange = (index: number, available: number) => {
    const newVariants = [...variants];
    newVariants[index].available = available;
    setVariants(newVariants);
  };

  const addColor = () => {
    // Logic to add a new color
  };

  const addSize = () => {
    // Logic to add a new size
  };

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Add New Variants</h2>
        <div className="mb-2">
          <input
            type="text"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
            placeholder="Add new color"
            className="border p-2 mr-2"
          />
          <button
            onClick={addColor}
            className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
          >
            Add Color
          </button>
        </div>
        <div>
          <input
            type="text"
            value={newSize}
            onChange={(e) => setNewSize(e.target.value)}
            placeholder="Add new size"
            className="border p-2 mr-2"
          />
          <button
            onClick={addSize}
            className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
          >
            Add Size
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Group by:</label>
        <select
          value={groupBy}
          onChange={(e) => setGroupBy(e.target.value as "Size" | "Color")}
          className="border p-2"
        >
          <option value="Size">Size</option>
          <option value="Color">Color</option>
        </select>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Variants</h2>
        {variants.map((variant, index) => (
          <div key={index} className="flex space-x-4 items-center mb-2">
            <span className="w-20">{variant.size}</span>
            <span className="w-20">{variant.color}</span>
            <input
              type="text"
              value={variant.price}
              onChange={(e) => handlePriceChange(index, e.target.value)}
              className="border p-2 w-20"
            />
            <input
              type="number"
              value={variant.available}
              onChange={(e) =>
                handleAvailableChange(index, parseInt(e.target.value))
              }
              className="border p-2 w-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VariantForm;
