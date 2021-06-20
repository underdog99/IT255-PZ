export class News{

    description: string;
    category: string;
    created_at: string;
    user: string;
    user_title: string;
    project: string;

    constructor(description: string, category: string, created_at: string, user: string, user_title: string, project: string){
        this.description = description;
        this.category = category;
        this.created_at = created_at;
        this.user = user;
        this.user_title = user_title;
        this.project = project;
    }
}