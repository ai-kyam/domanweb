import React, {  useState } from "react";
import CheckboxGrid from "./Checkboxgrid"; // Import the CheckboxGrid component
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import axios from "axios"; // Import Axios
import { DomainList } from "./Domainlist"; // Assuming you have DomainList component

export default function HomeContent() {
  const placeholders = [
    "Find your next domain at cheap prices...",
    "Find .com domains at cheap prices...",
    "Find .net domains at cheap prices...",
    "Find .ai domains at cheap prices...",
  ];

  const popularDomains = ["com", "net", "in", "io", "online", "org", "biz", "live", "store", "co"];
  const [domainInput, setDomainInput] = useState("");
  const [selectedTlds, setSelectedTlds] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [results, setResults] = useState<any>(null);  // Store the API response here
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDomainInput(e.target.value);
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!domainInput || selectedTlds.length === 0) {
      alert("Please enter a domain name and select at least one TLD.");
      return;
    }

    setLoading(true);
    try {
      const tldParams = selectedTlds.join(",");
      const apiUrl = `/api/proxy?keyword=${encodeURIComponent(
        domainInput
      )}&tlds=${encodeURIComponent(tldParams)}`;

      const response = await axios.get(apiUrl);
      setResults(response.data); // Update the state with the API response
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error fetching domain suggestions:", error.message);
      alert("Failed to fetch domain suggestions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-200 text-black py-5 w-screen px-6 relative">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />

      <CheckboxGrid
        heading="Most Popular Domain Extensions"
        domains={popularDomains}
        onSelectionChange={setSelectedTlds}
      />

      <form onSubmit={handleFormSubmit}>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Check Availability
        </button>
      </form>

      {loading && <p className="mt-4">Loading domain suggestions...</p>}

      {results && (
        <div className="mt-6 p-4 bg-white shadow-md rounded">
          <h2 className="text-xl font-semibold mb-4">Domain Availability</h2>
          <DomainList data={results.data} />
        </div>
      )}
    </div>
  );
}
