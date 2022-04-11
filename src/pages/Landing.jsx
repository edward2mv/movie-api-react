import MovieGrid from "../components/MovieGrid";
import Search from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function Landing() {
    const query = useQuery();
    const search = query.get("search");

const debouncedSearch = useDebounce(search, 300);
    return (
    <div>
        <Search />
        <MovieGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
);
}