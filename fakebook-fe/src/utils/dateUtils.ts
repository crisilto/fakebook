export const getYears = (): number[] => {
    const currentYear = new Date().getFullYear();
    const maxAge = 100;
    const years: number[] = [];

    for (let year = currentYear; year >= currentYear - maxAge; year--) {
        years.push(year);
    }

    return years;
};

export const getMonths = (): string[] => [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const getDays = (month: number): number[] => {
    const daysInMonth = new Date(new Date().getFullYear(), month, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

export const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
};

export const getCurrentDate = () => {
    const today = new Date();
    return {
        currentDay: String(today.getDate()),
        currentMonth: String(today.getMonth() + 1),
        currentYear: String(today.getFullYear()),
    };
};

export const isValidAge = (birthDate: string, minAge: number = 10, maxAge: number = 100): boolean => {
    const age = calculateAge(birthDate);
    return age >= minAge && age <= maxAge;
};