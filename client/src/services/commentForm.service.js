import httpService from "./http.service";

class CommentFormService {
  constructor() {
    this.httpService = httpService;
  }

  async submitForm(commentInfos) {
    const comment = {
      commentIndex: commentInfos.commentIndex,
      productId: commentInfos.productId,
      user: commentInfos.user,
      comment: commentInfos.comment,
    };

    this.httpService.addNewComment(comment);
  }
}

const commentFormService = new CommentFormService();
export default commentFormService;
