import newsContext from "../components/NewsContext";
import { useContext } from "react";
export default () => {
    const context = useContext(newsContext);
    return context;
};