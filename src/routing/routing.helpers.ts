export const PATHS = {
    HOME: '/',
    LOGIN: '/login',
    DASHBOARD: '/dashboard',
    ALL_USERS: '/all_users',
    SELFIE_VERIFICATION: '/selfie_verification',
    ID_VERIFICATION: '/id_verification',
    FB_VERIFICATION: '/fb_verification',
};
export const getDashboardPath = (id: number) => {
    return PATHS.DASHBOARD.replace(':id', '' + id);
}
