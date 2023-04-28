import {Post} from "../posts/posts.interfaces";
import {postsMocks} from "../posts/posts.mocks";

export class PostsService {
    private static instance: PostsService;
    private readonly _posts: Post[];

    private constructor() {
        this._posts = postsMocks;
    }

    static getInstance(): PostsService {
        if (!PostsService.instance) {
            PostsService.instance = new PostsService();
        }
        return PostsService.instance;
    }

    getPost(postId: string): Post | undefined {
        return this._posts.find(post => post.id === postId)
    }

    add(post: Post) {
        this._posts.push(post)
    }

    edit(post: Post) {
        const inList = this.getPost(post.id)
        if (inList) {
            inList.name = post.name
            inList.post = post.post
        } else {
            this._posts.push(post)
        }
    }

    get posts(): Post[] {
        return this._posts;
    }
}
