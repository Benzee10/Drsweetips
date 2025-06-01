import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { ref, onValue } from "firebase/database";
import MatchCard from "../components/MatchCard";

export default function Home() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const matchesRef = ref(db, "accumulators/today");
    onValue(matchesRef, (snapshot) => {
      const data = snapshot.val();
      const matchList = data ? Object.values(data) : [];
      setMatches(matchList);
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Today's Accumulator</h1>
      {matches.length === 0 ? <p>No matches available yet.</p> : matches.map((match, idx) => (
        <MatchCard key={idx} match={match} />
      ))}
    </div>
  );
}
