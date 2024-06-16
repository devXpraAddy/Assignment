import { useState } from "react";
import VariantForm from "@/components/VariantForm";
import { Variant } from "@/utils/types";

export default function Product() {
  const [variants, setVariants] = useState<Variant[]>([
    { size: "Small", color: "Blue", price: 345.3, available: 40 },
    { size: "Small", color: "Red", price: 345.3, available: 20 },
    { size: "Medium", color: "Blue", price: 23, available: 20 },
    { size: "Medium", color: "Red", price: 45, available: 20 },
  ]);

  const [groupBy, setGroupBy] = useState<"Size" | "Color">("Size");

  const handleSave = () => {
    localStorage.setItem("variants", JSON.stringify(variants));
    window.location.href = "/save";
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Product Variants</h1>
      <VariantForm
        variants={variants}
        setVariants={setVariants}
        groupBy={groupBy}
        setGroupBy={setGroupBy}
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
}
