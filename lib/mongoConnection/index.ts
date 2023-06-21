import mongoose from 'mongoose';
import Logging from '../utils/Logging';

const connectMongo = async () => {
  mongoose.connect(process.env.MONGODB_URL as string).then(() => {
    Logging.info('Mongo connected successfully.');
  }).catch((e) => {
    console.log(e, 'Connection to Mongo Unsuccessful');
    process.exit(1);
  });
};
// const db = () => connectMongo();

export default connectMongo;
