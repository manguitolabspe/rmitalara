
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Pariñas', familias: 45 },
  { name: 'Lobitos', familias: 20 },
  { name: 'El Alto', familias: 30 },
  { name: 'Máncora', familias: 25 },
  { name: 'La Brea', familias: 15 },
  { name: 'Los Órganos', familias: 18 },
];

// Brand colors for the chart
const BAR_COLOR = '#EC407A'; // brand-accent
const TEXT_COLOR = '#374151'; // brand-dark
const GRID_COLOR = '#E0E0E0';

// Custom Tooltip for a branded look
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 bg-brand-primary/90 text-white rounded-lg shadow-lg border border-brand-secondary/50 backdrop-blur-sm">
        <p className="font-bold text-base">{label}</p>
        <p className="text-sm">{`Familias Beneficiadas: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};


const ImpactChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20, right: 30, left: 0, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
          <XAxis dataKey="name" tick={{ fill: TEXT_COLOR, fontSize: 14 }} stroke={TEXT_COLOR} />
          <YAxis tick={{ fill: TEXT_COLOR, fontSize: 14 }} stroke={TEXT_COLOR} />
          <Tooltip 
            content={<CustomTooltip />}
            cursor={{fill: 'rgba(236, 64, 122, 0.15)'}}
          />
          <Legend wrapperStyle={{ color: TEXT_COLOR, paddingTop: '20px' }} />
          <Bar dataKey="familias" name="Familias Beneficiadas" fill={BAR_COLOR} radius={[4, 4, 0, 0]} animationDuration={800}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ImpactChart;
