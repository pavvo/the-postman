import { useSearchParams } from "react-router-dom";

import "./Search.css";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setSearchParams({});
      return;
    }

    setSearchParams({ q: event.target.value });
  };

  return (
    <input
      type="text"
      placeholder="Search posts by username"
      value={searchParams.get("q") || ""}
      onChange={handleSearch}
    />
  );
}
