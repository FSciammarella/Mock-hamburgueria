const clamp = (n, Max, Min) => (n < Min ? Min : n > Max ? Max : n);

export { clamp };
