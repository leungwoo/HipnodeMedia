import { Schema, models, model, Document, SchemaTypes } from 'mongoose';

import { IGroup } from '../../utils/type';

export interface IGroupModel extends IGroup, Document{}
const GroupSchema: Schema = new Schema({
  // _id: { type: SchemaTypes.ObjectId, required: true },
  title: { type: String,
    maxLength: 26,
    required: true },
  about: { type: String,
    required: true },
  group_image: { type: String,
    required: true },
  group_icon: { type: String,
    required: true },
  popular_tags: { type: [String],
    required: true },
  posts: [{
    type: SchemaTypes.ObjectId,
    ref: 'Post',
    default: [],
  }],
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
    default: '',
  },
  admins: [{
    type: SchemaTypes.ObjectId,
    ref: 'User',
    default: [],
  }],
  members: [{
    type: SchemaTypes.ObjectId,
    ref: 'User',
    default: [],
  }],
  created_at: { type: Date, default: () => Date.now(), immutable: true },

});

const Group = models.Group || model<IGroupModel>('Group', GroupSchema);

export default Group;
