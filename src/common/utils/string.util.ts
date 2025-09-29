export const formatTimeTicks = (count?: number): string => {
	return count !== undefined ? count.toString().padStart(2, '0') : '00';
};
