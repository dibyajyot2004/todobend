import mongoose from 'mongoose';

const conn = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://dibya1234:dibya824@cluster0.wxsv20m.mongodb.net/'
    );
    console.log('Connected');
  } catch (error) {
    console.error(error);
  }
};

conn();
