import { useState } from "react";

type CheckboxGridProps = {
  heading: string;
  domains: string[];
  onSelectionChange: (selected: string[]) => void; // New Prop
};

export default function CheckboxGrid({ heading, domains, onSelectionChange }: CheckboxGridProps) {
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);

  const handleCheckboxChange = (domain: string) => {
    const updatedDomains = selectedDomains.includes(domain)
      ? selectedDomains.filter((item) => item !== domain) // Remove if deselected
      : [...selectedDomains, domain]; // Add if selected

    setSelectedDomains(updatedDomains);
    onSelectionChange(updatedDomains); // Notify parent
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">{heading}</h2>
      <div className="grid grid-cols-5 gap-2">
        {domains.map((domain, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={domain}
              checked={selectedDomains.includes(domain)}
              onChange={() => handleCheckboxChange(domain)}
              className="form-checkbox"
            />
            <span className="text-gray-800">{domain}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
