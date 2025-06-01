export default function MatchCard({ match }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 12, marginBottom: 10 }}>
      <strong>{match.team1}</strong> vs <strong>{match.team2}</strong><br />
      <span>Pick: {match.pick}</span>
    </div>
  );
}
