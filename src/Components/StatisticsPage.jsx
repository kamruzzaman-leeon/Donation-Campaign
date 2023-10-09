import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Your Donations', value: 4 },
  { name: 'Total Donations', value: 12 },
];

const COLORS = ['#00C49F', '#FF444A'];

const StatisticsPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-xl font-semibold mb-4">Donation Statistics</h2>
      <ResponsiveContainer width="100%" height="60%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
              const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

              return (
                <text
                  x={x}
                  y={y}
                  fill="white"
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                >
                  {`${(percent * 100).toFixed(1)}%`}
                </text>
              );
            }}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [value, name]} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center mt-4">
        {data.map((entry, index) => (
          <div
            key={`legend-${index}`}
            className="flex  mx-4"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <span>{entry.name}</span>
            <div 
              style={{
                width: '20vh',
                height: '10px',
                backgroundColor: COLORS[index % COLORS.length],
                marginLeft: '5px',
                borderRadius: '5%',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsPage;
