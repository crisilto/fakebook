export const getYears = () => {
    const currentYear = new Date().getFullYear();
    const minAge = 10;
    const maxAge = 100;
    const years = [];

    for (let year = currentYear - minAge; year >= currentYear - maxAge; year--) {
        years.push(year);
    }

    return years;
};

export const getMonths = () => [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const getDays = (month) => {
    const daysInMonth = new Date(new Date().getFullYear(), month, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

export const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
};