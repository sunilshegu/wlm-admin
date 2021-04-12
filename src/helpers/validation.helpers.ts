export const isValidEmail = (email: string): boolean => {
    if(!email) {
      return false;
    }
  
    return /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)
  }
  
  export const isValidPassword = (password: string): boolean => {
    if(password && password.length >= 8) {
      return true;
    }
  
    return false;
  }
  
  export const isValidContact = (phoneNumber: string): boolean => {
    return /^[1-9][0-9]{9}$/.test(phoneNumber);
  };
  