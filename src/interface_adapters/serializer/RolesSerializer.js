const _serializeSingleRoles = (roles) => {
    return {
      'id': roles.id,
      'name': roles.name,
      'mobile': roles.mobile,
      'email': roles.email,
      'password': roles.password,
      'otp': roles.otp
    };
  };
  
  module.exports = class {
  
    serialize(data) {
      if (!data) {
        throw new Error('Expect data to be not undefined nor null');
      }
      if (Array.isArray(data)) {
        return data.map(roles => _serializeSingleRoles(roles));
      }
      return _serializeSingleRoles(data);
    }
  
  };