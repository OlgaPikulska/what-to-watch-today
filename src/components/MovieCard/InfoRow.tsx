type InfoRowProps = {
	label: string;
	value: React.ReactNode;
};

export const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
	<div className="flex flex-col">
		<strong className="font-semibold text-footertext">{label}</strong>
		<span className="">{value}</span>
	</div>
);
