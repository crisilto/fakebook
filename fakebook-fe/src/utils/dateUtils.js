export const getMonths = () => {
    return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
};

export const getDays = () => {
    return Array.from({ length: 31 }, (_, i) => i + 1);
};

export const getYears = () => {
    return Array.from({ length: 120 }, (_, i) => new Date().getFullYear() - i);
};