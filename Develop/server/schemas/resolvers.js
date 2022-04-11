const { User } = require('../models');


const resolvers = {
    Query: {
      users: async (parent, args, context) =>{
          if (context.user){
              const data = User.findOne({ _id: context.user._id })
              .select('-__v -password')
            
    
            return userData;
          }
          }
      }
      },

        Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, args, context) => {
        if (context.user) {
  
          const user = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { thoughts: thought._id } },
            { new: true }
          );
  
          return user;
        },
        
 
  
  module.exports = resolvers;