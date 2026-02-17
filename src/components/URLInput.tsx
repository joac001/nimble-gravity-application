interface URLInputProps {
  value: string;
  onChange: (value: string) => void;
  onValidate?: () => void;
  error?: string | null;
}

export default function URLInput({ value, onChange, onValidate, error }: URLInputProps) {
  const handleChange = (newValue: string) => {
    onChange(newValue);
    onValidate?.();
  };

  return (
    <div className="flex flex-col w-full gap-1">
      <input
        type="text"
        value={value}
        onChange={e => handleChange(e.target.value)}
        onBlur={onValidate}
        placeholder="Enter URL"
        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
          error != null
            ? 'border-error focus:ring-error'
            : 'border-muted focus:ring-success'
        }`}
      />
      {error != null && <span className="text-error text-xs">{error}</span>}
    </div>
  );
}
