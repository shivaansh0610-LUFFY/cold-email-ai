import InputFrom  from "../components/InputForm";
import OutputBox from "../components/OutputBox";
import { useState } from "react";

const Home = () => {
    const [result, setResult] = useState("");
    const handleGenerate = (data) => {
        console.log("Form Data:", data);
        setResult("Generated email will appear here...");
    };
    return(
        <div>
            <h1>🚀 AI Cold Email Generator</h1>
            <InputFrom onGenerate={handleGenerate}/>
            <OutputBox result ={result}/>

        </div>
    );
};
export default Home;
