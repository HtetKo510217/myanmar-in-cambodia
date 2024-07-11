class Comment {
    constructor(id, content, userId, postId, replyToCommentId = null) {
        this.id = id;
        this.content = content;
        this.userId = userId;
        this.postId = postId;
        this.replyToCommentId = replyToCommentId;
    }
}

export default Comment;