"use client";
import { useState } from "react";
import WriteToSupabase from "@/app/hooks/WriteToSupabase";

export default function InputForm() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Rehomed: ${inputValue}`);
  };

  WriteToSupabase(393939, inputValue)

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Rehome Now!</h1>
      <form onSubmit={handleSubmit} className="bg-black p-4 rounded-lg shadow-md">
        <input type="text" value={inputValue} onChange={handleChange} className="border p-2 rounded-md w-full" placeholder="Enter breed"/>
        <button type="submit" className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}