export const formatSalary = (salary: { currency: string; value: number; unitText: string }) => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: salary.currency,
    minimumFractionDigits: 0
  }).format(salary.value);
  return `${formatted}/${salary.unitText.toLowerCase()}`;
}; 