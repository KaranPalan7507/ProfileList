export class UserModel {
    private userName: string;
    private name: string;
    private profileImage: { small: string, medium: string, large: string };
    private links: any;
    private categories: any;
    private urls:any;

    constructor(data: any) {
        this.userName = data.user.username;
        this.name = data.user.name;
        this.profileImage = data.user.profile_image;
        this.links = data.user.links;
        this.categories = data.categories;
        this.urls=data.urls;
    }
}