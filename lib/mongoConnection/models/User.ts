import { Schema, models, model, Document, SchemaTypes } from 'mongoose';

// Create type checking for the model we create in our application
import { IUser } from '../../utils/type';

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema({
  name: { type: String },
  display_name: {
    type: String,
    required: true,
    // unique: true,
  },
  profile_photo: { type: String },
  tagline: String,
  about: String,
  provider_id: { type: String },
  email: {
    type: String,
    index: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  // favgroup
  groups_owned: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Group',
      default: [],
    },
  ],
  groups_joined: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Group',
      default: [],
    },
  ],
  posts_made: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Post',
      default: [],
    },
  ],
  comment_made: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'comment',
      default: [],
    },
  ],
  role: { type: String, default: 'user' },
  is_admin: { type: Boolean, default: false },
  followers: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      default: [],
    },
  ],
  following: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      default: [],
    },
  ],
  userUrl: String,
  twitter: String,
  facebook: String,
  instagram: String,
  points: { type: Number, default: 0 },
  created_at: { type: Date, default: () => Date.now(), immutable: true },
});
UserSchema.index({ name: 'text', email: 'text', display_name: 'text' });
// we use models.Test and then the logical OR || operator and then use the model function by mongoose.
// This is in contrast to express.js where we dont have a check whether a model was created.
//  We do that because we don't want to create a new model every single time we hit an API route in Next.js
const User = models.User || model<IUserModel>('User', UserSchema);

export default User;
