"use client";

import React from "react";

interface PaginationProps {
	totalPages: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
	const renderPagination = () => {
		if (totalPages <= 6) {
			// Wyświetl wszystkie numery stron, gdy totalPages <= 6
			return Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
				<button
					key={page}
					onClick={() => onPageChange(page)}
					className={`mx-1 rounded px-3 py-2 ${
						currentPage === page ? "bg-orange-500 text-white" : "bg-gray-200"
					}`}
				>
					{page}
				</button>
			));
		}

		const pages: (number | string)[] = [1]; // Zawsze pokazuj stronę 1

		if (currentPage <= 4) {
			// Jeśli currentPage jest między 1 a 4 i totalPages > 6
			pages.push(2, 3, 4, 5, "...");
		} else if (currentPage >= totalPages - 4) {
			// Jeśli currentPage jest blisko końca (w ostatnich 5 stronach)
			pages.push("...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1);
		} else {
			// Jeśli currentPage znajduje się "w środku"
			pages.push(
				"...",
				currentPage - 2,
				currentPage - 1,
				currentPage,
				currentPage + 1,
				currentPage + 2,
				"...",
			);
		}

		pages.push(totalPages); // Zawsze pokazuj totalPages
		console.log(pages);
		return pages.map((page, idx) =>
			typeof page === "string" ? (
				<span key={idx} className="mx-2">
					{page}
				</span>
			) : (
				<button
					key={page}
					onClick={() => onPageChange(page)}
					className={`mx-1 rounded px-3 py-2 ${
						currentPage === page ? "bg-orange-500 text-white" : "bg-gray-200"
					}`}
				>
					{page}
				</button>
			),
		);
	};

	return (
		<div className="flex items-center justify-center space-x-2">
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="rounded bg-gray-200 px-3 py-2 disabled:opacity-50"
			>
				←
			</button>
			{renderPagination()}
			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="rounded bg-gray-200 px-3 py-2 disabled:opacity-50"
			>
				→
			</button>
		</div>
	);
};

export default Pagination;
