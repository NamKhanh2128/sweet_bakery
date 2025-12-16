interface InfoTableProps {
  title: string;
  headerColor: "red" | "green" | "blue" | "gray";
  data: { label: string; value: string }[];
}

const headerColors = {
  red: "table-header-red",
  green: "table-header-green",
  blue: "table-header-blue",
  gray: "table-header-gray",
};

export function InfoTable({ title, headerColor, data }: InfoTableProps) {
  return (
    <div className="border border-bakery-green rounded overflow-hidden">
      <div className={`${headerColors[headerColor]} text-center py-2 font-medium`}>
        {title}
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-2 text-left font-medium border-b border-border w-1/2">Information</th>
            <th className="px-4 py-2 text-left font-medium border-b border-border w-1/2">Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-border last:border-b-0">
              <td className="px-4 py-2 font-medium">{row.label}</td>
              <td className="px-4 py-2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
