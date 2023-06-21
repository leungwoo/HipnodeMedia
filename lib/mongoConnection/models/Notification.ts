import { Schema, models, model, Document, SchemaTypes } from 'mongoose';

import { INotification } from '../../utils/type';

export interface INotificationModel extends INotification, Document {}
const NotificationSchema: Schema = new Schema({
  description: {
    type: String,
    maxLength: 150,
    required: true,
  },
  forUser: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  fromUser: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    required: true,
    default: false,
  },
  created_at: { type: Date, default: () => Date.now(), immutable: true },
});
const Notification =
  models.Notification ||
  model<INotificationModel>('Notification', NotificationSchema);

export default Notification;
