import { Schema, models, model, Document, SchemaTypes } from 'mongoose';

import { IComment } from '../../utils/type';

export interface ICommentModel extends IComment, Document { }
const CommentSchema: Schema = new Schema({
  post_id: {
    type: SchemaTypes.ObjectId,
    ref: 'Post',
    required: true,
  },
  parent_comment: {
    type: SchemaTypes.ObjectId,
    ref: 'Comment',
    required: false,
  },
  author: {
    type: String,
    required: true,
  },
  parent_post: {
    type: SchemaTypes.ObjectId,
    ref: 'Post',
    required: false,
  },
  parent_group: {
    type: SchemaTypes.ObjectId,
    ref: 'Group',
    required: false,
  },
  content: {
    type: String,
    maxLength: 250,
    required: true,
  },

  created_at: { type: Date, default: () => Date.now(), immutable: true },

});

const Comment = models.Comment || model<ICommentModel>('Comment', CommentSchema);

export default Comment;
