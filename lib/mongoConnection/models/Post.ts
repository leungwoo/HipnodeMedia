import { Schema, models, model, Document, SchemaTypes } from 'mongoose';

import { IPost } from '../../utils/type';

export interface IPostModel extends IPost, Document {}
const PostSchema: Schema = new Schema({
  title: {
    type: String,
    maxLength: 150,
    required: true,
  },
  content: {
    type: String,
    maxLength: 2500,
    required: true,
  },
  post_image: {
    type: String,
    // required: true },
  },
  post_tags: {
    type: [String],
    // required: true
  },
  author: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  likes: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      default: [],
    },
  ],
  // parent_group: {
  //   type: SchemaTypes.ObjectId,
  //   ref: 'Group',
  //   default: '',
  // //  required: true,
  // },
  // comments: [{
  //   type: SchemaTypes.ObjectId,
  //   ref: 'Comment',
  //   default: [],
  // }],
  created_at: { type: Date, default: () => Date.now(), immutable: true },
});
PostSchema.index({ title: 'text', content: 'text', post_tags: 'text' });
const Post = models.Post || model<IPostModel>('Post', PostSchema);

export default Post;
