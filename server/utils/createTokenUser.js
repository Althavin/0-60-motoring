const createTokenUser = (user) => {

    return {  userId: user._id, name:user.name,avatar:user.avatar,role:user.role };
  };
  
  module.exports = createTokenUser;