interface PronounSelectProps {
  selectedPronoun: string;
  setSelectedPronoun: (value: string) => void;
}

const PronounSelect: React.FC<PronounSelectProps> = ({ selectedPronoun, setSelectedPronoun }) => {
  const pronouns = [
    { value: "she", label: 'She: "Wish her a happy birthday!"' },
    { value: "he", label: 'He: "Wish him a happy birthday!"' },
    { value: "they", label: 'They: "Wish them a happy birthday!"' },
  ];

  const handlePronounChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedPronoun(value);
  };

  return (
    <div className="pronoun-select">
      <select value={selectedPronoun} onChange={handlePronounChange}>
        <option value="">Select your pronoun</option>
        {pronouns.map((pronoun) => (
          <option key={pronoun.value} value={pronoun.value}>
            {pronoun.label}
          </option>
        ))}
      </select>
      <p className="pronoun-info">Your pronoun is visible to everyone.</p>
    </div>
  );
};

export default PronounSelect;