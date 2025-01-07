const Application = require('../models/emailModel.js')

const saveApplication = async (data) => {
    try {
      const application = new Application(data);
      const savedApplication = await application.save();
      console.log('Application saved:', savedApplication);
      return savedApplication;
    } catch (error) {
      console.error('Error saving application:', error);
      throw error;
    }
  };
  
  module.exports = { saveApplication };