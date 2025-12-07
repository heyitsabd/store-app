"use client";

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import "@/app/components/categorySelection/styles.css";

interface Category {
  title: string;
  options?: string[];
}

interface Props {
  data: Category[];
}

export default function CategorySelection({ data }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});

  const handleSelect = (categoryTitle: string, option: string) => {
    setSelectedOptions((prev) => ({ ...prev, [categoryTitle]: option }));
  };

  return (
    <div className="category-wrapper">
      <div className="customizable">
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable">CUSTOMIZABLE</label>
      </div>

      <hr />

      {data.map((item, index) => (
        <div
          key={index}
          className="category-item"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="category-title">
            <span>{item.title}</span>
            <IoChevronDown
              className={`arrow ${openIndex === index ? "rotate" : ""}`}
            />
          </div>
          <p
            className={`placeholder ${
              selectedOptions[item.title] ? "selected" : ""
            }`}
            onClick={() => handleSelect(item.title, "All")}
          >
            All
          </p>

          {openIndex === index && (
            <>
              <div className="category-content">
                {item.options?.map((opt, i) => (
                  <p
                    key={i}
                    className={`option ${
                      selectedOptions[item.title] === opt ? "selected" : ""
                    }`}
                    onClick={() => handleSelect(item.title, opt)}
                  >
                    {opt}
                  </p>
                ))}
              </div>
            </>
          )}

          <hr />
        </div>
      ))}
    </div>
  );
}
