class Content {
    constructor(
        id,
        userId,
        categoryIds,
        title,
        imageUrl,
        description,
        address
    ) {
        this.id = id;
        this.userId = userId;
        this.categoryIds = categoryIds;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.address = address;
    }
}

export default Content;
