export interface SelfieUser {
    _id: string,
    firstName: string,
    lastName: string,
    mobile: string,
    images: string[],
    selfie: {
        status: SelfieStatus,
        url: string,
        poseId: {
            url: string
        }
    }
}

export interface ApproveSelfie {
    userId: string,
    selfieStatus: SelfieStatus
}

export interface DeleteImage {
    userId: string,
    index: number
}

export enum SelfieStatus {
    NotUploaded = 0,
    PendingApproval= 1,
    Approved = 2,
    Declined = 3
}