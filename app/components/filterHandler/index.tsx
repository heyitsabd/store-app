"use client";

import { IoChevronDown } from "react-icons/io5";
import { MdChevronLeft } from "react-icons/md";
import { useState } from "react";
import "@/app/components/filterHandler/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

function FilterHandler({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Recommended");
  const data = useSelector((state: RootState) => state.products);
  const options = [
    "Recommended",
    "Newest First",
    "Popular",
    "Price: Low to High",
    "Price: High to Low",
  ];

  return (
    <div className="filter-wrapper">
      <hr />
      <div className="filter-header">
        <div className="filter-toggle">
          <div className="item-count"> {data?.products?.length} ITEMS</div>
          <div className="hide-fliter" onClick={() => setIsOpen(!isOpen)}>
            <MdChevronLeft />
            <span>{isOpen ? "HIDE FILTER" : "SHOW FILTER"}</span>
          </div>
        </div>

        <div
          className="recommended"
          onClick={() => setOpen(!open)}
          style={{ cursor: "pointer" }}
        >
          <p>{selected.toUpperCase()}</p>
          <IoChevronDown
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.2s ease",
            }}
          />
        </div>
      </div>

      {open && (
        <div className="dropdown-menu">
          {options.map((item) => (
            <p
              key={item}
              className={item === selected ? "active" : ""}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
            >
              {item.toUpperCase()}
            </p>
          ))}
        </div>
      )}
      <hr />
    </div>
  );
}

export default FilterHandler;
