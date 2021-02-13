type ProfileReponse = {
    login: string,
    name: string,
    postCount: number,
    subCount: number
};

export type UsersAPI = {
    getUserProfile(): Promise<ProfileReponse>
};