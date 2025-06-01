import { useState } from "react";
import { auth, db } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, push } from "firebase/database";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [pick, setPick] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
    } catch (err) {
      alert("Login failed");
    }
  };

  const addMatch = async () => {
    const matchRef = ref(db, "accumulators/today");
    await push(matchRef, { team1, team2, pick });
    setTeam1(""); setTeam2(""); setPick("");
  };

  return (
    <div style={{ padding: 20 }}>
      {!loggedIn ? (
        <div>
          <h2>Admin Login</h2>
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
          <button onClick={login}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Add Match</h2>
          <input placeholder="Team 1" value={team1} onChange={(e) => setTeam1(e.target.value)} /><br />
          <input placeholder="Team 2" value={team2} onChange={(e) => setTeam2(e.target.value)} /><br />
          <input placeholder="Pick" value={pick} onChange={(e) => setPick(e.target.value)} /><br />
          <button onClick={addMatch}>Add Match</button>
        </div>
      )}
    </div>
  );
}
