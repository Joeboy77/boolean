import React, { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function Form() {
  const [functionString, setFunctionString] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/v1/boolean/process", { functionString });
      setResults(response.data);
    } catch (error) {
      console.error("Error processing function: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <header className="app-header">
        <h1>Boolean Function Simplifier</h1>
        <p>Developed by <strong>Joseph Acheampong</strong></p>
        <div className="developer-info">
          <p>Email: <a href="mailto:joseph.ecktech@gmail.com">joseph.ecktech@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/Joeboy77" target="_blank">github.com/joeboy77</a></p>
        </div>
      </header>
      <form onSubmit={handleSubmit}>
        <label>Enter Function (e.g., F(A, B, C, D)=Σm(1, 3, 4, ...)):</label>
        <input
          type="text"
          value={functionString}
          onChange={(e) => setFunctionString(e.target.value)}
          placeholder="Enter Boolean Function"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>
      {results && (
        <div className="results">
          <h3>Results:</h3>
          <p><strong>Canonical SOP:</strong> {results.sop}</p>
          <p><strong>Canonical POS:</strong> {results.pos}</p>
          <p><strong>Minimized Expression:</strong> {results.minimized}</p>
          <p><strong>K-Map Verification:</strong> {results.kMapVerification}</p>
        </div>
      )}
    </div>
  );
}

export default Form;