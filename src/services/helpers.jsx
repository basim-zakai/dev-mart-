import React from 'react';
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Helper = {
    validateEmail(email){
        return emailRegex.test(email);
    },
    validatePassword(password){
        return password.length > 8;
    }
 
}
