interface URLInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string | null;
}

export default function URLInput({ value, onChange, error }: URLInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Enter URL"
        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
          error != null ? 'border-error focus:ring-error' : 'border-muted focus:ring-success'
        }`}
      />
    </div>
  );
}
