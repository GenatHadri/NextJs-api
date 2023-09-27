import { comments } from "@/data/comments";
import { Comment } from "@/types";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;

    const lastComment: Comment = comments[comments.length - 1] ?? [];
    console.log("lastCommentId: ", lastComment.id);

    const newComment: Comment = {
      id: lastComment.id + 1,
      text: comment,
    };

    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
