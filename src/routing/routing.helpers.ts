export const PATHS = {
    HOME: '/',
    LOGIN: '/login',
    DASHBOARD: '/dashboard',
    ALL_USERS: '/all_users',
    SELFIE: '/dashboard/selfie',
    ID: '/dashboard/id',
    PHOTOS: '/dashboard/photos',
    ABOUT: '/dashboard/about',
};

export const getDashboardPath = (id: number) => {
    return PATHS.DASHBOARD.replace(':id', '' + id);
}
